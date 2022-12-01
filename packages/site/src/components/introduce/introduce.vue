<template>
	<h2 id="about-hato" v-animate="
		'animate__animated animate__fadeInUp'
	">关于小鸠</h2>
	<blockquote v-animate="
		'animate__animated animate__fadeInUp'
	">愿日子干净，所遇皆是你们。</blockquote>
	<div class="introduce-wrapper">
		<div class="introduce">
			<h3 style="margin-bottom: 0.5rem" v-animate="
				'animate__animated animate__fadeInUp animate__fast'
			">白夜小鸠Hato</h3>
			<blockquote v-animate="
				'animate__animated animate__fadeInUp'
			">是一只给人们带来福音的小鸽子啦</blockquote>
			<span class="introduce-content" v-animate="
				'animate__animated animate__fadeInUp'
			">
				一只能做饭, 能打游戏的<del>胖</del>鸽子, 自称是一个有人鱼线和马甲线的仙女<del class="hidden"
					title="嘘...你知道的太多了">其实就是一个debu鸽子化为人形了而已</del>
				请不要让鸠鸠做任何脑力相关劳动, 尤其是处理逻辑问题，这会让鸠鸠.exe停止响应<span class="hidden">冷知识, 白夜小鸠曾被连续诈骗两次, 甚至差点破产</span>
			</span>
			<br />
			<div class="info">
				<div class="div1" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>发色: </strong><span>白色</span>
				</div>
				<div class="div2" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>生日: </strong><span>03/27</span>
				</div>
				<div class="div3" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>特点: </strong><span><del class="hidden" title="嘘...你知道的太多了">憨</del></span>
				</div>
				<div class="div4" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>声线: </strong><span>邻家少女/大姐姐<span class="hidden" title="嘘...你知道的太多了">坏女人</span></span>
				</div>
				<div class="div5" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>智商: </strong><span>小学五年级</span>
				</div>
				<div class="div6" v-animate="
	'animate__animated animate__fadeInUp'
				">
					<strong>胸围: </strong><span>未知</span><span class="hidden">都贴俩创可贴了，害胸围呢</span>
				</div>
			</div>
		</div>
		<div class="banner">
			<carousel />
		</div>
	</div>
</template>

<script lang="ts" setup>
import carousel from '@/components/Carousel/carousel.vue';
</script>

<style lang="scss" scoped>
.hidden {
	background: black;
	color: black;
	transition: all .5s ease;
}

.hidden:hover {
	color: white;
}

#about-hato {
	text-align: center;
	color: $text-500;
	margin-top: 0;
	padding-top: 1em;
	margin-bottom: .5rem;
}

#about-hato+blockquote {
	color: $text-300;
	text-align: center;
	margin-bottom: 32px;
}

.introduce-wrapper {
	display: flex;
	flex-wrap: wrap;
	flex-shrink: 0;
	width: 100%;
	gap: 16px;

	.introduce {
		.info {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 16px;
			grid-row-gap: 16px;
			margin-top: 16px;
			font-size: 16px;

			.div1 {
				grid-area: 1 / 1 / 2 / 2;
			}

			.div2 {
				grid-area: 1 / 2 / 2 / 3;
			}

			.div3 {
				grid-area: 2 / 2 / 3 / 3;
			}

			.div4 {
				grid-area: 2 / 1 / 3 / 2;
			}
		}

		blockquote {
			margin: 0;
			text-align: left;
			color: $text-200;
			margin-bottom: 8px;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}

		h1+blockquote {
			margin-top: 8px;
		}

		h3+span {
			display: inline-block;
			width: 80%;
			margin: auto;
		}

		.introduce-content {
			line-height: 1.7;
			font-size: 16px;
		}

		ul {
			li {
				margin: 16px 0;
			}
		}

		box-sizing: border-box;
		flex: 1 0 50%;
		height: auto;
		border-radius: $rounded-md;
		padding: 16px;
		color: $text-500;
		background: $white-100;
	}

	.banner {
		flex: 1 0 300px;
		background: $white-100;
	}
}
</style>