import Vue from 'vue'
import Vuex from 'vuex'
import core from './modules/core'
import network from './modules/network'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    core, network
  }
})
