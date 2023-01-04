import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adaptor-vercel';
import { auto } from '@popperjs/core';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: auto()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
