// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://niaggar.github.io/',
	base: '/qiskit-fall-fest-25-univalle',
	integrations: [mdx(), sitemap()],
});
