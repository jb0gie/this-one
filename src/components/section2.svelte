<script>
	let para1Title = 'Vision';
	let para1 = {
		sent0: 'Our world is augmenting itself with new technologies. ',
		sent1: 'We are constantly learning and evolving. ',
		sent2: 'We are constantly evolving. ',
		sent3: 'Mass adoption is coming. '
	}
	let para2Title = 'Awards';
	let dates = [
		{date: '2008', desc: 'Hurricane Katrina Relief via Secondary School 🏈 Team'},
		{date: '2014', desc: 'Won the IBM design in community award 🎉'},
		{date: '2021', desc: 'Present: Finishing this page..😅'}
	];
</script>

<div
	class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
	style="backdrop-filter: blur(20px);"
>
	<div class="max-w-md mx-auto">
		<div class="text-center flex flex-row ...">
			<div class="flex-inital text-5xl">👩🏽‍🚀</div>
			<h1 class="flex-auto text-5xl font-bold text-center">{para1Title}</h1>
			<div class="flex-inital text-5xl">👩🏽‍🚀</div>
		</div>
		<div class="divide-y divide-gray-200">
			<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
				<p>
					{para1.sent0}
					{para1.sent1}
					{para1.sent2}
					{para1.sent3}
				</p>
			</div>
			<div />
			<br>
		</div>
		<div class="text-center flex flex-row ...">
			<div class="flex-inital text-5xl">🏆</div>
			<h1 class="flex-auto text-5xl font-bold text-center">{para2Title}</h1>
			<div class="flex-inital text-5xl">🏆</div>
		</div>
		<br />
		<div class="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
			<ul>
				{#each dates as {date, desc}}
					<li>
						<div class="flex items-center space-x-2">
							<div class="flex-shrink-0">
								<svg
									class="h-5 w-5 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="flex-1">
								<h3 class="text-lg text-center leading-6 font-medium text-gray-900">
									{date}
								</h3>
								<p class="mt-1 text-center text-base leading-6 text-gray-500">{desc}</p>
							</div>
							<div class="flex-shrink-0">
								<svg
									class="h-5 w-5 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
