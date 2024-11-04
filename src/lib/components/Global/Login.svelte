<script lang="ts">
	import IconSocialGoogle from '$lib/assets/icons/social/IconSocialGoogle.svelte'
	import IconSocialGitHubInverse from '$lib/assets/icons/social/IconSocialGitHubInverse.svelte'
	import { env } from '$env/dynamic/public'
	import { getHref } from '$lib/utils'
	import IconSocialApple from '$lib/assets/icons/social/IconSocialApple.svelte'

	let isGitHubHovered = $state(false)
	let isAppleHovered = $state(false)
</script>

<div class="modal-box relative bg-base-100">
	<div class="space-y-5 px-4 py-4 md:px-10">
		<h2 class="text-3xl">Log in to your account</h2>
		{#if env.PUBLIC_CROSS_ORIGIN === 'false'}
			<a
				class="btn btn-outline w-full gap-4"
				href="{env.PUBLIC_API_URL}/auth/github"
				onmouseenter={() => (isGitHubHovered = true)}
				onmouseleave={() => (isGitHubHovered = false)}>
				<IconSocialGitHubInverse {isGitHubHovered} />
				Log in with GitHub</a>
			<a class="btn btn-outline w-full gap-4" href="{env.PUBLIC_API_URL}/auth/google">
				<IconSocialGoogle />
				Log in with Google</a>
			<a
				class="btn btn-outline w-full gap-4"
				href="{env.PUBLIC_API_URL}/auth/apple"
				onmouseenter={() => (isAppleHovered = true)}
				onmouseleave={() => (isAppleHovered = false)}>
				<IconSocialApple {isAppleHovered} />
				Log in with Apple</a>
		{:else}
			<button
				class="btn btn-outline w-full gap-4"
				onmouseenter={() => (isGitHubHovered = true)}
				onmouseleave={() => (isGitHubHovered = false)}
				onclick={async () =>
					await getHref({
						provider: 'github',
						apiUrl: env.PUBLIC_API_URL,
						xApiKey: env.PUBLIC_X_API_KEY
					})}>
				<IconSocialGitHubInverse {isGitHubHovered} />
				Log in with GitHub</button>
			<button
				class="btn btn-outline w-full gap-4"
				onclick={async () =>
					await getHref({
						provider: 'google',
						apiUrl: env.PUBLIC_API_URL,
						xApiKey: env.PUBLIC_X_API_KEY
					})}>
				<IconSocialGoogle />
				Log in with Google</button>
			<button
				class="btn btn-outline w-full gap-4"
				onmouseenter={() => (isAppleHovered = true)}
				onmouseleave={() => (isAppleHovered = false)}
				onclick={async () =>
					await getHref({
						provider: 'apple',
						apiUrl: env.PUBLIC_API_URL,
						xApiKey: env.PUBLIC_X_API_KEY
					})}>
				<IconSocialApple {isAppleHovered} />
				Log in with Apple</button>
		{/if}
		<p>
			By using our platform, you confirm that you are atleast 18 years old and agree to
			<a class="link link-warning" href="https://codecrow.io/legal" target="_blank"
				>all of our policies
			</a>
		</p>
	</div>
</div>
