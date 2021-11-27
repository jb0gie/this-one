<script>
	let titleSection = 'EXP.';
	let titleScholar = 'Scholar';
	let titleCook = 'Cook';
	let titleBarkeep = 'Barkeep';
	let titleWaiter = 'Waiter';
	let titleBogie = 'Techshaman';
	let gratitude = 'TYSM++';
	let trulyGrateful = 'for scrolling!';
	let cry4Halp = "check out ma socials, let's connect please...i'm lonely 😅";
	let scholar = [
		{ stat: 'Speed: ', desc: 'x3' },
		{ stat: 'Coordination: ', desc: 'x10' },
		{ stat: 'Power: ', desc: 'x8' },
		{ stat: 'IQ: ', desc: 'x7' },
		{ stat: 'Piety: ', desc: 'x7' },
		{ stat: 'Luck: ', desc: 'x13' },
		{ stat: 'Piety: ', desc: 'x2' },
		{ stat: 'Lore: ', desc: 'x19' }
	];
	let scholarDesc = {
		sent0: 'Domestication is the key to success in life. ',
		sent1: 'So I played along with the rules and made a few mistakes. ',
		sent2: "I'm not a perfectionist, but I'm a perfectionist. ",
		sent3:
			"So much so i've wanted this page to be a perfect it never saw the digital light of day. ",
		sent4: 'Maybe i had to live life first before i could write this, who knows. ',
		sent5: "But i'm proud of what i've done & where i've been. ",
		sent6: 'Learning is life, and learning is fun. '
	};
	let cookDesc = {
		sent0: 'I can cook, and I love it. ',
		sent1: "I love it so much that I'm always trying to learn new things. ",
		sent2:
			'Although my cook style is somewhat orthodox and not very creative, I feel my fundamentals are strong. ',
		sent3: 'Hehe I love cooking. '
	};
	let barkeepDesc = {
		sent0: 'I went to college with a barkeep background. ',
		sent1: "I was a barkeep for a few years, but I didn't really enjoy it. Partly... "
	};
	let waiterDesc = {
		sent0:
			'The 2 years I worked as a waiter at a local restaurant, I was able to learn a lot about the business.',
		sent1: 'I also learnt how to be a good person (and not a bad one). ',
		sent2: 'I picked up a lot of skills in the process. ',
		sent3: 'I made a lot of tips hehe.'
	};
	let bogieDesc = {
		sent0: 'Just before I encrouched onto lvl30, I became the Techshaman.',
		sent1: 'My mission is to halp. 🧞',
		sent2: 'ॐw̨e͍̠͎̼̞͞a̷̩͎̫͖̬͉r̗̙̻͘èo҉͎̰̻̞n͓͖̩ę. ò̘̪̤͔̪̲n̖̣̖̲e̺͡t͈̻̀ͅhr͖̬̥͡ę͇͉e̲̩͕̺th͉̙͍̞̩̬͘ŗ̠͉̭̱e̮̕e̦͈͓̲̗͡s͉ḙ̴̺͉v̠̳e̘͔̗̞̺͍ṋ̤̜͖. m̹͎͚͍̣̩o͍̰̱̖̩̘͞r̝͔̪̗͕e̴̞t̸̪̞h̹̞̹̟̞͎a҉̤̲̞̙n̤̥͜ǫ̙͉̲̘̻n̡͓͔͙͚͎e̙̹. e҉̜̠n͏̩̺͙͙̖̠̹t̴̯͙̣͓͚̘̫r̦y̖p͙o̹̤͖̱̱̪͖i̛̩̹̖̘̣͍̘n̩̞t̝̰̖̺͍̺̭.',
		lan0: 'Programming Philosophy',
		lan1: 'My mentor who goes by many names, coined the phrase: ',
		lanPhrase: "'breaking the internet' ",
		lan3: 'as a way to explain the process of changing drastically the way existing tools get used in order to gain new function.'
	};
	let cook = [
		{ stat: 'Speed: ', desc: 'x7' },
		{ stat: 'Coordination: ', desc: 'x13' },
		{ stat: 'Power: ', desc: 'x5' },
		{ stat: 'IQ: ', desc: 'x9' },
		{ stat: 'Piety: ', desc: 'x9' },
		{ stat: 'Luck: ', desc: 'x23' },
		{ stat: 'Piety: ', desc: 'x6' },
		{ stat: 'Lore: ', desc: 'x25' }
	];
	let barkeep = [
		{ stat: 'Speed: ', desc: 'x22' },
		{ stat: 'Coordination: ', desc: 'x30' },
		{ stat: 'Power: ', desc: 'x10' },
		{ stat: 'IQ: ', desc: 'x15' },
		{ stat: 'Piety: ', desc: 'x15' },
		{ stat: 'Luck: ', desc: 'x33' },
		{ stat: 'Piety: ', desc: 'x16' },
		{ stat: 'Lore: ', desc: 'x40' }
	];
	let waiter = [
		{ stat: 'Speed: ', desc: 'x13' },
		{ stat: 'Coordination: ', desc: 'x50' },
		{ stat: 'Power: ', desc: 'x7' },
		{ stat: 'IQ: ', desc: 'x10' },
		{ stat: 'Piety: ', desc: 'x9' },
		{ stat: 'Luck: ', desc: 'x23' },
		{ stat: 'Piety: ', desc: 'x6' },
		{ stat: 'Lore: ', desc: 'x25' }
	];
	let bogie = [
		{ stat: 'Speed: ', desc: 'x9ͫ̾9̷ͤ' },
		{ stat: 'Coordination: ', desc: 'x9ͫ̾9̷ͤ' },
		{ stat: 'Power:', desc: 'x9ͫ̾9̷ͤ' },
		{ stat: 'IQ: ', desc: 'x9ͫ̾9̷ͤ' },
		{ stat: 'Piety: ', desc: 'x9ͫ̾9̷ͤ' },
		{ stat: 'Luck: ', desc: 'x9ͫ̾9̷ͤ9̷ͤ' },
		{ stat: 'Piety: ', desc: 'x9ͫ̾9̷ͤ' },
		{ stat: 'Lore: ', desc: '-1' }
	];
</script>

<div
	class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
	style="backdrop-filter: blur(20px);"
>
	<div class="max-w-md mx-auto">
		<div class="text-center flex flex-row ...">
			<div class="flex-inital text-5xl">🌮</div>
			<h1 class="flex-auto text-5xl font-bold text-center">{titleSection}</h1>
			<div class="flex-inital text-5xl">🌮</div>
			<br />
		</div>
		<div class="divide-y divide-gray-200">
			<div />
			<br />
			<div class="text-center">
				<br />
				<div class="justify-center flex flex-row">
					<div class="flex-inital text-3xl">👨‍🎓</div>
					<h4 class="flex-shrink text-3xl font-bold text-center">{titleScholar}</h4>
					<div class="flex-inital text-3xl">👨‍🎓</div>
				</div>
				<br />
				<ul>
					{#each scholar as { stat, desc }}
						<li>
							<div class="flex">
								<div class="flex-grow w-8 h-4">
									<p class="float-right text-center font-medium text-gray-900">{stat}</p>
								</div>
								<div class="flex-shrink w-24 h-16">
									<h3 class="text-2xl text-center text-gray-500">📚</h3>
								</div>
								<div class="flex-grow w-8 h-4">
									<p class="float-left  text-center text-lg leading-6 text-gray-500">{desc}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<p>{scholarDesc.sent0}{scholarDesc.sent1}</p>
						<p>{scholarDesc.sent2}{scholarDesc.sent3}</p>
						<p>{scholarDesc.sent4}{scholarDesc.sent5}{scholarDesc.sent6}</p>
					</div>
					<div />
				</div>
				<br />
				<div class="justify-center flex flex-row">
					<div class="flex-inital text-3xl">👨‍🍳</div>
					<h4 class="flex-shrink text-3xl font-bold text-center">{titleCook}</h4>
					<div class="flex-inital text-3xl">👨‍🍳</div>
				</div>
				<br />
				<ul>
					{#each cook as { stat, desc }}
						<li>
							<div class="flex">
								<div class="flex-grow w-8 ">
									<p class="float-right text-center font-medium text-gray-900">
										{stat}
									</p>
								</div>
								<div class="flex-shrink w-24 ">
									<h3 class="text-2xl text-center text-gray-500">🍳</h3>
								</div>
								<div class="flex-grow w-8 ">
									<p class="float-left text-center text-lg leading-6 text-gray-500">{desc}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<p>{cookDesc.sent0}{cookDesc.sent1}</p>
						<p>{cookDesc.sent2}{cookDesc.sent3}</p>
					</div>
					<div />
				</div>
				<br />
				<div class="justify-center flex flex-row">
					<div class="flex-inital text-3xl">🤵</div>
					<h4 class="flex-shrink text-3xl font-bold text-center">{titleBarkeep}</h4>
					<div class="flex-inital text-3xl">🤵</div>
				</div>
				<br />
				<ul>
					{#each barkeep as { stat, desc }}
						<li>
							<div class="flex">
								<div class="flex-grow w-8">
									<p class="float-right text-center font-medium text-gray-900">{stat}</p>
								</div>
								<div class="flex-shrink w-24">
									<h3 class="text-2xl text-center text-gray-500">🍹</h3>
								</div>
								<div class="flex-grow w-8">
									<p class="float-left text-center text-lg leading-6 text-gray-500">{desc}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
				<br />
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<p>{barkeepDesc.sent0}{barkeepDesc.sent1}</p>
					</div>
					<div />
					<br />
				</div>

				<div class="justify-center flex flex-row">
					<div class="flex-inital text-3xl">💁</div>
					<h4 class="flex-shrink text-3xl font-bold text-center">{titleWaiter}</h4>
					<div class="flex-inital text-3xl">💁</div>
				</div>
				<br />
				<ul>
					{#each waiter as { stat, desc }}
						<li>
							<div class="flex">
								<div class="flex-grow w-8 ">
									<p class="float-right text-center font-medium text-gray-900">{stat}</p>
								</div>
								<div class="flex-shrink w-24 ">
									<h3 class="text-2xl text-center text-gray-500">🥗</h3>
								</div>
								<div class="flex-grow w-8 ">
									<p class="float-left text-center text-lg leading-6 text-gray-500">{desc}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
				<br />
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<p>{waiterDesc.sent0}</p>
						<p>{waiterDesc.sent1}{waiterDesc.sent2}{waiterDesc.sent3}</p>
					</div>
					<div />
					<br />
				</div>
				<div class="justify-center flex flex-row">
					<div class="flex-inital text-3xl">👹</div>
					<h4 class="flex-shrink text-3xl font-bold text-center">{titleBogie}</h4>
					<div class="flex-inital text-3xl">👹</div>
				</div>
				<br />
				<ul>
					{#each bogie as { stat, desc }}
						<li>
							<div class="flex">
								<div class="flex-grow w-8 ">
									<p class="float-right text-center font-medium text-gray-900">
										{stat}
									</p>
								</div>
								<div class="flex-shrink w-24 ">
									<h3 class="text-3xl text-center text-gray-500">📿</h3>
								</div>
								<div class="flex-grow w-8 ">
									<p class="float-left  text-center text-lg leading-6 text-gray-500">{desc}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
				<br />
				<div class="divide-y divide-gray-200">
					<div />
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<h3 class="text-2xl">{bogieDesc.lan0}</h3>
						<p>{bogieDesc.lan1}</p>
						<code class="text-2xl">{bogieDesc.lanPhrase}</code>
						<p>{bogieDesc.lan3}</p>
						<p>{bogieDesc.sent0}</p>
						<p>{bogieDesc.sent1}</p>
						<p>{bogieDesc.sent2}</p>
					</div>
					<div />
					<br />
				</div>
				<p>{gratitude}♥{trulyGrateful}</p>
				<p class="text-purple-400"><a href="https://linktr.ee/jb0gie">{cry4Halp}</a></p>
			</div>
		</div>
	</div>
</div>
