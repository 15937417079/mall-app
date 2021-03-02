<template>
	<view class="seckill-list">
		 <scroll-view scroll-x="true" show-scrollbar="false" class="scroll-row w-100">
		 	<view class="scroll-row-item col-2 m-r-2 border" v-for="(item,index) in sechillData" :key="index">
				<view class="w-100 h-100 d-flex flex-column a-center">
					<view class="picImg w-100">
						<image :src="item.picImg" class="d-block-max-100"></image>
					</view>
					<view class="d-flex flex-column a-center">
						<text class="jd-font-red f-size-12">￥{{item.present}}</text>
						<del class="font-999 f-size-12">￥{{item.original}}</del>	
					</view>
				</view>
			</view>
		 </scroll-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		props:{
			sechillData: Array
		},
		created(){
			console.log('123')
			console.log(this.sechillData)
		}
	}
</script>

<style scoped lang="scss">
.seckill-list{
	.picImg{
		height: 100upx;
		image{
			
		}
	}
}
</style>