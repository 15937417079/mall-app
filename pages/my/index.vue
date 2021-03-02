<template>
	<view>
		<!--  未登录 S -->
		<not-login v-if="!$store.state.loginStatus" />
		<!--  未登录 E -->
		
		<!-- 已登录 S -->
		<already-login v-if=" $store.state.loginStatus" />
		<!-- 已登录 E -->

	</view>
</template>

<script>
	import notLogin from './notLogin'
	import alreadyLogin from './alreadyLogin'
	export default {
		data() {
			return {
			}
		},
		onShow() {
			console.log('my on show')
			if (!this.$store.state.loginStatus){
				uni.hideTabBar()
			}
		},
		onHide() {
			if (!this.$store.state.loginStatus) {
				uni.showTabBar()
			}
		},
		components:{
			notLogin,
			alreadyLogin
		},
	}
</script>

<style scoped>

</style>