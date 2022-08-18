import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
// import { v4 as uuidv4 } from 'uuid';


const ydoc = new Y.Doc()
// let calls = 0
// this allows you to instantly get the (cached) documents data
const indexeddbProvider = new IndexeddbPersistence('count-demo', ydoc)
indexeddbProvider.whenSynced.then(() => {
  console.log('loaded data from indexed db')
})

// Sync clients with the y-webrtc provider.
const webrtcProvider = new WebrtcProvider('count-demo', ydoc)

// Sync clients with the y-websocket provider
const websocketProvider = new WebsocketProvider(
  'wss://demos.yjs.dev', 'count-demo', ydoc
)
console.log("providers", webrtcProvider, websocketProvider)


const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$coreInit = async function(/*options = {}*/){
      // console.log(options)
      // store.commit('core/initRooms')
      let query = this.$route.query
      console.log("query", query)
      if (query.room != undefined){
        let room = ydoc.getMap(query.room)
        store.commit('core/setRoom', room)

      }
    },

    Vue.prototype.$populateMap = async function(ymap){
      ymap.set('map', new Y.Map())
      const _map3 = ymap.get('map')
      _map3.set('deepmap', new Y.Map())
      ymap.set('stuff one', 'c2')
      _map3.set('stuff', 'c3')
      _map3.set('bip', 'boop')
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
