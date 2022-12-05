<template>
	<nuxt-layout name="base">
		<nuxt-layout>
			<index-banner />
			<lazy-index-introduce />
			<lazy-index-timeline />
		</nuxt-layout>
	</nuxt-layout>
</template>

<script lang="ts" setup>
const route = useRoute();
function navigate() {
	return navigateTo({
		path: `/${route.fullPath}`
	});
}
</script>