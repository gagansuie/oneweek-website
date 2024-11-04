import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (({ locals }: { locals: any }) => {
	if (!locals.user) {
		throw redirect(307, '/landing')
	} else {
		throw redirect(307, '/dashboard')
	}
}) satisfies PageServerLoad
