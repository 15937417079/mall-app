<template>
	<view class="user-comment">
		<view class="comment-header d-flex j-sb a-center">
			<view class="d-flex a-center m-b-1">
				<image :src="commentList.userHead" mode="widthFix" 
				 class="bd-r-50"
				 style="width: 100upx;"></image>
				{{ commentList.userName }}</view>
			<view class="font-999 f-size-12">2020 9-21</view>	
		</view>
		<view class="content font-333 m-b-3" style="line-height: 1.3;">
			{{ commentList.commentContent }}
		</view>
		<scroll-view scroll-x="true" class=" scroll-row" :show-scrollbar="false">
			<view
			class="scroll-row-item"
				 v-for="(item,index) in commentList.commentImg" :key="index" >
				<image 
				 :src="item.picUrl"
				 class="bd-r-2 m-r-1"
				 style="width: 180upx;" mode="widthFix"></image>
			</view>
		</scroll-view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentPic: [
					{ picUrl: '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/115661/6/18454/94922/5f68ad8dE46d5cbd9/bbb8301c39a8832b.jpg!cc_100x100!q70.dpg.webp' },
					{ picUrl: '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/84755/14/17232/166954/5e829704Ef522ef24/4dece378f5da703b.jpg!cc_100x100!q70.dpg.webp' },
					{ picUrl: '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/115661/6/18454/94922/5f68ad8dE46d5cbd9/bbb8301c39a8832b.jpg!cc_100x100!q70.dpg.webp' },
					{ picUrl: '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/84755/14/17232/166954/5e829704Ef522ef24/4dece378f5da703b.jpg!cc_100x100!q70.dpg.webp' },
					{ picUrl: '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/115661/6/18454/94922/5f68ad8dE46d5cbd9/bbb8301c39a8832b.jpg!cc_100x100!q70.dpg.webp' },
					{ picUrl: '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/84755/14/17232/166954/5e829704Ef522ef24/4dece378f5da703b.jpg!cc_100x100!q70.dpg.webp' }
				]
			}
		},
		props: {
			commentList: Object
		}
	}
</script>

<style scoped>

</style>