import {createRouter, createWebHistory, RouteLocationNormalized} from 'vue-router';
import routes from './routes';
import { useEventHub } from '@/hooks/useEventHub';

const hub = useEventHub();

const router = createRouter({
	history: createWebHistory(''),
	routes,
	scrollBehavior:(to)=>{
		if (to.hash){
			return {
				el: to.hash,
				behavior: 'smooth',
				top: 100
			};
		} else {
			return {
				behavior: 'smooth',
				top: 0
			};
		}
	},
});

router.beforeEach((to: RouteLocationNormalized)=>{
	hub.emit('update::menu::activeId', to.meta.active);
});

export default router;