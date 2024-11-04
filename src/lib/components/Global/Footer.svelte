<script lang="ts">
	import IconAppStore from '$lib/assets/icons/IconAppStore.svelte'
	import IconLogo from '$lib/assets/icons/IconLogo.svelte'
	import IconPlayStore from '$lib/assets/icons/IconPlayStore.svelte'
</script>

<footer class="mb-10 border-y border-white/10 p-10 py-14 text-base-content">
	<div class="footer mx-auto max-w-5xl justify-between">
		<aside class="font-urban text-white">
			<a href="/">
				<div class="flex items-center gap-3 text-xl font-semibold">
					<IconLogo /> OneWeek
				</div>
			</a>

			<div class="mt-4 flex items-center gap-4">
				<IconAppStore />

				<IconPlayStore />
			</div>

			<div class="mt-14 text-xs font-medium max-md:hidden">
				Code Crow © 2024 <span class="ml-4 text-white/50">v{__VERSION__} [beta]</span>
			</div>
		</aside>
		<nav>
			<h6 class="mb-4 font-medium">Socials</h6>
			<a href="https://github.com/CodeCrowCorp" class="link">GitHub</a>
			<a href="https://twitter.com/gagansuie" class="link">Twitter</a>
			<a href="https://twitch.tv/gagansuie" class="link">Twitch</a>
			<a href="https://youtube.com/@gagansuie" class="link">YouTube</a>
			<a href="https://tiktok.com/@gagansuie" class="link">TikTok</a>
		</nav>
		<nav>
			<h6 class="mb-4 font-medium">Company</h6>
			<a href="/" class="link">About </a>
			<a href="https://codecrow.io/careers" class="link">Careers</a>
			<a href="https://codecrow.io/contact" class="link">Contact us</a>
			<a href="https://codecrow.io/legal" class="link">Legal</a>
		</nav>
	</div>
	<div class="mt-14 text-xs font-medium md:hidden">
		Code Crow © 2024 <span class="ml-4 text-white/50">v{__VERSION__} [beta]</span>
	</div>
</footer>

<style lang="postcss">
	.link {
		@apply relative mb-1.5 text-white/60 hover:text-white;
		text-decoration-line: none;
	}

	.link::after {
		@apply absolute -right-5 top-1 h-2 w-2 bg-cover bg-no-repeat duration-100;
		background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.1749 0.288367C7.11873 0.232959 7.05192 0.189507 6.9785 0.160633C6.90507 0.131758 6.82656 0.118061 6.7477 0.120367H2.0293C1.8453 0.123567 1.7093 0.181167 1.6093 0.281167C1.3789 0.511567 1.3757 0.837967 1.5949 1.05717C1.64747 1.11002 1.71009 1.15182 1.77905 1.18013C1.84802 1.20843 1.92195 1.22265 1.9965 1.22197L3.6237 1.23317L5.6157 1.14357L4.7333 1.92597L0.381298 6.27797C0.140498 6.51797 0.140498 6.84917 0.377299 7.08597C0.610898 7.31957 0.941298 7.31957 1.1821 7.07877L5.5341 2.72677L6.3165 1.84357L6.2269 3.83637L6.2373 5.46277C6.23665 5.5375 6.25098 5.6116 6.27942 5.68071C6.30786 5.74982 6.34984 5.81254 6.4029 5.86517C6.6221 6.08437 6.9485 6.08117 7.1789 5.85077C7.28398 5.74212 7.34179 5.5963 7.3397 5.44517V0.712367C7.34208 0.634251 7.32872 0.556454 7.30041 0.483611C7.27209 0.410768 7.22941 0.344368 7.1749 0.288367Z' fill='%23888888'/%3E%3C/svg%3E%0A");
		content: ' ';
	}

	.link:hover::after {
		@apply -right-6;

		text-decoration-line: none;
		background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.1749 0.288367C7.11873 0.232959 7.05192 0.189507 6.9785 0.160633C6.90507 0.131758 6.82656 0.118061 6.7477 0.120367H2.0293C1.8453 0.123567 1.7093 0.181167 1.6093 0.281167C1.3789 0.511567 1.3757 0.837967 1.5949 1.05717C1.64747 1.11002 1.71009 1.15182 1.77905 1.18013C1.84802 1.20843 1.92195 1.22265 1.9965 1.22197L3.6237 1.23317L5.6157 1.14357L4.7333 1.92597L0.381298 6.27797C0.140498 6.51797 0.140498 6.84917 0.377299 7.08597C0.610898 7.31957 0.941298 7.31957 1.1821 7.07877L5.5341 2.72677L6.3165 1.84357L6.2269 3.83637L6.2373 5.46277C6.23665 5.5375 6.25098 5.6116 6.27942 5.68071C6.30786 5.74982 6.34984 5.81254 6.4029 5.86517C6.6221 6.08437 6.9485 6.08117 7.1789 5.85077C7.28398 5.74212 7.34179 5.5963 7.3397 5.44517V0.712367C7.34208 0.634251 7.32872 0.556454 7.30041 0.483611C7.27209 0.410768 7.22941 0.344368 7.1749 0.288367Z' fill='white'/%3E%3C/svg%3E%0A");
	}
</style>
