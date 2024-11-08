import { redirect, type Handle } from '@sveltejs/kit'
import { get as getWritableVal } from 'svelte/store'
import { Authenticate } from '$lib/authentication/authentication'
import { get } from '$lib/api'
import { user_role } from '$lib/stores/userStore'
import { env } from '$env/dynamic/public'

import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(env.PUBLIC_SENTRY_DSN || '', {
	toucanOptions: {
		tracesSampleRate: 1.0
	},
	handleOptions: {
		handleUnknownRoutes: false
	},
	enableInDevMode: false
})

export const handle = onHandle(async ({ event, resolve }) => {
	const pathname = event.url.pathname
	const userId = event.url.searchParams.get('userId') || event.cookies.get('userId') || ''
	let token = event.url.searchParams.get('token') || event.cookies.get('token') || ''
	let user: any = event.locals.user?.user || ''
	const role = getWritableVal(user_role)

	if (token && userId) {
		if (!user) {
			const response = await get(`auth/me`, { userId, token })
			if (response) {
				if (response.freshJwt) {
					token = response.freshJwt
				}
				user = response.user
			}
		} else {
			if (user.isBanned) {
				const cookieItem = ['token', 'userId', 'user']
				cookieItem.forEach((item) => {
					event.cookies.set(item, '', {
						path: '/',
						expires: new Date(0)
					})
				})
			}
		}

		if (pathname === '/') {
			event.cookies.set('token', token, {
				path: '/',
				maxAge: 60 * 60 * 24 * 30
			})
			event.cookies.set('userId', userId, {
				path: '/',
				maxAge: 60 * 60 * 24 * 30
			})
		}
		event.locals = {
			user: {
				userId: parseInt(userId),
				token,
				user
			}
		}
	}

	if (Authenticate({ pathname, user_role: role || 'user' })) {
		if (env.PUBLIC_MAINTENANCE_MODE === 'true') {
			if (pathname === '/maintenance') {
				return await resolve(event)
			} else {
				redirect(302, '/maintenance')
			}
		} else if (env.PUBLIC_FEATURE_WAITLIST === 'true') {
			if (pathname === '/landing') {
				return await resolve(event)
			} else {
				redirect(302, '/landing')
			}
		} else {
			if (
				pathname === '/maintenance' ||
				(pathname === '/login' && userId) ||
				(pathname === '/dashboard' && !userId)
			) {
				redirect(302, '/')
			} else {
				return await resolve(event)
			}
		}
	} else {
		return await resolve(event)
	}
})

export const handleError = onError((e, sentryEventId) => {
	console.log('error', e)
	return {
		message: 'Whoops something went wrong!'
	}
})
