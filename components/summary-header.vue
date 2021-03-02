<template>
	<view class="summary d-flex j-sb"> 
		<view class="tit f-size-14 position-rel p-l-2">
			<slot></slot>
		</view>
		<view class="evalP position-rel p-r-3 font-999 f-size-12">
			{{ evalP }}
			<text class="iconfont iconicon1 position-abs f-size-12"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			evalP: String
		}
	}
</script>

<style scoped lang="scss">
.summary{
	.tit {
		&::before{
			content: '';
			position: absolute;
			top: 50%;  left: 0upx;
			transform: translateY(-50%);
			width: 8upx;
			height: 28upx;
			background: linear-gradient(top, #fa2c19 0%, #fad1cb 100%);
		}
	}
	.evalP{
		.iconicon1{
			top: 50%;
			right: 0;
			transform: translateY(-50%);
		}
	}
}
</style>
