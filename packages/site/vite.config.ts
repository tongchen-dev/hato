import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import viteImagemin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
		}),
		compression({}),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		})
	],
	resolve:{
		alias:{
			'@/hooks': resolve(__dirname, 'src', 'utils', 'hooks'),
			'@': resolve(__dirname,'src'),
			'@/assets': resolve(__dirname, 'assets'),
			'/images': 'src/assets/img/'
		}
	},
	css:{
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/assets/styles/common.scss";'
			}
		}
	}
});
