export const request = (params) => {
	let url = params.url,
			method = params.method,
			header = {},
			data = params.data || {},
			token = '',
			hideLoading = params.hideLoading || false;
	if (method) {
		method = method.toUpperCase(); // 改为大写
		if (method == 'POST') {
			header = {
				'content-type': 'application/x-www-form-urlencoded'
			};
		} else {
			header = {
				'content-type': 'application/json'
			};
		}
	} else {
		method = 'GET';
		header = {
			'content-type': 'application/json'
		};
	}
	if (!hideLoading) {
		uni.showLoading({
			title: '加载中...'
		});
	}

	// 发起网络请求
	return new Promise((resolve, reject)=>{
		uni.request({
			url: url,
			method: method,
			header: header,
			data:data,
			success(res){
				if (res.statusCode && res.statusCode !== 200) {
					uni.showModal({
						content: ''+res.errMsg
					});
					return reject(res.errMsg)
				}
				resolve(res.data)
			},
			fail(err) {
				console.log('请求失败fail')
				uni.showModal({
					content: ''+err.errMsg
				});
				reject(err.data)
			},
			complete() {
				console.log('结束的回调函数（调用成功、失败都会执行）complete o j b k')
				if (!hideLoading) {
					uni.hideLoading();
				}
				return params.complete && reject(params.complete())
			}
		});
	})
}
