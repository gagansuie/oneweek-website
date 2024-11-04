<script lang="ts">
	import '$lib/assets/styles/tailwind-output.css'
	import Toolbar from '$lib/components/Global/Toolbar.svelte'
	import loginBackground from '$lib/assets/images/login_background.png'
	import { page } from '$app/stores'

	// @ts-ignore
	import NProgress from 'nprogress'
	import { navigating } from '$app/stores'

	// NProgress Loading bar
	import '$lib/assets/styles/nprogress.css'

	NProgress.configure({
		minimum: 0.75,
		showSpinner: false,
		speed: 5,
		trickleSpeed: 200
	})

	$effect(() => {
		if ($navigating) {
			NProgress.start()
		} else {
			NProgress.done()
		}
	})
</script>

<div
	class="h-screen items-center justify-center"
	style={$page.url.pathname === '/login'
		? `background-image: url(${loginBackground}); background-size: cover; background-position: center;`
		: ''}>
	<Toolbar />
	<main class="w-screen overflow-hidden">
		<slot />
	</main>
</div>

<style>
</style>
