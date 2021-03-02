<template>
	<view class="row w-100 py-2" @tap="$emit('showPopUp')">
		<view class="l-title font-w col-2 text-center">
			{{ title }}
		</view>
		<view class="r-content col-10 position-rel">
			<slot></slot>
			<view v-if="option" 
			 class="iconfont iconsangedian position-abs top-0" style="right: 40upx;"/>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title: String,
			option: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped>

</style>
