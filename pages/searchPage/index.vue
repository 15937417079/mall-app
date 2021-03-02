<template>
	<div class="search-page">
		<header-bar @backOff="backOff"></header-bar>
		<view class="bg-fff w-100 px-2 b-sizing p-b-2">
			<lastst-search :historyData="historyData" :title="'最近搜索'" />
			<lastst-search :historyData="hotData" :title="'热门搜索'" :isIcon="false" hot />
		</view>
	</div>
</template>

<script>
	import headerBar from './headerBar.vue'
	import laststSearch	 from './laststSearchs.vue'
	export default {
		data() {
			return {
				historyData: [
					{id: 1, val: '裤子'},
					{id: 2, val: '衣服'},
					{id: 3, val: '鞋子'}
				],
				hotData: [
					{id: 1, val: '直饮水龙头'},
					{id: 2, val: '橄榄调和油'},
					{id: 3, val: '多肉种子'},
					{id: 4, val: '微波炉'},
					{id: 5, val: '电动车'},
					{id: 6, val: '赛车'},
				]
			}
		},
		components:{
			laststSearch,
			headerBar
		},
		methods:{
			backOff(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
</style>