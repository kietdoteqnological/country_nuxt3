// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode'],
	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			'defineStore', // import { defineStore } from 'pinia'
			['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
		],
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	colorMode: {
		classSuffix: '',
	},
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
		configPath: 'tailwind.config.ts',
		exposeConfig: false,
		injectPosition: 0,
		viewer: true,
	},
	// ssr: false,
});
