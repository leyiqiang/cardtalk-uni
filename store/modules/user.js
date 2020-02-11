const state = {
	userIsLogin: false,
	userInfo: {
	}
}

const getters = {
}

const mutations = {
  updateUserInfo(state, userInfo) {
    state.userInfo = userInfo;
	state.userIsLogin = true;
  },
}

const actions = {
	
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
