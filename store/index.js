import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './modules/mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isAdsense: true,
		loginStatus: false,
		isPopUp: false
	},
	mutations,
	actions: {}
})