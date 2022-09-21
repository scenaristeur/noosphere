// https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts

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


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
