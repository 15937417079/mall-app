<template>
	<view class="login-input w-100">
		<view class="inputBox w-100 py-2 d-flex j-sb"
			:class="[index===1?'m-t-4':'']"
			v-for="(item,index) in inputArr" :key="index">
			<input type="text" 
			 :placeholder="item.pla" 
			 maxlength="11"
				v-model="item.val"/>
			<view class="getVerCode d-flex j-center font-999"
				v-if="index==1" >获取验证码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputArr: [
					{ pla: '请输入手机号', val: '' },
					{ pla: '请输入收到的验证码', val: '' },
				],
			}
		},
		computed:{
			userInput(){
				return index =>{
					if (index === 0) {
						return this.userInfo.phoneNumber
					} else {
						return this.userInfo.password
					}
				}
			}
		},
		watch:{
			inputArr: {
				handler(el){
					let userInfo = {
						phoneNumber: el[0].val,
						password: el[1].val
					}
					this.$emit('update:userInput',userInfo)
				},
				deep: true
			}
		}
	}
</script>

<style scoped lang="scss">
.login-input {
	.inputBox{
		border-bottom: 1px solid #ccc;
		input{
			color: #555;
		}
		.getVerCode{
			width: 200upx;
			border-left: 1px solid #ccc;
		}
	}
}
</style>