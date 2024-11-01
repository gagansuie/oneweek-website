<script>
	import IconDashedLine from '$lib/assets/icons/IconDashedLine.svelte'

	let selectedState = $state(1)

	$effect(() => {
		const interval = setInterval(() => {
			selectedState = selectedState === 4 ? 1 : selectedState + 1
		}, 3000)

		return () => clearInterval(interval)
	})
</script>

<div class="mx-auto max-w-7xl py-20 font-urban">
	<section class="">
		<h2
			class="flex flex-wrap items-center justify-center gap-2 text-center font-urban text-4xl font-semibold leading-normal text-white max-md:flex-col md:text-5xl">
			Hiring Made Simple
		</h2>

		<p class="mx-auto mt-4 max-w-3xl text-balance text-center text-white/60 md:mt-6 md:text-lg">
			We've streamlined the hiring process to make it easy for you to get started. Here's how
			OneWeek works
		</p>

		<div class="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-5 max-md:w-11/12">
			<div class="">
				<ul class="space-y-2">
					<li class="text-right {selectedState !== 1 && 'text-white/60'}">
						<button
							class="mx-auto flex w-full items-center justify-end gap-5 max-md:w-10/12"
							onclick={() => (selectedState = 1)}>
							Post your project or find a job

							<div
								class="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border duration-100 {selectedState ===
								1
									? 'border-white/40 bg-white/20'
									: 'border-white/10 bg-transparent text-white/60'}">
								1
							</div>
						</button>
					</li>

					<li class="flex justify-end pr-[22px]">
						<IconDashedLine />
					</li>

					<li class="text-right {selectedState !== 2 && 'text-white/60'}">
						<button
							class="mx-auto flex w-full items-center justify-end gap-5 max-md:w-10/12"
							onclick={() => (selectedState = 2)}>
							Get matched with talent

							<div
								class="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border duration-100 {selectedState ===
								2
									? 'border-white/40 bg-white/20'
									: 'border-white/10 bg-transparent text-white/60'}">
								2
							</div>
						</button>
					</li>

					<li class="flex justify-end pr-[22px]">
						<IconDashedLine />
					</li>

					<li class="text-right {selectedState !== 3 && 'text-white/60'}">
						<button
							class="mx-auto flex w-full items-center justify-end gap-5 max-md:w-10/12"
							onclick={() => (selectedState = 3)}>
							Collaborate & complete the job
							<div
								class="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border duration-100 {selectedState ===
								3
									? 'border-white/40 bg-white/20'
									: 'border-white/10 bg-transparent text-white/60'}">
								3
							</div>
						</button>
					</li>

					<li class="flex justify-end pr-[22px]">
						<IconDashedLine />
					</li>

					<li class="text-right text-primary {selectedState !== 4 && 'text-primary/60'}">
						<button
							class="mx-auto flex w-full items-center justify-end gap-5 max-md:w-10/12"
							onclick={() => (selectedState = 4)}>
							Pay and earn securely
							<div
								class="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border text-white duration-100 {selectedState ===
								4
									? 'border-white/40 bg-white/20'
									: 'border-white/10 bg-transparent text-white/60'}">
								4
							</div>
						</button>
					</li>
				</ul>
			</div>
			<div class="bg-primary px-5 py-5 text-black md:px-7">
				<h3 class="text-lg font-medium">Post Your Project</h3>
				<p class="mt-4 text-xs leading-relaxed md:text-[15px]">
					Posting your project on One Week is quick and easy. Simply provide a brief description of
					what you need, set your budget, and choose the skills you're looking for. In just minutes,
					your project will be visible to a wide range of talented freelancers, ready to bring your
					vision to life. Whether it's a short-term task or a long-term project, One Week makes it
					simple to connect with the right professionals and get started immediately
				</p>
			</div>
		</div>
	</section>
</div>
