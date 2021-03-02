<template>
	<view class="header-module py-1">
		<v-swiper class="v-swiper d-block mx-auto" :swiperData="swiperData"></v-swiper>
		
		<floor-module></floor-module>
		
	</view>
</template>

<script>
	import vSwiper from '@/components/v-swiper/v-swiper';
	import floorModule from './floorModule.vue'
	export default {
		data(){
			return {
				swiperData: [
					{url: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/162098/35/3370/185419/6006563cE4db863fa/7f0d6ea389a21958.jpg!q70.jpg.dpg'},
					{url: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159233/27/3537/36036/60017501Ef802b844/dedac2215c4ca8f7.jpg!q70.jpg.dpg'},
					{url: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/160089/20/3956/464901/6006a471E87acc0f4/050b0719dd2b8a7b.jpg!q70.jpg.dpg'}
				],
			}
		},
		components:{
			vSwiper,
			floorModule
		}
	}
</script>

<style scoped lang="scss">
.header-module{
	width: 104%;
	height: 520upx;
	margin-left: -2%;
	background: url('/static/images/headerBg.jpg');
	.v-swiper{
		width: 94%;
		border-radius: 30upx;
		overflow: hidden;
	}
}
</style>