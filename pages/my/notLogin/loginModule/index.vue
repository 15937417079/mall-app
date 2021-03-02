<template>
		<!-- 登录模块 S -->
		<view class="p-7 b-sizing">
			<login-input :userInput.sync="userInputInfo"></login-input>
			<login-btn @loginBtn="loginBtn" :isLoginBtn="isLoginBtn"></login-btn>
			<register></register>
		</view>
		<!-- 登录模块 E -->
</template>

<script>
	import { M_LOGINSTATUS } from '@/store/mutation-types.js'
	import loginInput from './loginInput.vue'
	import loginBtn from './loginBtn.vue'
	import register from './register.vue'
	export default {
		data() {
			return {
				userInputInfo: {},
				isLoginBtn: false
			}
		},
		components:{
			loginInput,
			loginBtn,
			register,
		},
		watch:{
			userInputInfo:{
				deep: true,
				handler(el){
					if (this.checkPhoneNumber(el.phoneNumber) && el.password.length > 0) {
						this.isLoginBtn = true
					} else {
						this.isLoginBtn = false
					}
				}
			}
		},
		methods:{
			loginBtn(){
				let phone = this.userInputInfo.phoneNumber.trim()
				let password = this.userInputInfo.password.trim()
				if (!this.checkPhoneNumber(phone) || phone !== '15937417079' || password !== '1234'){
					uni.showToast({
						title: '请输入正确的手机号或验证码',
						icon: 'none'
					})
				} else {
					uni.showToast({
						title: '登陆成功'
					})
					this.$store.commit('M_LOGINSTATUS',true)
				}
			},
		}
	}
</script>

<style scoped>

</style>