<template>
	<view class="expo-real">
		<view class="title w-100 d-flex flex-column a-start font-f ">
			<text class="f-size-16 font-w">{{expoReal_data.title}}</text>
			<text class="font-999">{{expoReal_data.desc}}</text>
		</view>
		<view class="picImg row j-sb">
			<view class="img_l">
				<image :src="expoReal_data.picUrl_l" class="col-5"></image>
			</view>
			<view class="img_l">
				<image :src="expoReal_data.picUrl_r" class="col-5"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			expoReal_data: Object
		},
	}
</script>

<style scoped lang="scss">
.expo-real{
	.picImg{
		width: 100%;
		.img_l, .img_r {
			position: relative;
			width: 49%;
			padding-top: 45%;
		}
		.img_l{
		}
		.img_r{
		}
		image{
			position: absolute;
			top: 0; 
			width: 90%;
			height: 90%;
			&:first-of-type{
				left: 0;
			}
			&:last-of-type{
				left: 0%;
			}
		}
	}
}
</style>