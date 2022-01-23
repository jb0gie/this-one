import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify(),
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
