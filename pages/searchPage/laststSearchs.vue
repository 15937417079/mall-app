<template>
	<view class="lastst-searchs">
		<h3 class="d-flex j-sb a-center my-2"><span class="font-333 font-w-100">{{ title }}</span>  <i class="iconfont iconlajitong f-size-20 font-999" v-if="isIcon"></i> <span v-if="!isIcon" class="font-999 f-size-14" @click="isShowList=!isShowList">{{isShowList?'隐藏':'显示'}}</span> </h3>
				<p style="line-height: 200upx;" class="d-flex j-center w-100" v-show="!isShowList">已隐藏搜索发现</p>
		<view  class="d-flex flex-wrap a-center w-100" v-show="isShowList" >
				<span 
					class="d-block bd-r-1 historyItem m-r-1 my-1 px-2 py bg-ddd f-size-12 font-666"
					v-for="(item,index) in historyData" 
					:class="[hot&&index<3?'jd-font-red':'']"
					:key="index">{{item.val}}</span>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowList: true
			}
		},
		watch:{
			isShowList(e){
				console.log(e)
			}
		},
		props:{
			historyData: Array,
			title: String,
			hot: Boolean,
			isIcon: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped lang="scss">
.lastst-searchs{
	.historyItem{
	}
}
</style>