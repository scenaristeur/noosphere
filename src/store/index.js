import Vue from 'vue'
import Vuex from 'vuex'
import core from './modules/core'
import actor from './modules/actor'
import editor from './modules/editor'
import y from './modules/y'
import web3 from './modules/web3'
import room from './modules/room'
import util from './modules/util'
import network from './modules/network'
import noosphere from './modules/noosphere'

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
    core, network, actor, editor, y, room, web3, util, noosphere
  }
})
