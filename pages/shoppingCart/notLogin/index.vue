<template>
	<view class="not-login">
		<view class="d-flex j-center a-center f-size-18 p-t-1 bg-fff" style="height: 160upx;">
				<h5 class="font-666 font-w-100">登陆后可同步账户购物车中的商品 <span class="px-3 py-1 bg-f00 font-color-fff bd-r-3 m-l-2">登录</span> </h5>
		</view> 
		
		<view class="emptyShopping d-flex flex-column a-center py-10 j-center">
			<image src="/static/images/notLogin/emptyShopping.png" class="bd-r-50" style="width: 200upx; height: 200upx;"></image>
			<text class="my-5">登陆后可同步账户购物车中的商品</text>
		</view>
		
		<!-- 京东秒杀 S -->
		<jd-seckill-line class="my-3" />
		<jd-seckill />
		<!-- 京东秒杀 E -->
		
		<!-- 商品列表 S -->
		<jd-seckill-line class="my-3" :text="'可能你还想要'" />
		<recomment-list probably class="px-1" />
		<!-- 商品列表 E -->
		
	</view>
</template>
  
<script> 
	import jdSeckillLine from '@/components/jdSeckillLine.vue'
	import jdSeckill from './jdSeckill.vue'
	import recommentList from '@/pages/home/recommentList/index.vue'
	export default {
		data() {
			return {
				seckillDataList: []
			}
		},
		components:{
			jdSeckillLine,
			jdSeckill,
			recommentList
		},
	}
</script>
 
<style scoped>

</style>
