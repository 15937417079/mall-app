import * as types from '../mutation-types.js'
export default {
	[types.M_ISADSENSE](state,params){
		state.isAdsense = params
	},
	[types.M_LOGINSTATUS](state,params){
		state.loginStatus = params
	},
	[types.M_ISPOPUP](state, param) {
		state.isPopUp = param
	}
}