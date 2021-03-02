<template>
	<view class="jdSeckillLine position-rel d-flex j-center">
			<text class="z-index-3 d-flex j-center a-center font-666 px-4 position-rel" 
			 :style="{backgroundColor: textBg, color: textColor}">{{text}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			text: {
				type: String,
				default: '京东秒杀'
			},
			textBg: {
				type: String,
				default: '#f1f1f1'
			},
			textColor: {
				type: String,
				default: '#666'
			}
		}
	}
</script>

<style scoped lang="scss">
.jdSeckillLine{
	&::before{
		position: absolute;
		top: 50%; left: 0;
		content: '';
		width: 100%;
		height: 1px;
		border-top: 1px solid #ccc;
	}
	text{
		height: 30upx;
		&::before, &::after{
			position: absolute;
			top: 50%; 
			transform: translateY(-50%);
			content: '';
			width: 10upx;
			height: 10upx;
			background-color: #ccc;
			border-radius: 50%;
		}
		&::before{
			left: 0;
		}
		&::after{
			right: 0;
		}
	}
}
</style>