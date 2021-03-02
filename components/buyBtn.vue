<template>
	<view class="buyBtn row j-sa">
		<view 
		 v-for="(item,index) in btnArr" :key="index"
		 class="addToCart span-9 d-flex a-center j-center bd-r-5 my-105 py-1 font-color-fff"
		 :class="index===0?'add':'immediate m-l-2'" >{{item}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnArr: ['加入购物车', '立即购买']
			};
		}
	}
</script>

<style scoped lang="scss">
.buyBtn{
	.add {
		background: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
	}
	.immediate {
		background: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
	}
	.my-105 {
		margin-top: 15upx;
		margin-bottom: 15upx;
	}
}
</style>
