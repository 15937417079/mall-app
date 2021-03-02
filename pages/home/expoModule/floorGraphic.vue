<template>
	<view class="floor_graphic row">
		<view 
			class="graphic_separation col-3 p-r-1 d-flex flex-column a-start font-f "
			 v-for="item in floorGraphic_data" :key="item.id">
			<text class="f-size-16 font-w">{{item.title}}</text>
			<text class="font-999">{{item.desc}}</text>
			<view class="picImg">
				<image :src="item.picUrl" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			floorGraphic_data: Array,
		},
		mounted() {
			console.log(this.floorGraphic_data)
		}
	}
</script>

<style scoped lang="scss">
.floor_graphic{
	.graphic_separation{
		.picImg{
			position: relative;
			width: 100%;
			padding-top: 100%;
			image{
				position: absolute;
				top: 0; left: 0;
				width: 90%;
				height: 90%;
			}
		}
	}
}
</style>
