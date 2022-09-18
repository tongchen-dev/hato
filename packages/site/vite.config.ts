import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
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
				additionalData: '@import "./src/assets/styles/common.scss";'//引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
			}
		}
	}
});
