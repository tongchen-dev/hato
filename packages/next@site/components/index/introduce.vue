<template>
	<div class="introduce">
		<div class="introduce__title">
			<h1 v-animate="'animate__animated animate__fadeInUp animate__fast'" id="about-hato">关于鸽子</h1>
			<blockquote v-animate="'animate__animated animate__fadeInUp animate__fast'">想活的像小太阳！</blockquote>
		</div>
		<div class="introduce__wrapper">
			<div class="introduce__wrapper__card-group">
				<common-card class="introduce__wrapper__card-group__introduce-card">
					<!-- <content-doc path="~/content/introduce.md"></content-doc> -->
					<content-renderer :value="(data as Record<string, any> | undefined)"
						v-animate="'animate__animated animate__fadeInUp animate__fast'">
						<template #empty>
							<span>Loading</span>
						</template>
					</content-renderer>
					<div class="info">
						<div class="div1" v-animate="'animate__animated animate__fadeInUp animate__slow'">
							<strong>发色: </strong><span>白色</span>
						</div>
						<div class="div2" v-animate="'animate__animated animate__fadeInUp animate__slow'">
							<strong>生日: </strong><span>12-25</span>
						</div>
						<div class="div3" v-animate="'animate__animated animate__fadeInUp animate__slow'">
							<strong>特点: </strong><span><del class="hidden" title="嘘...你知道的太多了">憨</del></span>
						</div>
						<div class="div5" v-animate="'animate__animated animate__fadeInUp animate__slow'">
							<strong>智商: </strong><span>小学五年级</span>
						</div>
						<div class="div6" v-animate="'animate__animated animate__fadeInUp animate__slow'">
							<strong>胸围: </strong><span>未知</span><del class="hidden">充其量是个A</del>
						</div>
					</div>
				</common-card>
				<common-card class="introduce__wrapper__card-group__image-card">
					<img src="~/assets/img/hato-egg.png">
				</common-card>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('introduce-data', () => queryContent('introduce').findOne());
</script>

<style lang="scss">
@import '~/assets/styles/doc.scss';
</style>

<style lang="scss" scoped>
.introduce {
	margin-bottom: 64px;

	&__title {
		width: fit-content;
		margin: auto;

		h1,
		blockquote {
			text-align: center;
		}

	}

	&__wrapper {

		&__card-group {
			display: flex;
			justify-content: space-between;
			gap: 16px;
			flex-wrap: wrap;

			&__introduce-card {
				.info {
					display: grid;
					margin-top: 8px;

					.div1 {
						grid-area: 1 / 1 / 2 / 2;
					}

					.div2 {
						grid-area: 1 / 2 / 2 / 3;
					}

					.div3 {
						grid-area: 2 / 2 / 3 / 3;
					}
				}

				color: $text-500;
				flex: 1 0 50%;
				height: auto;
			}

			&__image-card {
				display: flex;
				box-sizing: border-box;
				flex: 1 1 300px;

				img {
					max-width: 320px;
					width: 100%;
					margin: auto;
				}
			}
		}
	}
}
</style>