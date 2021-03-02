<template>
	<view class="shop-header position-fixed left-0 z-index-5 d-flex j-sb w-100"
	 :style="{ top: isTop ? '90upx' : '0' }">
		<view 
		 v-for="(item,index) in iconArr" :key="index"
		 class="iconfont d-flex a-center j-center m-2 f-size-24 bd-r-50 z-index-6"
		 :class="[item, opacityColor>=1?'font-333':'bg-999 font-color-fff']"
		 @tap="index===0&&backOff() "> </view>
			
		<view class="header_nav position-abs w-100 top-0 d-flex j-center a-center bg-fff"
		 :style="{opacity: opacityColor}">
			<view v-for="(item,index) in headerNavList" :key="index"
			 class="m-l-2 header_nav_item position-rel"
			 :class="index===headerNavIndex?'active':''" >
				{{ item.val }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconArr: ['iconicon-copy', 'iconsangedian'],
				headerNavList: [
					{ val: '商品' },
					{ val: '评价' },
					{ val: '详情' },
					{ val: '推荐' }
				],
				opacityColor: 0
			}
		},
		props:{
			isTop: Boolean,
			headerNavIndex: {
				type: Number,
				default: 0
			},
			scrollTopEv: {
				type: Number,
				default: 0
			}
		},
		watch:{
			scrollTopEv(el){
				this.opacityColor = el / 150 
				if (this.opacityColor <= 0) {
					this.opacityColor = 0
				}
				if (this.opacityColor >= 1) {
					this.opacityColor = 1
				}
			}
		},
		methods:{
			backOff(){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
.shop-header{
	margin-left: -2upx;
	width: calc(100% + 2upx);
	.iconfont{
		width: 60upx;
		height: 60upx;
	}
	.header_nav{
		left: 50%;
		transform: translateX(-50%);
		height: 90upx;
		.header_nav_item{
			&.active{
				&::before{
					position: absolute;
					bottom: -10upx; left: 0;
					content: '';
					width: 100%;
					height: 10upx;
					background: linear-gradient(left, #fa2c19 0%, #fad1cb 100%);
				}
			}
		}
	}
}
</style>