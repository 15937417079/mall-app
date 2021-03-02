<template>
	<view class="home_container" :style="{paddingTop: Mixin_isShowAdsense?'170upx':'80upx'}">
		
		<!-- 广告位 S -->
		<adsense v-if="Mixin_isShowAdsense" @clearAdsense="Mixin_isShowAdsense = false"></adsense>
		<!-- 广告位 E -->
		
		<!-- 顶部 搜索 登陆 区 S -->
		<header-bar :top="Mixin_isShowAdsense?'90upx':'0'"
			@searchTap="searchTap"></header-bar>
		<!-- 顶部 搜索 登陆 区 E -->
			
		<!-- header S -->
		<header-module></header-module>
		<!-- header E -->
		
		<!-- nav S-->
	<swiper :indicator-dots="true" :duration="500" class="bg-color">
		<swiper-item v-for="(item,index) in 2" :key="index">
			<view class="swiper-item">
				<v-nav :navList="navList.slice(10*index,10*(index+1))"></v-nav>
			</view>
		</swiper-item>
	</swiper>
		<!-- nav E-->
		
		<!-- 京东秒杀 S -->
		<jd-sechill />
		<!-- 京东秒杀 E -->
		
		<expo-module />
		
		<recomment-list ref="recommentListRef" />
		
		<!-- 回到顶部 S -->
		<view class="goTop position-fixed font-555 d-flex a-center j-center bd-r-50 z-index-8 bg-fff"
			@tap="goTop"
			 v-if="mixin_showGoTop">
			<span class="iconfont icondingbu1"></span>
		</view>
		<!-- 回到顶部 E -->
		
	</view>
</template>

<script>
	import headerBar from './headerBar/index.vue'
	import adsense from './adsense/index.vue'
	import headerModule from './header/headerModule.vue'
	import navListData from '@/jsonData/homeJsonData/navList.json'
	import vNav from '@/components/v-nav'
	import jdSechill from './jdSeckill/index.vue'
	import expoModule from './expoModule/index.vue'
	import recommentList from './recommentList/index.vue'
	import { M_ISADSENSE } from '@/store/mutation-types.js'
	export default {
		data() {
			return {
				navList: navListData,
			}
		},
		onPageScroll: function(ev) {
			this.scrollFun(ev)
		},
		onReady() { },
		onHide() { },
		onReachBottom() {
			this.$refs.recommentListRef.loadMore()
		},
		components:{
			adsense,
			headerBar,
			headerModule,
			vNav,
			jdSechill,
			expoModule,
			recommentList
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData(){
				console.log('123')
				let res = await this.$api.category({
					apkey: 'f00f67d0-5785-a4b6-29fd-0230febe888b'
				})
				console.log(res)
			},
			goTop(){
				uni.pageScrollTo({
					scrollTop:0,
					duration:0
				})
			},
			searchTap(){ // 点击搜索框 跳转页面
				uni.navigateTo({
					url: '/pages/searchPage/index',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.home_container{
		padding: 170upx 2% 100upx;
		.goTop{
			$w:80upx;
			bottom: 200upx;
			right: 50upx;
			width: $w;
			height: $w;
			border: 1px solid #999;
			span{
				font-size: 40upx;
			}
		}
	}
</style>
