<template>
	<view class="my-not-login w-100 bg-fff position-abs">
		<!-- 顶部 -->
		<header-bar></header-bar>

		<!-- 登陆模块 S -->
		<login-module></login-module>
		<!-- 登陆模块 E -->

		<!-- 其他模块 S -->
		<other-module></other-module>
		<!-- 其他模块 E -->

	</view>
</template>

<script>
	import headerBar from '../headerBar.vue'
	import loginModule from './loginModule/index.vue'
	import otherModule from './otherModule/index.vue'
	export default {
		components: {
			headerBar,
			loginModule,
			otherModule
		},
	}
</script>

<style scoped lang="scss">
	.my-not-login {
		height: 100vh;
	}
</style>
