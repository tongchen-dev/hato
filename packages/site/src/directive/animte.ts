import { DirectiveBinding } from 'vue';

export default {
	mounted: function (el: HTMLElement, binding: DirectiveBinding<string>){
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