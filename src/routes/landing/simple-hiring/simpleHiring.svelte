<script>
	import IconDashedLine from '$lib/assets/icons/IconDashedLine.svelte'

	let selectedState = $state(1)
	const items = [
		{
			title: 'Post your project or find a job',
			details:
				"Posting your project on OneWeek is quick and easy. Simply provide a brief description of what you need, select your categories, and set your budget. In just minutes, your project will be visible to a wide range of talented freelancers, ready to bring your vision to life. Whether it's a short-term task or a long-term project, OneWeek makes it simple to connect with the right professionals and get started immediately."
		},
		{
			title: 'Get matched with talent',
			details:
				'Browse through a diverse pool of talented freelancers. Use filters to narrow down your search based on skills, experience, and ratings. Connect with freelancers who match your project requirements and start collaborating.'
		},
		{
			title: 'Collaborate and complete the job',
			details:
				'Keep track of your projects with our intuitive dashboard. Communicate with freelancers, review their work, and make payments securely through our platform. Managing your projects has never been easier.'
		},
		{
			title: 'Pay and earn securely',
			details:
				'OneWeek offers secure payment options for both freelancers and clients. Freelancers can rest assured that they will be paid for their work, while clients can trust that their payments are protected until the job is completed.'
		}
	]
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
					{#each items as item, index}
						<li
							class="text-right {index === 3
								? selectedState !== index + 1
									? 'text-success/60'
									: 'text-success'
								: selectedState !== index + 1
									? 'text-white/60'
									: ''}">
							<button
								class="mx-auto flex w-full items-center justify-end gap-5 max-md:w-10/12"
								onclick={() => (selectedState = index + 1)}>
								{item.title}
								<div
									class="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border duration-100 {selectedState ===
									index + 1
										? 'border-white/40 bg-white/20'
										: 'border-white/10 bg-transparent text-white/60'}">
									{index + 1}
								</div>
							</button>
						</li>
						{#if index < items.length - 1}
							<li class="flex justify-end pr-[38px] md:pr-[22px]"><IconDashedLine /></li>
						{/if}
					{/each}
				</ul>
			</div>
			<div class="bg-primary px-5 py-5 text-black md:px-7">
				<h3 class="text-lg font-medium">{items[selectedState - 1].title}</h3>
				<p class="mt-4 text-xs leading-relaxed md:text-[15px]">
					{items[selectedState - 1].details}
				</p>
			</div>
		</div>
	</section>
</div>
