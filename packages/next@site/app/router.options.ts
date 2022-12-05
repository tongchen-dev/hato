import type { RouterConfig } from '@nuxt/schema'
// Only process scroll behavior
export default <RouterConfig> {
    scrollBehavior(to, from, savePosition){
		if (to.hash){
			return {
				el: to.hash,
				top: 100,
				behavior: 'smooth',
			}
		}
		if (savePosition){
			return savePosition
		}
		return {
			top: 0,
			left: 0,
			behavior: 'smooth'
		}
    }
}