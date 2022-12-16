<template>
	<div class="timeline">
		<div class="timeline__title">
			<h1 v-animate="
			'animate__animated animate__fadeInUp animate__fast'" id="timeline">时间线</h1>
		</div>
		<div class="timeline__wrapper">
			<n-timeline>
				<n-timeline-item v-for="item in dataset" type="info" :title="item[1]" :time="item[0]" line-type="dashed"
					v-animate="'animate__animated animate__fadeInUp'" />
			</n-timeline>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.timeline {
	width: 100%;
	margin: 12.5rem 0 2rem 0;

	&__title {
		width: fit-content;
		margin: auto;
	}

	&__wrapper {
		width: 90%;
		margin: auto;

		:deep(.n-timeline-item-content) {
			padding: $padding-md;
			margin-bottom: .5em;
			padding: 1em 1.5em;
			background: $bg-1;
		}

		:deep(.n-timeline-item-content__title) {
			color: $text-500 !important;
		}

		:deep(.n-timeline-item-content__meta) {
			margin-bottom: 0 !important;
		}
	}
}
</style>

<script lang="ts" setup>
import { NTimeline, NTimelineItem } from 'naive-ui';
import { Ref, ref } from 'vue';
const dataset: Ref<string[][]> = ref([
	['2021-12-04', '人类首次捕获白夜小鸠初机号'],
	['2021-12-15', '人类首次捕获白夜小鸠人类化'],
	['2021-01-30', '除夕回直播'],
	['2021-01-31', '跨年回直播'],
	['2022-01-19', '首次被DD们骗上舰'],
	['2022-01-23', '第二次被DD们骗上舰'],
	['2022-02-03', '第三次被DD们骗上舰'],
	['2022-03-27', '百舰纪念生日回'],
	['2022-12-16', '一周年纪念']
]);
</script>