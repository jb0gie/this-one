<script>
	let randmQuote;
	let randmAuthor;
	fetch('https://api.quotable.io/random')
		.then((resp) => resp.json())
		.then((data) => {
			randmQuote = data.content;
			randmAuthor = data.author;
			console.log(randmQuote);
			console.log(randmAuthor);
		});
</script>

<div
	class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
	style="backdrop-filter: blur(20px);"
>
	<div class="max-w-md mx-auto">
		<blockquote class="justify-center font-bold">
			<p>{randmQuote}<br />{randmAuthor}</p>
		</blockquote>
	</div>
</div>
