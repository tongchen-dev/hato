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
import { useApi } from '@/api';
import { EventLine } from '@/api/lib/evet-line';
import { Timeline, TimelineItem } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/timeline/style/css.js';
import { Ref, ref } from 'vue';
const props = defineProps<{
	dataset: string[][],
	isShow: boolean
}>();
const dataset: Ref<string[][]> = ref([]);
const api = await useApi<EventLine>('EventLine').then((res) => res);
api.getAll()
	.then((response) => {
		dataset.value = response.data.map((value) => [value.datetime, value.content]);
		dataset.value = dataset.value.sort((a, b) => {
			return new Date(a[0]).getTime() - new Date(b[0]).getTime();
		});
	})
	.catch((reason) => {
		console.log(reason);
	});
</script>