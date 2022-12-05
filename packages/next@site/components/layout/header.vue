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
						<!-- <nuxt-link to="#about-hato">
							<li>关于鸽子</li>
						</nuxt-link>
						<nuxt-link to="#timeline">
							<li>大事年表</li>
						</nuxt-link> -->
					</ul>
				</div>
			</div>
		</nuxt-layout>
	</div>
</template>

<script lang="ts" setup>
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
}]
const currentPath = ref('/');
const router = useRouter();
router.beforeEach((to) => {
	currentPath.value = to.fullPath ?? '';
})

onMounted(() => {
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
})

</script>

<style lang="scss">
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
	background: $white-100;
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
						bottom: -200%;
						padding: 0;
						right: 0;
						width: 100%;
						height: max-content;
						background: $white-100;
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