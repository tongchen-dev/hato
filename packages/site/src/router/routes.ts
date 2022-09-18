import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		name: 'index',
		path: '/',
		component: ()=>import('@/view/index.vue'),
		meta:{
			inNav: true,
			active: 0,
			title: '首页 '
		}
	},
	{
		name: 'about-hato',
		path: '/#about-hato',
		component: ()=>import('@/view/index.vue'),
		meta: {
			inNav: true,
			active: 1,
			title: '关于鸽子'
		}
	},
	{
		name: 'about',
		path: '/about',
		component: ()=>import('@/view/about.vue'),
		meta:{
			inNav: false,
			active: -1
		}
	}
];

export default routes;