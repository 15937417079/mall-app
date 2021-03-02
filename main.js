import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'

import mixins from '@/utils/mixin.js'
Vue.mixin(mixins)

import netword from '@/network/index.js'

Object.defineProperty(Vue.prototype, '$api',{
	get:()=>{
		return netword
	}
})

import divider from '@/components/comment/vDivider'
Vue.component('divider', divider)
import lTitleRContent from '@/components/l-title-r-content.vue'
Vue.component('l-title-r-content', lTitleRContent)
import summaryHeader from '@/components/summary-header.vue'
Vue.component('summary-header', summaryHeader)
import popUp from '@/components/popUp.vue'
Vue.component('pop-up', popUp)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
