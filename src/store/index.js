import Vue from 'vue'
import Vuex from 'vuex'
import core from './modules/core'
import actor from './modules/actor'
import editor from './modules/editor'
import y from './modules/y'
import room from './modules/room'
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
    core, network, actor, editor, y, room
  }
})
