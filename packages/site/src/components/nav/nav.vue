<template>
    <div class="nav" ref="nav">
        <layout class="nav-layout">
            <div class="logo">
                <img src="/images/hato.png">
            </div>
            <div class="menu">
                <svg 
                    @click="showMenu"
                    class="hidden-menu"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                </svg>
                <ul ref=parent v-if="!isVisible">
                    <li
                        v-for="pathItem in pathList"
                        :key="(pathItem?.meta?.title as string)"
                        :class="{'menu-item-active': active === pathItem?.meta?.active}"
                        @click="()=>clickHandle(pathItem?.meta?.active as number)"
                    >
                        <router-link 
                            aria-expanded="false"
                            :to="pathItem?.path"
                            :aria-controls="pathItem?.meta?.title"
                        >
                            {{pathItem?.meta?.title}}
                        </router-link>
                    </li>
                    <li @click="accessibility">
                        &#128151;对比度增强
                    </li>
                </ul>
            </div>
            <div class="menu-slideDown" v-if="isVisible">
                <ul ref=parent>
                    <li
                        v-for="pathItem in pathList"
                        :key="(pathItem?.meta?.title as string)"
                        :class="{'menu-item-active': active === pathItem?.meta?.active}"
                        @click="()=>clickHandle(pathItem?.meta?.active as number)"
                    >
                        <router-link :to="pathItem?.path">
                            {{pathItem?.meta?.title}}
                        </router-link>
                    </li>
                    <li @click="accessibility">
                        &#128151;对比度增强
                    </li>
                </ul>
            </div>
        </layout>
    </div>
</template>

<script lang="ts" setup>
import layout from '@/components/common/layout/layout.vue';
import { onMounted, ref} from 'vue';
import {useEventHub} from '@/hooks/useEventHub';
import {useDestoryMask, useMask} from '@/hooks/useMask';
import '@arco-design/web-vue/es/message/style/css.js';
import routes from '@/router/routes';
import { cancelAccessibility, useAccessibility } from './hook/useAccessibility';
let parent =  ref(null);
const active = ref();
const hub = useEventHub();
const maxId = 3;
const pathList = routes.filter(route => route?.meta?.inNav);
const isVisible = ref(false);
const nav = ref(null);
const isAccessibility=ref(false);
hub.on('update::menu::activeId', (activeId: number)=>{
	active.value = activeId > maxId ? maxId : activeId;
});
onMounted(()=>{
	if (history.state.current === '/'){
		active.value = 0;
	}
});
const clickHandle = (activeId: number) => {
	active.value = activeId;
	if (isVisible.value){
		isVisible.value = false;
		useDestoryMask();
	}
};
const showMenu = ()=> {
	isVisible.value = !isVisible.value;
	if (isVisible.value){
		useMask((nav.value as unknown as HTMLElement).parentElement, {
			click: (e)=>{
				const that = e.target as HTMLElement;
				that.remove();
				isVisible.value = false;
			}
		});
	} else {
		useDestoryMask();
	}
};
const accessibility = () =>{
	// 
	if (isAccessibility.value){
		isAccessibility.value = cancelAccessibility();
	} else {
		isAccessibility.value = useAccessibility();
	}
	isVisible.value = false;
	useDestoryMask();
};
window.onresize = () => {
	if (document.body.offsetWidth > 585){
		isVisible.value = false;
		useDestoryMask();
	}
};
</script>

<style lang="scss">
.nav{
    position: fixed;
    top: 0;
    width: 100%;
    height: 72px;
    background: $white-100;
    border-bottom: 1px solid $white-300;
    z-index: 3;
    .nav-layout{
        justify-content: space-between;
        padding: 0 10px;
    }
    .logo{
        display: flex;
        height: 72px;
        img {
            width: 79px;
            height: 52px;
            margin: auto;
        }
    }
    .hidden-menu{
        display: none;
        width: 24px;
        height: 100%;
        margin: auto;
    }
    .menu {
        margin-right: 16px;
        ul {
            display: flex;
            align-items: center;
            height: 72px;
            li {
                cursor: pointer;
                position: relative;
                float: left;
                &:not(:first-child){
                    margin-left: $space-1;
                }
                color: $text;
                font-size: 20px;
                &::after{
                    transition: transform 800ms ease;
                    position: absolute;
                    width: 100%;
                    height: 3px;
                    bottom: -3px;
                    left: 0;
                    transform: scaleY(0);
                    background: $primary;
                    content: "";
                }
                &:hover::after{
                    transform: scaleY(1);
                    background: $primary;
                }
            }
            .menu-item-active::after{
                transform: scaleY(1);
                background: $primary;
            }
        }
    }
    .menu-slideDown {
        width: 100%;
        min-height: 72px;
        // background: red;
        border-top: 1pt solid $white-300;
        background: $white-200;
        position: absolute;
        top: 100%;
        left: 0;
        ul{
            li {
                padding: 1em;
            }
            .menu-item-active{
                a{
                    color: $text-2;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>