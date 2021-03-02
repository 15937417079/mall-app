<template>
	<view class="my-other-module m-t-9">
		<login-line :text="'其他登陆方式'" :textBg="'#fff'" :textColor="'#999'" />
		
		<view class="d-flex j-center my-4">
			<view v-for="(item,index) in loginArr" :key="index" class="mx-5 d-flex flex-column a-center" >
				<view :class="[item.icon, index===1?'weixinIcon':'']"
					class="qqIcon iconfont f-size-24 bd-r-50 d-flex a-center j-center"></view>
				<text class="font-999">{{item.val}}</text>
			</view>
		</view>
		
		<p class="text-center font-999 f-size-12">未注册的手机号验证后将自动创建京东账号, <br> 登录即代表您已同意 <a href="javascript:;" style="color: #0A98D5;">京东隐私政策</a> </p>
	</view>
</template>

<script>
	import loginLine from '@/components/jdSeckillLine.vue'
	export default {
		data() {
			return {
				loginArr: [
					{ icon: 'iconQQ', val: 'QQ' },
					{ icon: 'iconxingzhuangjiehe', val: '微信' },
				]
			}
		},
		components:{
			loginLine,
		}
	}
</script>

<style scoped lang="scss">
.my-other-module{
	.qqIcon{
		color: #007AFF;
		$w: 90upx;
		width: $w;
		height: $w;
		background-color: #E7F7FE;
	}
	.weixinIcon{
		color: #09BB07;
		background-color: #E6F8E6;
	}
}
</style>