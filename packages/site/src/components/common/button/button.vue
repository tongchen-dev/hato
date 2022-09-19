<template>
    <button :class="[
        'hato-button',
        `${props.onlyBorder && 'hato-button-only-border'}`
    ]" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

type buttonSize = 'xs' | 'md' | 'lg' | 'xl' | 'xxl';

const emit = defineEmits(['click']);
const props = defineProps({
	size: {
		type: String as ()=>buttonSize,
		default: 'md'
	},
	onlyBorder: Boolean
});
const handleClick = (e: MouseEvent) => {
	// 
	emit('click', e);
};
</script>

<style lang="scss">
.hato-button{
    padding: 9px 32px;
    background: $primary-500;
    text-align: center;
    border: none;
    border-radius: $rounded-md;
    color: $btn-color;
    cursor: pointer;
    box-shadow: 0 4px 0px $primary-600;
    transition: box-shadow all 200ms;
    min-width: 125px;
    height: 50px;
    font-size: 20px;
}
.hato-button:not(.hato-button-only-border):active{
    box-shadow: inset 0 3px 0px $primary-600, 0 0 0px $primary-600;
}
.hato-button-only-border{
    background: transparent;
    border: 4px solid $primary-500;
    transition: background 300ms ease;
}
.hato-button-only-border:hover{
    background: $primary-500;
}
</style>