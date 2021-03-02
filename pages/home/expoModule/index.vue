<template>
	<view class="expo-module m-t-2">
		
		<view class="expoReal_box row j-sb">
			<expo-real 
			:class="['col-6', index===0?'p-r-1':'']"
				v-if="expoReal_data.length > 0"
				v-for="(item, index) in expoReal_data" :key="index"
				:expoReal_data="item" />
		</view>
		
		<floor-graphic 
			v-if="floorGraphic_data.length>0"
			:floorGraphic_data="floorGraphic_data" />
		
	</view>
</template>

<script>
	import expoReal from './expoReal.vue'
	import floorGraphic from './floorGraphic.vue'
	import floorGraphicDataArr from '@/jsonData/homeJsonData/floorGraphic_data.json'
	export default {
		data(){
			return {
				expoReal_data: [],
				floorGraphic_data: []
			}
		},
		components:{
			expoReal,
			floorGraphic
		},
		created() {
			this.getExpoData()
			this.getFloorGraphic()
		},
		methods:{
			getExpoData(){
				this.expoReal_data = [
					{ 
						title: '下厨做饭',
						desc: '找时间下厨咯!',
						picUrl_l: '/static/images/expo/expo-1.png',
						picUrl_r: '/static/images/expo/expo-2.png'
					},
					{
						title: '重温纯美',
						desc: '时尚即传承',
						picUrl_l: '/static/images/expo/expo-3.png',
						picUrl_r: '/static/images/expo/expo-4.png'
					}
				]
			},
			getFloorGraphic(){
				this.floorGraphic_data = floorGraphicDataArr
			}
		}
	}
</script>

<style scoped lang="scss">

</style>