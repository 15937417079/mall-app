<template>
	<view class="shopDetailPage-swiper">
		<swiper :indicator-dots="true" :autoplay="false" :duration="500" style="height: 752upx;">
			<swiper-item v-for="(item,index) in swiperArr" :key="index" class="w-100">
				<view class="swiper-item">
					<image :src="item.picUrl" class="w-100" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import swiperData from '@/jsonData/shopDetailJson/swiper.json'
	export default {
		data() {
			return {
				swiperArr: swiperData
			}
		},
	}
	
	
</script>

<style scoped lang="scss">
.shopDetailPage-swiper{
	.swiper-item{
	}
}
</style>
