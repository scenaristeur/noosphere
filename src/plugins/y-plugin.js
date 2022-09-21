// https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
import * as Y from 'yjs'
import {Awareness} from 'y-protocols/awareness'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    //  console.log("store",store)
    Vue.prototype.$createYDoc = function(){
      let ydoc = new Y.Doc()
      store.commit('y/setYdoc', ydoc)
      Vue.prototype.$createAwareness(ydoc)
      //  console.log("{createYdoc}", ydoc)
      ydoc.on('beforeTransaction', tr => {
        console.log('beforeTransaction',tr, tr.origin)
      })
      ydoc.on('beforeObserverCalls', tr => {
        console.log('beforeObserverCalls',tr, tr.origin)
      })
      ydoc.on('afterTransaction', tr => {
        console.log('afterTransaction',tr, tr.origin)
      })
      ydoc.on('update', (update, origin, tr) => {
        console.log('update',tr, tr.origin)
      })
      return ydoc

    }

    Vue.prototype.$createAwareness = function (ydoc){
      let awareness = new Awareness(ydoc)
      store.commit('y/setAwareness', awareness)
      awareness.on('change', ()/*changes*/ => {
        awareness.getStates().forEach(state => {
          console.log(state)
          if (state.user) {
             console.log('[state.user]',state.user)
            store.commit('actor/setUserById', state.user)
          }
        })
        store.commit('actor/setUsersUpdated', Date.now())
      })
      return awareness
    }
    Vue.prototype.$createProvider = function(){
      console.log("should create providers")
    }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
