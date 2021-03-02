<template>
	<view class="header-bar position-fixed bg-color w-100 top-0 left-0 d-flex j-sa a-center z-index-6">
		<view class="backOff" @tap="$emit('backOff')">
			<i class="iconfont iconicon-copy f-size-20 font-w font-666"></i>
		</view>
		<view class="searchInput p-l-9 position-rel d-flex a-center">
			<i class="iconfont iconsw_sousuo position-abs font-999"></i>
			<input type="text" placeholder="请输入搜索内容"
				@tap="$emit('searchTap')"
				focus
				class="f-size-12"/>
		</view>
		<view class="loginBtn px-1 py bg-f00 font-color-fff bd-r-1" v-if="!isShowSearch">
			搜索
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		computed: {
			isShowSearch(){
				return this.$slots.default
			}
		}
	}
</script>

<style scoped lang="scss">
.header-bar{
	height: 90upx;
	border-bottom: 1px solid #dedede;
	.searchInput{
		width: 500upx;
		height: 50upx;
		background-color: rgba(0,0,0,.05);
		border-radius: 30upx;
		.iconsw_sousuo{
			top: 50%;
			left: 30upx;
			transform: translateY(-50%);
		}
	}
	.loginBtn{
	}
}
</style>
