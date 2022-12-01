<template>
    <Carousel 
        style="width: 100%;height: 400px;margin: auto;"
        indicator-type="slider"
        show-arrow="hover"
    >
        <CarouselItem>
            <img src="/src/assets/img/hato-egg.png" alt="">
        </CarouselItem>
    </Carousel>
</template>

<script lang="ts" setup>
import {CarouselItem} from '@arco-design/web-vue/es/carousel';
import Carousel from '@arco-design/web-vue/es/carousel';
import '@arco-design/web-vue/es/carousel/style/css.js';
</script>

<style lang="scss" scoped>
img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

</style>