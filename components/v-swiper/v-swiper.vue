<template>
	<view class="v-swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" circular>
			<swiper-item v-for="(item,index) in swiperData" :key="index">	
				<view class="swiper-item">
					<image :src="item.url" lazy-load :style="{'height': height, width: '750upx'}"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			swiperData: Array,
			height: {
				type: String,
				default: '350upx'
			}
		}
	}
</script>

<style type="scss" scoped>
</style>
