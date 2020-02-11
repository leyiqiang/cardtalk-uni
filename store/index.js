import Vue from 'vue'
import Vuex from 'vuex'
import cards from './modules/cards.js'
import user from './modules/user.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
	modules: {
		cards,
		user
	}
})
export default store