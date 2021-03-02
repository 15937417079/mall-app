<template>
	<view class="other d-flex j-sb a-center font-999">
		<text v-for="(item,index) in otherBtnArr" :key="index">{{ item.val }}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				otherBtnArr: [
					{ val: '账号密码登录' },
					{ val: '手机快速注册' },
				]
			}
		}
	}
</script>

<style scoped>

</style>