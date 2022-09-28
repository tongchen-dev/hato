import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [{
	name: 'index',
	path: '/',
	component: () => import('../views/Layout/index.vue'),
	meta: {
		isHidden: true,
	},
	children:[{
		name: 'Home',
		path: '',
		component: () => import('../views/home/index.vue'),
		meta:{
			title: '网站详情',
			role: 1,
		}
	}, {
		name: 'Staff',
		path: '/staff',
		component: () => import('../views/staff/index.vue'),
		meta: {
			title: '人员管理',
			role: 2,
		}
	}]
}];

const router = createRouter({
	routes,
	history: createWebHistory()
});

export default router;

