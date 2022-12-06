<template>
	<div class="nav">
		<nuxt-layout>
			<div class="nav__container">
				<div class="nav__container__logo">
					<img src="~/assets/img/bird.png" alt="">
				</div>
				<div class="nav__container__menu">
					<svg class="menu-change" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
						height="24" @click="showSmMenu">
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
					</svg>
					<ul :class="{
						'nav__container__menu-sm--show': smShowState
					}" @click="hiddenSmMenu">
						<nuxt-link v-for="link in links" :to="link.path">
							<li :class="{
								'active': currentPath === link.path
							}">{{ link.name }}</li>
						</nuxt-link>
						<nuxt-link href="javascript:void(0)" @click="changeTheme">
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
									viewBox="0 0 24 24" width="24px" fill="#000000" :class="{
										'mode-change': true,
										'mode-light': theme === 'light',
										'mode-dark': theme === 'dark',
									}">
									<rect fill="none" height="24" width="24" />
									<transition-group name="fade">
										<path id="moon" v-if="theme === 'light'"
											d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
										<path id="sun" v-if="theme === 'dark'"
											d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
									</transition-group>
								</svg>
							</li>
						</nuxt-link>
					</ul>
				</div>
			</div>
		</nuxt-layout>
	</div>
</template>

<script lang="ts" setup>
import { createDiscreteApi } from 'naive-ui';
import { ref, Ref } from 'vue';
const smShowState: Ref<boolean> = ref(false);
const showSmMenu = () => {
	smShowState.value = !smShowState.value;
}
const hiddenSmMenu = (e: MouseEvent) => {
	const { target } = e;
	let el: HTMLElement = target as HTMLElement;
	while (el.tagName !== 'LI') {
		if (el.parentElement) {
			el = el.parentElement;
		} else {
			break;
		}
	}
	smShowState.value = false;
}
const links = [{
	name: '首页',
	path: '/'
}, {
	name: '关于鸽子',
	path: '/#about-hato'
}, {
	name: '大事年表',
	path: '/#timeline'
}, {
	name: '问题反馈',
	path: 'mailto: gaonenggg@outlook.com'
}]
const currentPath = ref('/');
const router = useRouter();
const theme: Ref<'light' | 'dark'> = ref('light');
router.beforeEach((to) => {
	currentPath.value = to.fullPath ?? '';
})
onMounted(() => {
	const api = createDiscreteApi(['message'], { messageProviderProps: { placement: 'top' } });
	Reflect.set(window, '$api', api);
	const h1Collcetion = document.querySelectorAll('h1');
	const ob = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const { target } = entry;
				if (target.id) {
					currentPath.value = `/#${target.id}`;
				} else {
					currentPath.value = '/'
				}
				window.history.pushState('', '', currentPath.value);
			}
		})
	}, {
		threshold: 1
	})
	h1Collcetion.forEach((el) => ob.observe(el));
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		console.log('is dark')
		theme.value = 'dark';
	}
	document.body.setAttribute('theme', theme.value);
})
const changeTheme = () => {
	if (theme.value === 'light') {
		theme.value = 'dark';
		(window as any).$api.message.info('现在所处于黑暗模式，可能存在部分色彩与无障碍缺陷.');
		// window.$api!.message.info('黑暗模式下并未完全兼容，如发现问题请联系站长~');
	} else {
		theme.value = 'light';
	}
	document.body.setAttribute('theme', theme.value);
}

</script>

<style lang="scss">
#sun {
	fill: $yellow-300;
}

#moon {
	fill: $text-800;
}

.mode-change {
	display: block;

	path {
		transition: all 300ms;
	}
}

.active::after {
	width: 100%;
	height: 3px;
	position: absolute;
	background: var(--blue-500);
	content: "";
	bottom: -3px;
	left: 0;
}

.menu-change {
	display: none;
}

.nav {
	position: sticky;
	top: 0;
	width: 100%;
	height: 72px;
	background: $bg-1;
	z-index: 99;

	&__container {
		height: 72px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__logo {
			width: 40px;
			height: 40px;

			img {
				width: 40px;
				height: 40px;
			}
		}

		&__menu {
			height: 100%;

			ul {
				li {
					cursor: pointer;
					position: relative;
					font-size: 18px;
				}

				gap: $space-100;
				height: 100%;
				align-items: center;
				display: flex;
				margin: 0;
				list-style: none;
			}
		}
	}
}

@media screen and (max-width: 320px) {
	.menu-change {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 24px;
		margin: auto;
	}

	.nav {
		&__container {
			&__menu {
				ul {
					display: none;

					&.nav__container__menu-sm--show {
						display: block;
						position: absolute;
						left: 0;
						top: 100%;
						padding: 0;
						right: 0;
						width: 100%;
						height: max-content;
						background: $bg-1;
						padding: 0 $padding-md;
						box-sizing: border-box;
						border-radius: $rounded-xs;
					}
				}


			}
		}
	}
}
</style>