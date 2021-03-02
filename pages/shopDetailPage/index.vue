<template>
	<view class="w-100 p-t-9" :style="{paddingTop: Mixin_isShowAdsense?'90upx':'0'}">
		
		<adsense v-if="Mixin_isShowAdsense" @clearAdsense="Mixin_isShowAdsense = false"></adsense>
		
		<!-- 头部区 -->
		<shop-header 
		 :isTop="Mixin_isShowAdsense" 
		 :headerNavIndex="headerNavIndex"
			:scrollTopEv="scrollTopEv" />
		
		<!-- 轮播图 -->
		<v-swiper />
		
		<!-- 轮播图 下边的 年货节 图片 -->
		<image src="/static/images/goodsDetailPage/swiperBottom.jpg" class="w-100" mode="widthFix"></image>
		
		<!-- 价格 以及 商品 信息 介绍 -->
		<introduce></introduce>
		
		<!-- 优惠模块 -->
		<discount />
		
		<!-- 已选、送至、重量、模块 -->
		<option-content></option-content>
		
		<!-- 评论 模块 -->
		<comment ref="commentRef"></comment>
		
		<!-- 底部操作区 -->
		<goods-footer v-if="!$store.state.isPopUp"></goods-footer>
		
		弹出层
		<shop-option></shop-option>
		
	</view>
</template>

<script>
	import adsense from '@/pages/home/adsense/index.vue'
	import shopHeader from './header/index.vue'
	import vSwiper from './swiper/index.vue'
	import introduce from './introduce/index.vue'
	import discount from './discount/index.vue'
	import optionContent from './options/index.vue'
	import comment from './comment/index.vue'
	import goodsFooter from './footer/index.vue'
	import shopOption from './popUp/shopOption.vue'
	export default {
		data() {
			return {
				isShowAdsense: true,
				headerNavIndex: 0,
				scrollTopEv: 0
			}
		},
		components:{
			adsense,
			shopHeader,
			vSwiper,
			introduce,
			discount,
			optionContent,
			comment,
			goodsFooter,
			shopOption
		},
		onPageScroll(ev) {
			this.scrollTopEv = ev.scrollTop
			this.scrollFun(ev)
			let commentTop = this.$refs.commentRef.$el.offsetTop
			if (ev.scrollTop + 100 >= commentTop) {
				this.headerNavIndex = 1
			} else {
				this.headerNavIndex = 0
			}
		},
		methods:{
			clearAdsense(){
			}
		}
	}
</script>

<style scoped>

</style>