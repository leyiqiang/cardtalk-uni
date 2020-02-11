import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.serverUrl = 'http://localhost:3000'
// Vue.prototype.serverUrl = 'localhost:3000'

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
