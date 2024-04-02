/* eslint-disable */

import Vue from 'vue'
import VueX from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(VueX)
export default new VueX.Store({
  plugins: [createPersistedState()],
  state: {
    city: '洛阳',
    userName: '',
    userInfo: {
      username: '',
      id: '',
      age: '',
      sex: "",
      createTime: '',
      email: '',
    }
  },
  mutations: {
    setCity(state, val) {
      state.city = val
    },
    setUserName(state, val) {
      state.userName = val
    },
    setUserInfo(state, val) {
      state.userInfo = val
    },
  },
  actions: {
    setCity({commit}, val) {
      commit('setCity', val)
    },
    setUserInfo({commit}, val) {
      commit('setUserInfo', val)
    },
    getUserInfo({commit}) {
      commit('getUserInfo')
    },

  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    }
  }
})
