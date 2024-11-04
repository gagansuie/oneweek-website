import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import { env } from '$env/dynamic/public'

export const load = (({ locals, url }: { locals: any; url: URL }) => {
	if (env.PUBLIC_FEATURE_WAITLIST === 'true' || url.pathname === '/login') {
		throw redirect(307, '/landing')
	} else {
		if (!locals.user) {
			throw redirect(307, '/landing')
		} else {
			throw redirect(307, '/dashboard')
		}
	}
}) satisfies LayoutServerLoad
