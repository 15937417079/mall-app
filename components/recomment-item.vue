<template>
	<view class=" recomment-item w-100">
		<view class="picImg w-100 p-b-100 position-rel" @tap="$emit('shopEntry')">
			<image class="w-h-100 position-abs" :src="recommentData.picUrl"></image>
		</view>
		<view class="v-two-hidden d-block w-100 p-l-1" style="line-height: 1.4;"  @tap="$emit('shopEntry')">
			<image v-if="recommentData.jdSup" class="desc_jd_logo d-block d-inline-block m-r-2" src="/static/images/recomment/jd-shop.png"
			 mode=""></image> {{recommentData.desc}}
		</view>
		<p class="d-flex w-100 j-sb a-center"> <text class="jd-font-red">￥{{recommentData.price}}</text> <text class="font-999 f-size-12 bg-color px-1 bd-r-1" v-if="!probably">看相似</text> <text v-if="probably" class="iconfont icongouwucheman jd-font-red"></text>
		</p>
	</view>
</template>

<script>
	export default {
		props: {
			recommentData: Object,
			probably: Boolean
		}
	}
</script>

<style scoped lang="scss">
	.recomment-item {
		.desc_jd_logo {
			width: 100upx !important;
			height: 28upx !important;
		}
	}
</style>
