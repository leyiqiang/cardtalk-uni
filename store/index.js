import Vue from 'vue'
import Vuex from 'vuex'
import cards from './modules/cards.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
	modules: {
		cards
	}
})
export default store