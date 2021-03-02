
<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					Vue.prototype.statusBar = e.statusBarHeight
					// #ifndef MP
					if (e.platform == 'android') {
						Vue.prototype.customBar = e.statusBarHeight + 50
					} else {
						Vue.prototype.customBar = e.statusBarHeight + 45
					}
					// #endif

					// #ifdef MP-WEIXIN
					let custom = wx.getMenuButtonBoundingClientRect()
					Vue.prototype.customBar = custom.bottom + custom.top - e.statusBarHeight
					// #endif

					// #ifdef MP-ALIPAY
					Vue.prototype.customBar = e.statusBarHeight + e.titleBarHeight
					// #endif
				}
			})
		},



		onShow: function() {
			console.log('App Show')
			
			console.log(undefined ?? 'undefined--');
			console.log(null ?? 'null--');
			console.log('' ?? 'string--');
			console.log(0 ?? 'number--');
			console.log(false ?? 'false--');
			console.log(NaN ?? 'nan--');
			
			/* var x = null
			var y = 5
			console.log(x ??= y) // => 5
			console.log(x = (x ?? y)) // => 5 */
			
			let obj = {
				a: 1,
				b: 2,
				c: {
					c1: 3
				}
			}
			
			console.log(obj?.c);
			console.log(obj.c.d?.e);

			// ------------------------------
			// es7 新增 装饰器
			/* function strong(...istest) {
				return target => {
					Object.assign(target.prototype, ...istest)
				}
			}
			let foo = {
				fooFun(){
					console.log('我是 foo** ')
				}
			}
			let bar = {
				barFun(){
					console.log('我是 bar ** ')
				}
			}
			@strong(foo,bar)
			class solider {
				constructor(arg) {
					// this.AK = this.constructor.AK
					// this.init()
					console.log(this)
					this.fooFun()
				}
				init() {
					return this
				}
			}
			
			let solide = new solider()
			// solide.fooFun()
			solide.barFun()
			*/
			// ------------------------------
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/* 每个页面公共css */



	/* 引入animate 动画库 */
	@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
	@import url("/comment/uni.css");
	/* 引入iconfont 图标 */
	@import url("//at.alicdn.com/t/font_2337067_wmned62des.css");
	// @import url("/static/css/fontUnicode.css");
	/* 引入 类库 */
	@import url("/comment/zcm.css");
	/* 公用 样式 */
	@import "/comment/comment.scss";
</style>
