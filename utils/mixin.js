export default {
	data(){
		return {
			mixin_showGoTop: true,  // 显示隐藏 回到顶部
			Mixin_isShowAdsense: true,  // 显示 隐藏 顶部 广告
			
		}
	},
	methods: {
		M_diffTime(targetTime) { // 计算时间差
			function diffSeconde(time) {
				let targetTimeArr = time.split(':')
				return +targetTimeArr[0] * 60 * 60 + +targetTimeArr[1] * 60 + +targetTimeArr[2]
			}
			let targetSeconds = diffSeconde(targetTime)
			let currentTime = diffSeconde(this.getCurrentTime())
			const hoursSeconds = 24 * 60 * 60
			let resultSeconds = targetSeconds - currentTime < 0 ? targetSeconds + hoursSeconds - currentTime : targetSeconds - currentTime
			return this.formatTime(resultSeconds)
		},
		firmat(count) { // 补零
			return count <= 9 ? '0' + count : count
		},
		getCurrentTime() { // 获取当前时间 h:m:s
			let currentTime = new Date()
			let h = currentTime.getHours(),
				m = currentTime.getMinutes(),
				s = currentTime.getSeconds();
			return `${this.firmat(h)}:${this.firmat(m)}:${this.firmat(s)}`
		},
		// 格式化时间 h:m:s
		formatTime(seconds) {
			let h = seconds / 60 / 60 | 0,
				m = seconds / 60 % 60 | 0,
				s = seconds % 60;
				return [this.firmat(h),this.firmat(m),this.firmat(s)]
		},
		formatCount(count){
			if (!count) return
			return (''+count).slice(0,-4)+'.'+(''+count).slice(-4,-3)
		},
		randomNumber(count){ // 随机数
			return Math.ceil(Math.random() * count)
		},
		ArrReset(arr){ // 重新 随机排序 数组
			return arr.sort(_=>{
				return .5 - Math.random()
			})
		},
		checkPhoneNumber(val){
			return /^1[2-9]\d{9}$/.test(val)
		},
		scrollFun(ev) {
			if (ev.scrollTop > 20) {
				this.Mixin_isShowAdsense = false
			} else {
				this.Mixin_isShowAdsense = true
			}
			if (ev.scrollTop > 500){
				this.mixin_showGoTop = true
			} else {
				this.mixin_showGoTop = false
			}
		}
	}
}
