// import * as home from './modules/home.js'

// export default {
// 	home
// }

/* 复合写法 */
// export * from './modules/home.js'




// // 批量导出文件
// const requireApi = require.context(
// 	// 要查询 目录 的相对路径
// 	'./modules',
// 	// 是否查询子目录
// 	false,
// 	// 查询文件的一个后缀
// 	/.js$/
// )
// console.log(requireApi.keys())

// let module = {}
// requireApi.keys().forEach((key,index)=>{
// 	if(key === './index.js') return
// 	console.log(key);
// 	Object.assign(module,requireApi(key))
// })
// console.log(module)

// export default module


const requireApi = require.context(
'./modules',
false,
/.js$/
)
let modules = {}
requireApi.keys().map(item=>{
	Object.assign(modules,requireApi(item))
})
export default modules

