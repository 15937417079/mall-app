<template>
	<view class="seckill-fls row">
		<view v-for="(item,index) in flsData" :key="index" 
		class="fls_item col-3 border d-flex flex-column a-center position-rel">
			<image class="picImgBg d-block-max-100 z-index-6" :src="picImgBg"></image>
			<view class="picImg h-100 d-flex flex-column a-center position-abs p-l-1">
				<image :src="item.picImg" class="d-block w-100" style="height: 170upx;" ></image>
				<view 
				class="fls_title z-index-6 font-color-fff position-abs f-size-12 d-flex flex-column a-center w-100">
					<text>{{item.title}}</text>
					<text>{{formatCount(item.subTit)}}万人买过</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			flsData: Array,
			picImgBg: String,
		},
		mounted() {
			console.log(this.flsData)
		},
	}
</script>

<style scoped lang="scss">
.seckill-fls{
	.fls_item{
		height: 260upx;
		.picImg{
			top: 0; left: 0;
			width: 160upx;
		}
		.fls_title{
			bottom: 4px;
			left: 0;
			line-height: 36upx;
		}
	}
}
</style>