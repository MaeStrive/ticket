/*
 * @Author: 大叔阿哲 2033244875@qq.com
 * @Date: 2024-03-19 17:12:46
 * @LastEditors: 大叔阿哲 2033244875@qq.com
 * @LastEditTime: 2024-03-30 12:14:07
 * @FilePath: \ticket-vue\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
