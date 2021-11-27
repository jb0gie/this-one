import { writable } from 'svelte/store';
export const quote = writable([]);
const fetchQuote = async () => {
	const url = 'https://api.quotable.io/random';
	const res = await fetch(url);
	const data = await res.json();
	if (res.ok) {
		// Update DOM elements
		quote.textContent = data.content;
		author.textContent = data.author;
	} else {
		quote.textContent = 'An error occured';
		author.textContent = 'An error occured';
		console.log(data);
	}
};
fetchQuote();
//yeee i didn't use dis 😅😅😅
