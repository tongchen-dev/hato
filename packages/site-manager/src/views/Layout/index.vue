<template>
    <a-layout class="app-wrapper">
		<a-layout-header class="app-wrapper__header">
			<Header></Header>
		</a-layout-header>
		<a-layout>
			<a-layout-sider :width="256" class="app-wrapper__slider">
				<Sidebar></Sidebar>
			</a-layout-sider>
			<a-layout style="padding: 0 24px;" class="app-wrapper__content-wrapper">
				<a-layout-content class="app-wrapper__content">
					<div class="app-wrapper__content__wrapper">
						<RouterView></RouterView>
					</div>
				</a-layout-content>
			</a-layout>
		</a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar.vue';
import Header from './components/header.vue';
</script>

<style>
.app-wrapper{
	width: 100%;
	height: 100%;
}

.app-wrapper__header{
	padding: 0 16px;
	height: 64px;
	background: var(--color-bg-2);
}
.app-wrapper__content-wrapper{
	padding: 0 20px;
	background:var(--color-bg-1);
}
.app-wrapper__content{
    width: 100%;
    height: 100%;
    margin: 1em 0;
    padding: 0;
}
.app-wrapper__content__wrapper{
	display: flex;
	border-radius: 10px;
    flex-direction: column;
	padding: 0 1em;
	background: var(--color-bg-3);
}
</style>
