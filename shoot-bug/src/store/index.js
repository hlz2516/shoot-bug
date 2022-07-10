/**
 * 项目前期暂时不引入vuex，采用简单的状态管理
 * 详情看https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8
 */
import Vue from 'vue';
import Vuex from 'vuex'
import showLoginModal from './showLoginModal'//引入封装好的模态框展示文件

Vue.use(Vuex)
export default new Vuex.store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    showLoginModal
  }
})
