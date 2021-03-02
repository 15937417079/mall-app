<template>
	<view class="title-wrap row j-sb" >
		<view class="col-8 p-l-3 d-flex a-center" >
			京东秒杀
			<text class="m-l-2 jd-font-red">10</text>
			<view class="time">
				<text>{{resultTime[0]}}</text>:
				<text>{{resultTime[1]}}</text>:
				<text>{{resultTime[2]}}</text>
			</view>
		</view>
		<view class="col-3 px-2 jd-font-red d-flex a-center">
			更多秒杀
			<image src="/static/images/jdSeckill/arrow_rt.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				resultTime: []
			}
		},
		created() {
			this.seckillTime()
			this.monitor()
		},
		mounted() {
			console.log('mounted');
		},
		beforeDestroy() {
			console.log('beforDestory');
		},
		onTabItemTap() {
			console.log('seckill zhong1 tab qiehuan1l1 ............');
		},
		onHide() {
			console.log('tit seckill on hide l------');
		},
		onUnload() {
			console.log('on un load -- tit seckill---');
		},
		destroyed() {
			console.log('destoryed');
		},
		onLoad() {
			console.log('onload--123  36');
		},
		methods:{
			seckillTime(){
				setInterval(_=>{
					this.resultTime = this.M_diffTime('10:00:00')
				},1000); 
			},
			monitor(){
				uni.$on('hook:onHide', _=>{
					console.log('这里是 $once  chufal1d1');
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.title-wrap{
	height: 70upx;
	background: url(../../../static/images/jdSeckill/title_bg.png);
	background-size: contain;
	&>view{
		&:first-of-type{
			&>text{
				width: 120upx;
				background-image: url(../../../static/images/jdSeckill/10_img.png);
				background-repeat: no-repeat;
				background-size: 50upx;
				background-position: 40upx 0;
			}
			&>.time{
				text{
					color: var(--white);
					background-color: var(--jdRed);
					border-radius: 6upx;
					margin: 0 5upx
				}
			}
		}
		&:last-of-type{
			position: relative;
			&>image{
				position: absolute;
				top: 50%;left: 140upx;
				transform: translateY(-50%);
				display: block;
				width: 20upx;
				height: 20upx;
			}
		}
	}
}
</style>