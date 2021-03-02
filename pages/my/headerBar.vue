<template>
	<view class="header-bar w-100 bg-fff d-flex a-center j-center position-rel">
		<i class="iconfont iconicon-copy f-size-20 font-w position-abs" @tap="returnHandle"></i>
		<text class="f-size-18 a-self-center text-center">京东登录注册</text>
	</view>
</template>

<script>
	export default {
		methods:{
			returnHandle(){
				uni.switchTab({
					url:'/pages/home/index'
				})
				uni.showTabBar()
			}
		}
	}
</script>

<style scoped lang="scss">
.header-bar{
	height: 90upx;
	.iconicon-copy{
		top: 50%;
		left: 50upx;
		transform: translateY(-50%);
	}
}
</style>
