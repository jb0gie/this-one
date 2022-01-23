<script>
	let title = 'Epiclog';
	const para1 = {
		sent0: 'I’m a creative innovator based on ',
		sent1: '(earth)',
		sent2: 'conceptualising',
		sent3: '(delightful)',
		sent4: 'visual experiences for ',
		sent5: '(mobile / web)',
		sent6: 'that inturn empower & engage users.'
	};
	const para2 = {
		sent0:
			'Although like many, one weakness I acknowledge is not valuing myself highly and this is something I routinely work on improving. ',
		sent1: 'Regardless of weakness, some of my strengths include: ',
		sent2: 'Impeccable timing. ',
		sent3: "Now I don't mean I'm super punctual, nothing like that. "
	};
	const para3 = {
		sent0: 'I’m a creative innovator based on ',
		sent1: '(earth)',
		sent2: 'conceptualising',
		sent3: '(delightful)',
		sent4: 'visual experiences for ',
		sent5: '(mobile / web)',
		sent6: 'that inturn empower & engage users.'
	};
	const para4 = {
		sent0: "What I mean is no matter how much effort I put in, I'm always in place need to be. ",
		sent1: 'I express myself through movement and making others laugh. '
	};
</script>

<div
	class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
	style="backdrop-filter: blur(20px);"
>
	<div class="max-w-md mx-auto">
		<div class="text-center flex flex-row ...">
			<div class="flex-inital text-5xl">📜</div>
			<h1 class="flex-auto text-5xl font-bold text-center">{title}</h1>
			<div class="flex-inital text-5xl">📜</div>
		</div>
		<div class="divide-y divide-gray-200">
			<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
				<p>
					{para1.sent0}🌍<code>{para1.sent1}</code>,
					{para1.sent2} 🤩<code>{para1.sent3}</code>
					{para1.sent4}📱/💻<code>{para1.sent5}</code>
					{para1.sent6} 🎉
				</p>
			</div>
			<div class="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
				<p>{para2.sent0} 🦾</p>
				<br />
				<p>{para2.sent1}<code>{para2.sent2}</code> ⏳</p>
				<br />
				<p>{para2.sent3}😅</p>
				<br />
			</div>
			<div class="py-8 text-base leading-6 sm:text-lg sm:leading-7">
				<p>{para4.sent0} {para4.sent1}🕺🏾</p>
			</div>
		</div>
	</div>
</div>
