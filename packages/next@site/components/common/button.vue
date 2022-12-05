<template>
	<button :class="{
		'hato__button': true,
		'hato__button--solid': !onlyBorder,
		'hato__button--only-border': onlyBorder
	}" @click="handleClick">
		<slot></slot>
	</button>
</template>

<style lang="scss">
.hato__button {
	padding: 8px 32px;
	background: $primary-500;
	text-align: center;
	border: none;
	border-radius: $rounded-md;
	color: $btn-color;
	cursor: pointer;
	box-shadow: 0 4px 0 $primary-600;
	transition: box-shadow all 200ms;
	height: 50px;
	font-size: 18px;
}

.hato__button:not(.hato__button--only-border):active {
	box-shadow: inset 0 3px 0px $primary-600, 0 0 0px $primary-600;
}

.hato__button--only-border {
	background: transparent;
	border: 4px solid $primary-500;
	transition: background 300ms ease;
}

.hato__button--only-border:hover {
	background: $primary-500;
}
</style>

<script lang="ts" setup>
import { toRefs } from 'vue';
const props = defineProps({
	onlyBorder: {
		type: Boolean,
		default: false,
	}
});
const emit = defineEmits(['click']);
const handleClick = (e: MouseEvent) => {
	emit('click', e);
}
const { onlyBorder } = toRefs(props);
</script>