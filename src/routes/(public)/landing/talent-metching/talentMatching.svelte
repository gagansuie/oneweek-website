<script>
	import IconTool from '$lib/assets/icons/IconTool.svelte'
</script>

<div class="py-20 font-urban">
	<section class="mx-auto px-5 md:max-w-3xl lg:max-w-7xl">
		<h2
			class="mx-auto flex flex-wrap items-center justify-center gap-2 text-balance text-center font-urban text-4xl font-semibold leading-normal text-white max-md:w-11/12 max-md:flex-col md:text-5xl">
			Hire More with AI Talent-Matching
		</h2>

		<p class="mx-auto mt-4 max-w-6xl text-balance text-center text-white/60 md:mt-6 md:text-lg">
			Looking to build a versatile team for your project? OneWeek offers access to a wide range of
			professionals, ready to help you succeed. Our AI-powered talent-matching is available to all
			users.
		</p>

		<div
			class="mx-2 mt-10 grid grid-cols-1 bg-gradient-to-b from-[#00B7CC] to-[#00173A] px-5 py-12 md:mx-auto md:mt-14 md:grid-cols-[3fr_2fr] md:gap-2 md:py-16">
			<div class="h-72 md:h-[16rem] lg:h-[25rem]">
				<img
					src="/images/people-grid.png"
					class="aspect-[4/1] h-full w-fit -translate-x-0 object-contain md:-translate-x-[7rem]"
					alt="freelancers" />
			</div>

			<div class="lg:-ml-10">
				<h3
					class="mt-6 flex items-center justify-center gap-6 text-xl font-medium text-white md:flex-col md:items-start md:justify-start md:text-left">
					<div
						class="rounded-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0.1)_100%);] p-4">
						<IconTool />
					</div>
					Hire Top Talent
				</h3>

				<p
					class="mt-5 text-balance text-center text-white/80 max-md:mx-auto max-md:max-w-[24rem] md:w-10/12 md:text-left">
					Using our AI-powered talent-matching, you can focus on your project and let our service
					match you with the ideal candidate. <br /> Start hiring today!
				</p>

				<button
					class="btn btn-ghost mt-8 block h-fit min-h-0 w-fit bg-black/30 px-8 py-2.5 text-center max-md:mx-auto">
					Explore
				</button>
			</div>
		</div>
	</section>
</div>
