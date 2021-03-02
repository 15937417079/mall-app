<template>
	<view class="my-login-btn">
		<view v-for="(item,index) in btnArr" :key="index"
			class="loginBtn w-100 py-2 my-2 text-center f-size-16 font-color-fff"
				@tap="loginBtn(index)" 
				:class="index===0?isLoginBtn?'isLoginBtnActive':'login':'loginTwo jd-font-red'" >
			<!-- :class="isLoginBtnState(index)" -->
			{{ item.val }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnArr: [
					{ val: '登录' },
					{ val: '一键登录' },
				]
			}
		},
		props:{
			isLoginBtn: Boolean
		},
		computed:{
			isLoginBtnState(){
				return (index) =>{
					if (index === 0) {
						if (this.isLoginBtn) {
							return 'isLoginBtnActive'
						} else {
							return 'login'
						}
					} else {
						return 'loginTwo jd-font-red'
					}
				}
			}
		},
		methods:{
			loginBtn(index) {
				if (index === 0) {
					this.$emit('loginBtn')
				} else if(index === 1){
					this.$emit('oneClickLogin')
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.my-login-btn{
	.loginBtn{
		border-radius: 60upx;
		letter-spacing: 15upx;
	}
	.login{
		background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
	}
	.isLoginBtnActive {
		background-image: linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18);
	}
	.loginTwo{
		border: 1px solid #f00;
	}
}
</style>