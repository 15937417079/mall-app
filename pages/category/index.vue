<template>
	<view class="category_container p-t-9">
		<header-bar @backOff="returnHome" @searchTap="goSearchPage">
			<template>
				<view>
					<i class="iconfont iconsangedian f-size-18 font-666"></i>
				</view>
			</template>
		</header-bar>
		<category-nav class="category-nav f-l" 
		:navList="categoryNavList" 
		:activeIndex="navActiveIndex"
		@sategoryItemTap="sategoryItemTap"></category-nav>
		
		<commodity-module
			class="commodity-module"
			:hotImgUrl="hotImgUrl"
			:commodityModuleData="commodityModuleData" />

	</view>
</template>

<script>
	import headerBar from '@/pages/searchPage/headerBar.vue'
	import categoryNav from '@/components/categoryNav.vue'
	import commodityModule from './commodityModule.vue'
	// import categoryData from './category.json'
	import categoryData from '@/jsonData/categoryJsonData/category.json'
	import goodsList from '@/jsonData/categoryJsonData/goodsList.json'
	export default {
		data() {
			return {
				categoryNavList: categoryData,
				goodsList: goodsList,
				commodityModuleData: [],
				hotImgUrl: '',
				navActiveIndex: 0,
				goodsListTitle: '热门推荐'
			}
		},
		components: {
			headerBar,
			categoryNav,
			commodityModule
		},
		onLoad(){
			this.commodityRandom()
			this.ishotImg()
		},
		methods: {
			sategoryItemTap(index,val) {
				if (this.navActiveIndex === index) return
				this.commodityModuleData = []
				this.navActiveIndex = index
				this.goodsListTitle = val
				this.hotImgUrl = ''
				setTimeout(_=>{
					this.ishotImg()
					this.commodityRandom()
				},300)
			},
			goodsListRandom(){
				let goodsListCount = this.randomNumber(this.goodsList.length + 3)
				let newGoodsList = this.ArrReset(this.goodsList);
				return newGoodsList.slice(0,goodsListCount)
			},
			commodityRandom(){
				this.commodityModuleData = []
				let count = this.randomNumber(5)
				for (let i = 0; i < count; i++) {
					this.commodityModuleData.push({
						title: this.goodsListTitle,
						goodsList: this.goodsListRandom()
					})
				}
			},
			ishotImg(){
				if (this.goodsListTitle === this.categoryNavList[0].val) {
					this.hotImgUrl = 'https://img12.360buyimg.com/mcoss/jfs/t1/159932/32/4053/79561/60067aceEa2a6d3ae/0a5b55b4cbb356fd.jpg'
				} else {
					this.hotImgUrl = ''
				}
			},
			returnHome(){ //返回首页
				console.log('123')
				uni.switchTab({
					url: '/pages/home/index'
				})
			},
			goSearchPage(){ // 进入搜索页
				uni.navigateTo({
					url: '/pages/searchPage/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.category_container {
		height: 100%;

		.category-nav {
			width: 200upx;
			background-color: #eee;
		}
		.commodity-module{
			height: 100%;
			margin-left: 200upx;
		}
	}
</style>
