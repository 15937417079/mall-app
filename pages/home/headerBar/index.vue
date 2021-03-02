<template>
	<view class="header-bar d-flex a-center j-sb px-3 b-sizing font-color-fff" 
		:style="{top: top}">
		
		<view class="entryCategory d-flex flex-column a-center j-sa">
			<span v-for="(item,index) in 3"></span>
		</view>
		<view class="searchInput bg-fff px-2 d-flex a-center p-l-9 b-sizing position-rel">
			<span class="iconfont iconJD f-size-20"></span>
			<span class="iconfont iconsw_sousuo"></span>
			<input type="text" placeholder="请输入搜索内容"
			 class="font-555 m-l-4"
				@tap="$emit('searchTap')"/>
		</view>
		<view>登陆</view>
	</view>
</template>

<script>
	export default {
		props:{
			top: String,
			default: 0
		}
	}
</script>

<style scoped lang="scss">
	.header-bar {
		position: fixed;
		left: 0;
		width: 750upx;
		height: 80upx;
		z-index: 999;
		background-color: #fe1b60;
		.entryCategory{
			width: 50upx;
			height: 50upx;
			span{
				display: block;
				width: 40upx;
				height: 4upx;
				background-color: #fff;
			}
		}
		.searchInput{
			overflow: hidden;
			width: 500upx;
			height: 50upx;
			border-radius: 30upx;
			align-items: center;
			.iconJD{
				color: #f00;
			}
			span{
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				display: block;
				color: blue;
				&:first-of-type{
					left: 20upx;
					&::after{
						content: '';
						position: absolute;
						top: 50%; right: -16upx;
						transform: translateY(-50%);
						width: 1px;
						height: 30upx;
						border-left: 1px solid #ccc;
					}
				}
				&:last-of-type{
					left: 85upx;
					color: #aaa;
				}
			}
			input{
				font-size: 20upx;
			}
		}
	}
</style>
