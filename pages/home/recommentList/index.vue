<template>
	<view class="comment-list row bg-fff px-2 w-100" style="margin-left: -20upx;">
		<view class=""
			v-if="recommentData.length > 0"
			 v-for="(item,index) in recommentData" :key="index" 
			 :class="['col-6', index%2===0?'p-r-1':'p-l-1','p-b-2']" >
			<recomment-item
				class="bg-fff bd-r-2 p-b-2 o-hidden"
				:recommentData="item"
				 :probably="probably"
				 @shopEntry="shopEntry"/>
		</view>
	</view>
</template>

<script>
	import recommentListData from '@/jsonData/recomment/recommentList.json'
	import recommentItem from '@/components/recomment-item.vue'
	export default {
		data() {
			return {
				recommentData: []
			}
		},
		props:{
			probably: Boolean
		},
		components: {
			recommentItem
		},
		
		created() {
			this.getRecomentList()

			console.log(this.recommentData)
		},
		methods: {
			getRecomentList() {
				this.recommentData = recommentListData
			},
			loadMore(){
				console.log('load more chufal;')
				let newArrData = this.ArrReset(recommentListData)
				console.log(newArrData)
				this.recommentData.push(...newArrData)
			},
			shopEntry(){
				console.log('shop entry')
				uni.navigateTo({
					url: '/pages/shopDetailPage/index',
					// animationType: 'pop-in',
					// animationDuration: 200,
					 animationType: 'pop-in',
					 animationDuration: 200
				})
			}
		}
	}
</script>

<style scoped>

</style>
