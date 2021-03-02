<template>
	<view class="tab-bar position-fixed w-100 bg-fff d-flex a-center j-sa">
		<view v-for="(item,index) in tabBarArr" :key="index" class="d-flex flex-column a-center j-sa">
			<i :class="['iconfont',item.icon]"></i>
			<text>{{ item.val }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabBarArr: [
					{ icon: 'iconshouye', activeIcon: 'iconshouye1-copy', val: '首页' },
					{ icon: 'iconfenlei', activeIcon: 'iconfenlei1', val: '分类' },
					{ icon: 'icongouwuchekong', activeIcon: 'icongouwucheman', val: '购物车' },
					{ icon: 'iconwode', activeIcon: 'iconwodedangxuan', val: '我的' },
				]
			}
		},
	}
</script>

<style scoped lang="scss">
.tab-bar{
	bottom: 100upx; left: 0;
	z-index: 999;
	height: 100upx;
	
}
</style>