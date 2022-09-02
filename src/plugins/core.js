import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { v4 as uuidv4 } from 'uuid';

// sharing a single Awareness instance (per space) over several providers:

import {Awareness} from 'y-protocols/awareness'


const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$coreInit = async function(/*options = {}*/){
      let user = JSON.parse(localStorage.getItem('noosphere-user'))

      let ydoc = new Y.Doc()
      // this allows you to instantly get the (cached) documents data
      this.indexeddbProvider = new IndexeddbPersistence('noosphere-demo', ydoc)
      this.indexeddbProvider.whenSynced.then((data) => {
        console.log('[indexeddbProvider] loaded data from indexed db', data)
        //this.openRoom()
      })


      let awareness = new Awareness(ydoc)
      store.commit('core/setAwareness', awareness)

      if (user == null){
        user = Vue.prototype.$randomUser()
      }else{
        //awareness.clientID = this.user.clientID
      }

      user.roomId = this.$route.query.room || user.roomId || uuidv4()

      store.commit('core/setUser', user)


      awareness.on('change', ()/*changes*/ => {

        // Whenever somebody updates their awareness information,
        // we log all awareness information from all users.
        awareness.getStates().forEach(state => {
          console.log(state)
          if (state.user) {
            //console.log('[state.user]',state.user)
            // app.users[state.user.clientID]= state.user

            store.commit('core/setUserById', state.user)

            //strings.push(`<div style="color:${state.user.color};">• ${state.user.name}</div>`)
          }
        })

        //console.log("[awareness]",Array.from(awareness.getStates().values()), changes)
        //console.log('[app users]',app.users)
        this.$forceUpdate();
      })



      // Sync clients with the y-webrtc provider.
      let webrtcProvider = new WebrtcProvider('noosphere-demo', ydoc, {awareness})

      // Sync clients with the y-websocket provider
      let websocketProvider = new WebsocketProvider('wss://demos.yjs.dev', 'noosphere-demo', ydoc, {awareness})
      console.log("[providers]", webrtcProvider, websocketProvider)
      //






      if (this.$route.query!= undefined){
        console.log("this.$route.query", this.$route.query)
        store.commit('core/setQuery', this.$route.query)

      }
    }
    Vue.prototype.$randomUser = async function(/*options = {}*/){
      let user = {
        name: 'User_'+Date.now(),
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        clientID: store.state.core.awareness.clientID,
        roomId: '',
        rooms: []
      }
      store.commit('core/setUser', user)
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
