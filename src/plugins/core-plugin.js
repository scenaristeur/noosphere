

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log("store",store)
    Vue.prototype.$coreInit = async function(options){
      console.log('{core options}', options)
      Vue.prototype.$createYDoc()
      let yDoc = store.state.y.yDoc
      console.log('{core ydoc}', yDoc)




    }
    // Vue.prototype.$spinnerAdd = function(task){
    //   store.commit('core/spinnerAdd', task)
    // }
    // Vue.prototype.$spinnerRemove = function(task){
    //   store.commit('core/spinnerRemove', task)
    // }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
