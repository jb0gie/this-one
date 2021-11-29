<script>
	let b0giePgData = {
		title: 'ｂ０ｇｉｅ',
		subTitle: '𝐭𝐞𝐜𝐡🧞𝐬𝐡𝐚𝐦𝐚𝐧 | 0️⃣8️⃣消費者 | 𝐧𝐢𝐜𝐞𝐬𝐭𝟎𝐧𝐍𝐞𝐭',
		noun: '𝐛𝟎𝐠𝐢𝐞 𝙣𝙤𝙪𝙣 /ˈbəʊ.ɡi/ ',
		desc: 'something that causes fear in many people, often without reason.'
	};
	let src = 'avi.png'; //chenge dis ser!!!
</script>

<div
	class="relative px-4 py-5 bg-white shadow-lg sm:rounded-2xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
	style="backdrop-filter: blur(20px);"
>
	<div class="max-w-md mx-auto">
		<img
			class="w-32 h-32 sm:w-48 sm:h-auto sm:rounded-full rounded-full mx-auto"
			{src}
			alt={b0giePgData.subTitle}
			width="384"
			height="512"
		/>
		<div class="pt-6 sm:p-8 sm:text-left space-y-4">
			<h1 class="text-center text-lg font-semibold">𝐢 𝐫⋰{b0giePgData.title}</h1>
			<h2>{b0giePgData.noun}<br /><code>{b0giePgData.desc}</code></h2>
			<div class="divide-y divide-gray-200">
				<div />
				<div class="py-4 text-base leading-6 space-y-4 text-gray-700">
					<h5 class="text-center">{b0giePgData.subTitle}</h5>
				</div>
			</div>
		</div>
	</div>
</div>
