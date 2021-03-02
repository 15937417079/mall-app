<template>
	<view>
		<!-- 未登录 状态 组件 S -->
		<not-login v-if="!$store.state.loginStatus"></not-login>
		<!-- 未登录 状态 组件 E -->
		
		<!-- 已登录  状态 组件 S -->
		<already-login v-if="$store.state.loginStatus"></already-login>
		<!-- 已登录  状态 组件 E -->
		 
	</view>
</template>

<script>
	import notLogin from './notLogin'
	import alreadyLogin from './alreadyLogin'
	export default {
		components:{ 
			notLogin,
			alreadyLogin
		}
	}
</script>

<style scoped>

</style>