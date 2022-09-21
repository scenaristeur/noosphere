import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import CorePlugin from './plugins/core-plugin';
Vue.use(CorePlugin, {store: store, router: router});

import ActorPlugin from './plugins/actor-plugin';
Vue.use(ActorPlugin, {store: store, router: router});

import EditorPlugin from './plugins/editor-plugin';
Vue.use(EditorPlugin, {store: store, router: router});

import YPlugin from './plugins/y-plugin';
Vue.use(YPlugin, {store: store, router: router});

import RoomPlugin from './plugins/room-plugin';
Vue.use(RoomPlugin, {store: store, router: router});

import Web3Plugin from './plugins/web3-plugin';
Vue.use(Web3Plugin, {store: store, router: router});

import GraphPlugin from './plugins/graph-plugin';
Vue.use(GraphPlugin, {store: store, router: router});

import SolidPlugin from './plugins/solid-plugin';
Vue.use(SolidPlugin, {store: store, router: router});

import UtilsPlugin from './plugins/utils-plugin';
Vue.use(UtilsPlugin, {store: store, router: router});

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootswatch/dist/vapor/bootstrap.min.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
