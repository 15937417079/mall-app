<template>
	<view class="not-login-jd-seckill bg-fff p-2">
		<view class="jd-seckill-header d-flex j-sb a-center">
			<view class="d-flex">
				<text class="font-333 font-w f-size-16">京东秒杀</text>
				<view class="time-box m-l-2 d-flex">
					<span class="font-999 f-size-12">18点场</span>
					<view class="time m-l-2 f-size-12 jd-font-red d-flex">
						<view v-for="(item,index) in timeArr" :key="index">
							<span  class="border mx">{{item}}</span>{{ index > 1 ? '' : ':' }}
						</view>
					</view>
				</view>
			</view>
			<view class="arrow-r"></view>
		</view>
		
		<seckill-list v-if="seckillDataList.length>0" :sechillData="seckillDataList" />
	</view>
</template>

<script>
	import seckillData from '@/jsonData/homeJsonData/seckillData.json'
	import seckillList from '@/pages/home/jdSeckill/seckillList.vue'
	export default {
		data() {
			return {
				seckillDataList: [],
				timeArr: []
			}
		},
		components:{
			seckillList
		},
		created() {
			this.getseckillData()
			this.seckillTime()
		},
		methods:{
			getseckillData(){
				this.seckillDataList = seckillData
			},
			seckillTime(){
				setInterval(_=>{
					this.timeArr = this.M_diffTime('18:00:00')
				},1000)
			}
		}
	}
</script>

<style scoped lang="scss">
.not-login-jd-seckill{
	
}
</style>