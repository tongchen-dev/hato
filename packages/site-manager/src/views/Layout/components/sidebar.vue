<template>
    <a-menu>
        <template v-for="item in routes" :key="item.path">
			<router-link :to="item.path">
				<a-menu-item v-if="roleValidate((item.meta?.role as number) || 2) && !item.meta.isHidden">
					{{item.meta?.title}}
				</a-menu-item>
			</router-link>
        </template>
    </a-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 仅做测试，上线前应当更改为解析token中的role
const currentRole = ref(2);
const router = useRouter();
const routes = router.getRoutes();
console.log();
const roleValidate = (requiredRole:number) => currentRole.value >= requiredRole;
</script>
