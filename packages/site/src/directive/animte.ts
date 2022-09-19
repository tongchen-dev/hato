import { DirectiveBinding, VNode } from 'vue';

export default {
	mounted: function (el: any, binding: DirectiveBinding<any>, vnode: VNode<any, any, { [key: string]: any; }>, prevVNode: null){
		el.style.opacity='0';
		const ob = new IntersectionObserver((entries: IntersectionObserverEntry[])=>{
			const entrie = entries[0];
			if (entrie.isIntersecting){                
				const classList: string[] = (binding.value as string).split(' ');
				setTimeout(() => {
					el.classList.add(...classList);
				}, Math.random()**2*100);
			}
		});
		ob.observe(el);
	}
};