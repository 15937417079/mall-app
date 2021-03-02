<template>
	<view class="position-fixed top-0 left-0 w-100 " v-if="$store.state.isPopUp" @tap.stop="closeHandle" style="background-color: rgba(0,0,0,.3); height: 100vh; ">
		<view class="pop-up position-fixed bottom-0 left-0 w-100 bd-r-t-3 px-3 p-t-3 bg-fff b-sizing z-index-9" ref="popUpRef"
		 :animation="animationData" @tap.stop>
			<view class="close iconfont iconguanbi position-abs f-size-12" @tap="closeHandle"></view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import {
		M_ISPOPUP
	} from '@/store/mutation-types.js'
	export default {
		data() {
			return {
				animationData: {},
				duration: 1
			}
		},
		created() {
			this.animation = uni.createAnimation()
		},
		watch: {
			'$store.state.isPopUp'(el) {
				if (el) {
					this.duration = 0
				} else {
					this.duration = '100vh'
				}
			},
			duration(el) {
				this.animate(el)
			}
		},
		methods: {
			closeHandle() {
				this.$store.commit('M_ISPOPUP', false)
			},
			animate(distance) {
				this.animation.translateY(distance).step({
					duration: 240
				})
				this.animationData = this.animation.export()
			}
		}
	}
</script>

<style scoped lang="scss">
	.pop-up {
		transform: translateY(100vh);
	}

	.close {
		top: 50upx;
		right: 50upx;
	}
</style>
