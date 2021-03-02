<template>
	<view class="goods-footer position-fixed bottom-0 left-0 bg-fff w-100 z-index-8 row" 
	 style="height: 100upx;">
		<view class="shopOwner span-3 d-flex flex-column a-center j-center f-size-12">
			<text class="iconfont icondianpu1 jd-font-red f-size-12"></text> 店家
		</view>
		<view class="service span-3 d-flex flex-column a-center j-center f-size-12"> 
			<text class="iconfont iconceshi f-size-12"></text> 客服
		</view>
		<view class="shoppingCart span-3 d-flex flex-column a-center j-center f-size-12">
			<text class="iconfont icongouwuche-copy-copy f-size-12"></text> 购物车
		</view>
		 <buy-btn class="span-11"></buy-btn>
	</view>
</template>

<script>
	import buyBtn from '@/components/buyBtn.vue'
	export default {
		data() {
			return {
				btnArr: []
			}
		},
		components:{
			buyBtn
		}
	}
</script>

<style scoped lang="scss">
.goods-footer {
	box-shadow: 0 0 10upx 0 rgba(0,0,0,.3);
		.iconfont {
			transform: scale(1.6);
		}
}
</style>
