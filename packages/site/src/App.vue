<template>
  <Nav style="flex: 0 0 auto" />
  <Layout style="width:100%;min-height: 100vh;flex-direction: column;flex: 1 0 auto;">
	<Suspense>
		<router-view />
	</Suspense>
  </Layout>
  <Footer style="flex: 0 0 auto"/>
</template>

<script lang="ts" setup>
import Nav from '@/components/nav/nav.vue';
import Layout from '@/components/common/layout/layout.vue';
import Footer from '@/components/footer/footer.vue';
import '@arco-design/web-vue/es/modal/style/css.js';
</script>

<style>
@import url("@/assets/styles/theme.css");
</style>

<style lang="scss">
html,body {
  width: 100%;
  margin: 0;
  padding: 0;
  background: $white-200;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  display: inline-block;
  .nav+.layout{
    margin-top: 72px;
  }
}
// ::-webkit-scrollbar {
//   width: 0;
// }
// ::-webkit-scrollbar-thumb {
//     background: #ccc; // 滑块颜色
//     border-radius: 5px; // 滑块圆角
// }
</style>