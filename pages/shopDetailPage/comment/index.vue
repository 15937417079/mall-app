<template>
	<view class="m-t-2 bg-fff bd-r-3 px-4 p-b-8 py-2"> 
		<summary-header :evalP="'好评度99%'">
			<template>
				<view>
					评论
					<text class="f-size-12">100+</text>
				</view>
			</template>
		</summary-header>
		
		<view class="commentCategory d-flex flex-wrap o-hidden" style="height: 162upx;">
			<view v-for="(item,index) in category" :key="index"
				class="py-1 px-2 bg-fce m-r-1 bd-r-3 my-1 f-size-12" >
				{{ item.val }}
			</view>
		</view>
		<view v-if="commentList.length>0">
			<user-comment 
				class="p-b-3 p-t-3"
				:class="index===0?'border-b-999':''"
				v-for="(item,index) in commentList"
				:commentList="item"></user-comment>
		</view>
		
	</view>
</template>

<script>
	import commentDefail from '@/jsonData/comment/commentDetail.json'
	import userComment from '../userComment/index.vue'
	export default {
		data() {
			return {
				category: [
					{ val: "嚼劲十足(3007)" },
					{ val: "美味可口(668)" },
					{ val: "方便实用(238)" },
					{ val: "晶莹剔透(236)" },
					{ val: "漂亮好看(110)" },
					{ val: "清香四溢(91)" },
					{ val: "颗粒硕大(60)" },
					{ val: "省事方便(45)" }
				],
				commentList: commentDefail
			}
		},
		components:{
			userComment
		}
	}
</script>

<style scoped>
.border-b-999 {
	border-bottom: 1px solid #ccc;
}
</style>