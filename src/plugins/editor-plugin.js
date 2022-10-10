

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log("store",store)
    // Vue.prototype.$spinnerAdd = function(task){
    //   store.commit('core/spinnerAdd', task)
    // }
    // Vue.prototype.$spinnerRemove = function(task){
    //   store.commit('core/spinnerRemove', task)
    // }
    // Vue.prototype.$saveEditor = async function(data){
    //   // store.commit('editor/setEditorData', data)
    //   console.log('saveEditor', data)
    //   data.clientID = store.state.actor.user.clientID
    //   // const _editorMap = this.ymap.get('editor_map')
    //   // _editorMap.set('data', data)
    //   store.state.y.yMap.set('editor_map', data)
    //   //this.$forceUpdate()
    //   //},
    // }

    Vue.prototype.$serialize = function (roomId){
      console.log('{serialize}', roomId)
      let rootDoc = store.state.y.yDoc
      Vue.prototype.$spinnerAdd(roomId)
      let ymap = rootDoc.getMap()
      console.log('ymap', ymap)
      let roomDoc = ymap.get(roomId)
      console.log ('{roomDoc}',roomDoc, roomDoc.toJSON())
      Vue.prototype.$spinnerRemove(roomId)
      return roomDoc.toJSON()
    }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
