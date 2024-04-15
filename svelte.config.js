import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            fallback: 'index.html'
        }),
        alias: {
            $components: './src/components',
            $layout: './src/layout',
            $stores: './src/stores'
        }
    },
    compilerOptions: {
        runes: true
    }
};

export default config;
