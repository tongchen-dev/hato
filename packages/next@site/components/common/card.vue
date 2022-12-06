<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.card {
	border-radius: $rounded-xs;
	padding: $padding-lg;
	background: $bg-1;
}
</style>