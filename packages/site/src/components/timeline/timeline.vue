<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
	<Timeline>
		<transition-group name="list">
			<TimelineItem v-for="data in dataset" v-if="props.isShow" :key="data[0]" :label="data[0]" v-animate="
				'animate__animated animate__fadeInUp'
			" style="margin-bottom: 8px;">
				{{ data[1] }}
			</TimelineItem>
		</transition-group>
	</Timeline>
</template>

<script lang="ts" setup>
import { Timeline, TimelineItem } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/timeline/style/css.js';
import { Ref, ref } from 'vue';
const props = defineProps<{
	dataset: string[][],
	isShow: boolean
}>();
const dataset: Ref<string[][]> = ref([]);
dataset.value = [
	['2021-12-04', '人类首次捕获白夜小鸠初机号'],
	['2021-12-15', '人类首次捕获白夜小鸠人类化'],
	['2021-01-30', '除夕回直播'],
	['2021-01-31', '跨年回直播'],
	['2022-01-19', '首次被DD们骗上舰'],
	['2022-01-23', '第二次被DD们骗上舰'],
	['2022-02-03', '第三次被DD们骗上舰'],
	['2022-03-27', '百舰纪念生日回']
];
</script>