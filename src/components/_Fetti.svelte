<script>
	import confetti from 'canvas-confetti';
	let clicked = 0;
	let fettiBtn;
	function clickFetti() {
		console.log('you did it!!!!!');
		console.log({ clicked });
		clicked++;
		var count = 200;
		var defaults = {
			origin: { y: 0.3 }
		};
		function fire(particleRatio, opts) {
			confetti(
				Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio)
				})
			);
		}
		fire(0.25, {
			spread: 26,
			startVelocity: 55
		});
		fire(0.2, {
			spread: 60
		});
		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 45
		});
	}
</script>

<div class="absolute z-50 left-10 top-20">
	<button
		on:click={() => clickFetti()}
		class="fixed p-0 w-16 h-16 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
		style="backdrop-filter: blur(20px);"
	>
		<h1 class="text-4xl">🎊</h1>
	</button>
</div>
