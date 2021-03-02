import { request } from '../request.js'

export const home = (data) => request({
	url: '/platform/getTbCategory',
	data
})


export const category = (data) => request({
	url: 'platform/getTbCategory',
	data
})











