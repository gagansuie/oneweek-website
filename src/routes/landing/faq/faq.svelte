<script>
	import IconDropdownArrow from '$lib/assets/icons/IconDropdownArrow.svelte'
</script>

<div class="mx-auto max-w-7xl py-20 font-urban">
	<section class="">
		<h2
			class="flex flex-wrap items-center justify-center gap-2 text-center font-urban text-4xl font-semibold leading-normal text-white max-md:flex-col md:text-5xl">
			Frequently Asked Questions
		</h2>

		<div class="mx-auto mt-16 max-w-4xl space-y-5 font-urban">
			{#each new Array(6) as _}
				<div class="collapse collapse-arrow border border-[#636363] bg-white/10 p-2">
					<input type="checkbox" class="peer" />
					<div
						class="collapse-title flex justify-between text-base font-medium peer-checked:text-primary">
						What makes OneWeek different from other work marketplaces?
					</div>
					<div class="collapse-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quia tempore ullam
							amet, eaque impedit consequuntur, consequatur quidem aut rerum exercitationem
							perspiciatis possimus error consectetur adipisci doloribus ipsa dicta eligendi.
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
