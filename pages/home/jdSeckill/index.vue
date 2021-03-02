<template>
	<view class="jd-seckill">
		<view class="js_seckill_box m-b-2">
			<title-wrap />
			<seckill-list v-if="sechillData.length>0" :sechillData="sechillData" />
		</view>
		
		<seckill-fls :flsData="flsData" :picImgBg="picImgBg" />
	</view>
</template>

<script>
	import sechillData from '@/jsonData/homeJsonData/seckillData.json'
	import flsData from '@/jsonData/homeJsonData/flsData.json'
	import titleWrap from './titleWrap.vue'
	import seckillList from './seckillList.vue'
	import seckillFls from './seckillFls.vue'
	export default {
		data(){
			return {
				sechillData: sechillData,
				flsData: flsData,
				picImgBg: '/static/images/jdSeckill/fls-bg.png'
				
			}
		},
		onShow() {
			console.log('页面 onload 了');
		},
		components:{
			titleWrap,
			seckillList,
			seckillFls,
		}
	}
</script>

<style scoped  lang="scss">
.js_seckill_box{
	width: 100%;
	overflow: hidden;
	border-radius: 20upx;
	background-color: #fff;
}
</style>