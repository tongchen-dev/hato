// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	plugins: ['~/plugins/v-anime-directive.ts', `~/plugins/naive.ts`],
	modules: ['@nuxt/content'],
	css: ['~/assets/styles/theme.css','~/assets/styles/animate.min.css'],
	content:{
		markdown: {
			anchorLinks: false,
		}
	},
	ssr: true,
	router:{
		options:{
			strict: true,
		}
	},
	vite:{
		css:{
			preprocessorOptions:{
				scss: {
					additionalData:'@import "~/assets/styles/common.scss";'
				}
			}
		},
		optimizeDeps: {
			include:
			  process.env.NODE_ENV === 'development'
				? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
				: []
		}
	},
	build: {
		transpile:
		  process.env.NODE_ENV === 'production'
			? [
				'naive-ui',
				'vueuc',
				'@css-render/vue3-ssr',
				'@juggle/resize-observer'
			  ]
			: ['@juggle/resize-observer']
	},
})
