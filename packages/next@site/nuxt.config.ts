import compression from 'vite-plugin-compression';
import imageMin from 'vite-plugin-imagemin';
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
		plugins: [compression(),imageMin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: true,
			  },
			  optipng: {
				optimizationLevel: 7
			  },
			  webp: {
				quality: 75,
			  },
			  mozjpeg: {
				quality: 8,
			  },
			  pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			  },
			  svgo: {
				plugins: [
				  {
					removeViewBox: true,
				  },
				  {
					removeEmptyAttrs: true,
				  },
				],
			  },
		})],
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
	app: {
		head: {
			title: '鸽子窝 - 小鸽子在这里等你很久啦~',
			meta: [{
				name:'keywords',
        		content: '白夜小鸠,vup,vtuber,虚拟主播,小鸠,白夜小鸡,白夜小鸠hato',
			},{
				name: 'description',
				content: '白夜小鸠的应援站~快进来做做吧~'
			}],
			htmlAttrs:{
				'lang': 'zh-cn',
			},
			script:[{
				defer: true,
				children: `var _hmt = _hmt || [];
				(function() {
				  var hm = document.createElement("script");
				  hm.src = "https://hm.baidu.com/hm.js?325e9af19ca83b420f56cac39982cf2e";
				  var s = document.getElementsByTagName("script")[0]; 
				  s.parentNode.insertBefore(hm, s);
				})();`
			}]
		}
	}
})
