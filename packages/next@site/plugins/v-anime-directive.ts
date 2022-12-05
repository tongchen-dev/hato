import animate from '../directive/animte';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('animate', animate);
})