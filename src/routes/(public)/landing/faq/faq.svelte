<script>
	const faqList = [
		{
			question: 'What makes OneWeek different from other work marketplaces?',
			answer: 'Lower rates, faster payments, and a more user-friendly interface.'
		},
		{
			question: 'How much does OneWeek charge in fees?',
			answer:
				'4% is charged per milestone. For example, a $100 project will be charged $4. The freelancer will receive $96.'
		},
		{
			question: 'How does OneWeek ensure the quality of freelancers or clients?',
			answer:
				'Any freelancer or client can be reported for any reason. OneWeek will investigate the report and take action if necessary. OneWeek also has a rating system for both freelancers and clients.'
		},
		{
			question: 'Can I switch between being a client and a freelancer?',
			answer: 'Yes. You can switch between being a client and a freelancer anytime.'
		},
		{
			question: 'When do freelancers get paid?',
			answer:
				'At the end of the week, all freelancers get paid for the work they have completed. The payment is processed through Stripe Connect.'
		},
		{
			question: 'What does the Premium service offer?',
			answer:
				'Our premium service offers an AI-powered talent-matching service that will match you with the best freelancers for your project.'
		},
		{
			question: 'What is the Affiliate program?',
			answer:
				'Bring your contract from another platform and spend/earn at least $10,000 to earn an Affiliate badge (which provides higher rank in jobs and bids, and the lowest fees on future services).'
		},
		{
			question: 'What types of jobs can I find or post on OneWeek?',
			answer:
				'Any type of remote job that is within our list of categories can be posted on OneWeek. From graphic design to web development, OneWeek has a wide range of jobs available.'
		},
		{
			question: 'Is OneWeek available globally?',
			answer: 'Yes. But Freelancers are limited to where Stripe Connect is available.'
		}
	]
</script>

<section id="faq-section" class="mx-auto max-w-7xl py-20 font-urban">
	<h2
		class="flex flex-wrap items-center justify-center gap-2 text-center font-urban text-4xl font-semibold leading-normal text-white max-md:flex-col md:text-5xl">
		Frequently Asked Questions
	</h2>

	<div class="mx-auto mt-16 max-w-4xl space-y-5 font-urban">
		{#each faqList as faq}
			<div class="collapse collapse-arrow border border-[#636363] bg-white/10 p-2">
				<input type="checkbox" class="peer" />
				<div
					class="collapse-title flex justify-between text-base font-medium peer-checked:text-primary">
					{faq.question}
				</div>
				<div class="collapse-content">
					<p>
						{faq.answer}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
