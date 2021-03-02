<template>
	<view>
		<scroll-view scroll-y="true" style="height: 100%;">
				<image v-if="hotImgUrl" :src="hotImgUrl" class="mx-auto d-block" style="width: 94%; height: 200upx;"></image>
			<view v-for="(item,index) in commodityModuleData" :key="index">
				<category-goods-list 
					:goodsList="item.goodsList"
					:title="item.title"
				/>
			</view>
		</scroll-view>
	
	</view>
</template>

<script>
	import categoryGoodsList from '@/components/category-goods-list.vue'
	export default {
		data() {
			return {}
		},
		components:{
			categoryGoodsList,
		},
		props: {
			hotImgUrl: String,
			commodityModuleData: Array
		}
	}
</script>

<style scoped>
.picImg{
	width: 130upx;
	height: 120upx;
}
</style>