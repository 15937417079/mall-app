<template>
	<view class="category-goods-list row py-3">
		<text class="goodsListTitle">{{title}}</text>
		<view v-for="(item,index) in goodsList" :key="index"
			class="d-flex flex-column a-center col-4 m-t-3">
			<image class="picImg" :src="item.picUrl"></image>
			<text class="d-block">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props:{
			goodsList: Array,
			title: String
		}
	}
</script>

<style scoped>
.picImg{
	width: 130upx;
	height: 120upx;
}
</style>