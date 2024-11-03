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
	<div class="navbar mx-auto max-w-3xl border border-[#141414] px-2 pr-5 font-urban">
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

		<div class="dropdown dropdown-end ml-auto md:hidden">
			<div tabindex="0" role="button" class="btn btn-ghost"><IconHamburger /></div>
			<ul class="menu dropdown-content z-[1] w-40 gap-2 bg-base-200 p-1 text-base-content shadow">
				<li><a href="/">Hire Talent</a></li>
				<li><a href="/">Find Work</a></li>
				<li><a href="/">FAQ</a></li>
				<li><a href="/">Log in</a></li>
			</ul>
		</div>

		<ul class="navbar-center hidden gap-12 md:flex">
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
						<div tabindex="0" role="button" class="avatar btn btn-square btn-ghost">
							<div class="w-10 rounded-md">
								<img alt="user avatar" src={$page.data.user.user?.avatar} />
							</div>
						</div>
						<ul
							class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
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
				<a class="btn btn-primary h-fit min-h-0 py-2" href="/login">Login</a>
			{/if}
		</div>
	</div>
</div>
