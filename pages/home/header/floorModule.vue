<template>
	<view class="floor-the-container d-flex j-sa row m-t-1">
		<view class="floor-l col-3">
			<image src="/static/images/header-floorModule/floor-l-bg.png" mode=""></image>
			<text>服饰年货</text>
			<view class="floor-l-img position-abs">
				<image src="/static/images/header-floorModule/floor-l.jpg" mode=""></image>
			</view>
		</view>
		<view class="floor-middle col-6">
			<image src="/static/images/header-floorModule/floor-middle.gif" mode=""></image>
			<view class="floor-middle-img position-abs">
					<image src="/static/images/header-floorModule/floor-1.jpg" mode=""></image>
					<image src="/static/images/header-floorModule/floor-2.jpg" mode=""></image>
			</view>
		</view>
		<view class="floor-r col-3">
			<image src="/static/images/header-floorModule/floor-r-bg.png" mode=""></image>
			<text>1元抢好货</text>
			<view class="floor-r-img position-abs">
					<image src="/static/images/header-floorModule/floor-r.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
.floor-the-container {
	$width: 132upx;
	$height: 130upx;
	$top: 28upx;
	$left: 35upx;
	&>view {
		height: 200upx;
		position: relative;
		&>image {
			max-width: 100%;
			max-height: 100%;
			z-index: 3;
		}
		&>text{
			position: absolute;
			bottom: 6upx;
			color: #fff;
			font-size: 10upx;
			z-index: 5;
		}
		&.floor-l>text{
			left: 55upx;
		}
		&.floor-r>text{
			right: 46upx;
		}
	}
	.floor-l-img {
		top: $top; left: $left;
		width: $width;
		height: $height;
		image{
			max-width: 100%;
			max-height: 100%;
		}
	}
	.floor-middle-img {
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		&>image{
			position: absolute;
			width: $width;
			height: $height;
			&:first-of-type{
				top: $top;
				left: $left;
			}
			&:last-of-type{
				top: $top;
				right: $left;
			}
		}
	}
	.floor-r-img {
		top: $top; right: $left;
		width: $width;
		height: $height;
		image{
			max-width: 100%;
			max-height: 100%;
		}
	}
}
</style>
