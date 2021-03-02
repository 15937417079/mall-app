<template>
	<view class="categoryNav_conttainer">
		<view class="scrollLeft">
			<scroll-view
				scroll-y="true" 
				:show-scrollbar="true"
				class="scroll-row-y categoryNav_scrollView">
				<view v-for="(item,index) in navList" :key="index"  
					@tap="$emit('sategoryItemTap',index,item.val)"
					:class="['scrollView', 'font-f', 'font-333', 'scroll-row-item-y', 'd-flex', 'flex-column', 'a-center', 'j-center', index==activeIndex?'active':'']">
					{{item.val}}
				</view>
			</scroll-view>
		</view>
		   
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			navList: Array,
			activeIndex: Number
		}
	}
</script>

<style lang="scss" scoped>
.categoryNav_conttainer{
	height: 100%;
	.scrollLeft{
		height: 100%;
		overflow: hidden;
		.categoryNav_scrollView{
			height: 100%;
			::-webkit-scrollbar {  
			    display: none;  
			    width: 0 !important;  
			    height: 0 !important;  
			    -webkit-appearance: none;  
			    background: transparent;  
			}
			.scrollView{
				height: 80upx;
				border-bottom: 1px solid #ddd;
				&:last-of-type{
					border: none;
				}
				&.active{
					color: #f00;
					background-color: #f6f6f6;
				}
			}
		}
	}
}
</style>
