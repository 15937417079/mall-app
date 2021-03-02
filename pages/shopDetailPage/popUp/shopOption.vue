<template>
	<pop-up>
		<view class="shopDescTop row">
			<image :src="shopData.picUrl" mode="widthFix" class="col-3 bd-r-2"></image>
			<view class="col-8 d-flex flex-column j-end a-start">
				<view class="price jd-font-red">
					￥ <text class="f-size-20 font-w">{{ shopData.price.slice(0,1) }}</text>{{ shopData.price.slice(1) }}
				</view>
				<view class="option m-b-2 f-size-12">
					<text class="font-666 m-r-2">已选</text> {{ shopData.selected }}
				</view>
			</view>
		</view>
		<view class="popOption m-t-3">
			<text class="font-w w-100">类别</text>
			<view class="category d-flex flex-wrap">
				<view v-for="(item,index) in shopData.category" :key="index"
				 class="categoryItem py px-2 bd-r-4 b-sizing mx-1 my-1 f-size-12 font-333" @tap="categoryHandler(index)"
				 :class="index===activeIndex?'border-f00 jd-font-red':'border-fff'">
					{{ item.val }}
				</view>
			</view>
		</view>
		<view class="quantity d-flex j-sb my-3 m-b-9">
			<view>数量<text class="jd-font-red m-l-2">（最多可购买199件）</text></view>
			<view class="d-flex a-center">
				<input type="number" value="1" class="quantityNumber f-size-12 text-center m-r-1" /> +
			</view>
		</view>
		<buy-btn></buy-btn>
	</pop-up>
</template>

<script>
	import shopOption from '@/jsonData/shopDetailJson/shopOption.json'
	import buyBtn from '@/components/buyBtn.vue'
	export default {
		data() {
			return {
				shopData: shopOption,
				activeIndex: 0
			}
		},
		components:{
			buyBtn
		},
		methods:{
			categoryHandler(index){
				this.activeIndex = index
			}
		}
	}
</script>

<style scoped lang="scss">
.categoryItem{
	background-color: rgba(0,0,0,.05);
}
.quantityNumber{
	width: 70upx;
	background-color: #eee;
}
.border-fff{
	border: 1px solid transparent;
}
</style>