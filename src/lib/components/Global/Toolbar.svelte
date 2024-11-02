<script>
	import { page } from '$app/stores'
	import { env } from '$env/dynamic/public'
	import IconCross from '$lib/assets/icons/IconCross.svelte'
	import IconDownChevron from '$lib/assets/icons/IconDownChevron.svelte'
	import IconHamburger from '$lib/assets/icons/IconHamburger.svelte'
	import IconLogo from '$lib/assets/icons/IconLogo.svelte'
	import IconMenu from '$lib/assets/icons/IconMenu.svelte'
	import IconSearch from '$lib/assets/icons/IconSearch.svelte'
</script>

<div class="md:px-4 md:pt-4">
	<div
		class="navbar drawer drawer-end font-urban border border-[#141414] max-w-3xl px-2 pr-5 mx-auto">
		<div class="navbar-start">
			<a
				class="btn btn-ghost text-xl"
				href={env.PUBLIC_FEATURE_WAITLIST === 'true'
					? '/waitlist'
					: $page.data.user?.userId
						? '/dashboard'
						: '/landing'}
				><IconLogo /> <span class="font-medium">OneWeek</span>
			</a>
		</div>

		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content md:hidden navbar-end">
			<label for="my-drawer" class="btn btn-ghost drawer-button"> <IconHamburger /></label>
		</div>

		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

			<ul class="menu bg-base-200 text-base-content gap-2 min-h-full w-60 p-4 py-8">
				<!-- <label for="my-drawer" aria-label="close sidebar" class="btn w-fit btn-ghost drawer-button">
					<IconCross />
				</label> -->
				<li><a href="/">Hire Talent</a></li>
				<li><a href="/">Find Work</a></li>
				<li><a href="/">FAQ</a></li>
				<li><a href="/">Log in</a></li>
			</ul>
		</div>

		<ul class="navbar-center hidden md:flex gap-12">
			<li class="text-primary"><a href="/"> Hire Talent</a></li>
			<li><a href="/"> Find Work</a></li>
			<li><a href="/"> FAQ</a></li>
		</ul>

		<div class="navbar-end max-md:hidden">
			{#if $page.data.user?.userId}
				<div class="flex-none gap-2">
					{#if env.PUBLIC_FEATURE_WAITLIST === 'false'}
						<div class="form-control">
							<label class="input input-bordered flex items-center gap-2">
								<input type="text" placeholder="Search" class="w-24 md:w-auto" />
								<IconSearch />
							</label>
						</div>
					{/if}
					<div class="dropdown dropdown-end">
						<div tabindex="0" role="button" class="btn btn-ghost btn-square avatar">
							<div class="w-10 rounded-md">
								<img alt="user avatar" src={$page.data.user.user?.avatar} />
							</div>
						</div>
						<ul
							class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
							{#if env.PUBLIC_FEATURE_WAITLIST === 'false'}
								<li><a href="/settings">Settings</a></li>
							{/if}
							<li><a href="https://codecrow.io/legal" target="_blank">Legal</a></li>
							<form action="/logout" method="POST">
								<li>
									<button class="custom-menu-item" type="submit"> Logout </button>
								</li>
							</form>
						</ul>
					</div>
				</div>
			{:else}
				<a class="btn btn-primary py-2 h-fit min-h-0" href="/login">Login</a>
			{/if}
		</div>
	</div>
</div>
