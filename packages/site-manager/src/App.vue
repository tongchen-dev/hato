<template>
  <RouterView></RouterView>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
onMounted(() => {
	document.body.setAttribute('arco-theme', 'dark');
});
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
