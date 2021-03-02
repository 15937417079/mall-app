<template>
		<view class="row">
			<view class="span-4 text-center d-flex flex-column j-center a-center" style="height:130upx" v-for="(item,index) in navList" :key="index">
				<image :src="item.imgUrl" class="image"></image>
				 <text>{{item.text}}</text> 
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props:{
			navList: Array
		}
	}
</script>

<style scoped>
	.image{
		width: 60upx;
		height: 60upx;
	}
</style>
