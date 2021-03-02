<template>
	<view class="bd-r-3 bg-fff o-hidden m-t-2">
		<l-title-r-content :title="'已选'" class="p-b-2" @showPopUp="showPopUp">
			<template>
				<view>
					高筋麦芯粉5kg，1个
				</view>
			</template>
		</l-title-r-content>
		<l-title-r-content :title="'送至'">
			<template>
				<view>
					北京市朝阳区 <br> 
					<text class="f-size-12 font-999">23:00前下单，预计明天(02月03日)送达</text>
				</view>
			</template>
		</l-title-r-content>
		<l-title-r-content :title="'重量'" :option="false">
			<template>
				<view>5.1kg</view>
			</template>
		</l-title-r-content>
		<view class="promiseTag p-l-4 p-r-5 font-666 d-flex flex-wrap position-rel">
			<view v-for="(item,index) in promiseTagList" :key="index" 
			class="m-r-1 f-size-12" style="line-height: 1.2;">
				<text :class="['iconfont', 'm-r-1', item.icon ]"/>
				{{ item.val }}
			</view>
			<view class="iconfont iconsangedian position-abs top-0" style="right: 40upx;" />
		</view>
	</view>
</template>

<script>
	import { M_ISPOPUP } from '@/store/mutation-types.js'
	export default {
		data() {
			return {
				promiseTagList: [
					{ icon: "iconiconfont44 jd-font-red", val: "99元免基础运费" },
					{ icon: "iconiconfont44", val: "京东发货&售后" },
					{ icon: "icongantanhao", val: "7天无理由退货（拆封后不支持）" },
					{ icon: "icongantanhao", val: "不可使用京券" },
					{ icon: "iconiconfont44 jd-font-red", val: "次日达" },
					{ icon: "iconiconfont44 jd-font-red", val: "预约送货" },
					{ icon: "iconiconfont44 jd-font-red", val: "送货上门" }
				]
			}
		},
		methods:{
			showPopUp(){
				this.$store.commit('M_ISPOPUP',true)
			}
		}
	}
</script>

<style scoped>

</style>