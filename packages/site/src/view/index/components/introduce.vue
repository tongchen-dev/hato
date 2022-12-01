<template>
	<h2 id="about-hato" v-animate="
		'animate__animated animate__fadeInUp'
	">关于小鸠</h2>
	<blockquote v-animate="
		'animate__animated animate__fadeInUp'
	">愿日子干净，所遇皆是你们。</blockquote>
	<div class="introduce-wrapper">
		<div class="introduce">
			<aboutHato />
			<div class="info">
				<div class="div1" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>发色: </strong><span>白色</span>
				</div>
				<div class="div2" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>生日: </strong><span>12-25</span>
				</div>
				<div class="div3" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>特点: </strong><span><del class="hidden" title="嘘...你知道的太多了">憨</del></span>
				</div>
				<div class="div5" v-animate="
					'animate__animated animate__fadeInUp'
				">
					<strong>智商: </strong><span>小学五年级</span>
				</div>
				<div class="div6" v-animate="
	'animate__animated animate__fadeInUp'
				">
					<strong>胸围: </strong><span>未知</span><span class="hidden">充其量是个A</span>
				</div>
			</div>
		</div>
		<div class="banner">
			<carousel />
		</div>
	</div>
</template>

<script lang="ts" setup>
import carousel from '@/view/index/components/carousel.vue';
import aboutHato from '@/docs/introduce.md';
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