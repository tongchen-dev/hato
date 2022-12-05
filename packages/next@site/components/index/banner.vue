<template>
	<div class="banner">
		<div class="banner__wrapper">
			<div class="banner__wrapper__tool-tips">
				<h1 v-animate="'animate__animated animate__fadeInUp animate__fast'">鸽子窝</h1>
				<blockquote v-animate="'animate__animated animate__fadeInUp animate__fast'">是一只给人们带来福音的小鸽子啦</blockquote>
				<div class="banner__wrapper__tool-tips__button-group">
					<nuxt-link to="https://live.bilibili.com/7768761">
						<common-button v-animate="'animate__animated animate__fadeInUp'">去黑听</common-button>
					</nuxt-link>
					<nuxt-link to="https://space.bilibili.com/16217876">
						<common-button only-border
							v-animate="'animate__animated animate__fadeInUp'">成为鸠鸠人</common-button>
					</nuxt-link>
				</div>
			</div>
			<div class="banner__wrapper__logo" ref="logo" v-animate="'animate__animated animate__fadeIn'">
				<img src="~/assets/img/hato.png" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
blockquote {
	margin-top: 0;
}

.banner {

	width: 100%;
	height: calc(100vh - 72px);
	box-sizing: border-box;

	&__wrapper {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;

		&__tool-tips {
			min-width: 200px;
			box-sizing: border-box;

			&__button-group {
				display: flex;
				flex-wrap: wrap;
				gap: $space-100;

				a {
					flex: 1 0 auto;
				}
			}
		}

		&__logo {
			flex: 0 0 auto;

			img {
				display: inherit;
				width: 400px !important;
				margin: auto;
			}
		}
	}
}

h1 {
	font-size: 72px;
	color: $primary-500;
	margin-top: 0;
	text-shadow: 0 5px $primary-600;
}

@media (max-width: 768px) {
	.banner__wrapper {
		justify-content: flex-start;
	}

	.banner__wrapper__logo {
		display: none;
	}
}
</style>
