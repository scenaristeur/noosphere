
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$coreInit = async function(/*options = {}*/){

      if (this.$route.query!= undefined){
        console.log("this.$route.query", this.$route.query)
        store.commit('core/setQuery', this.$route.query)

      }
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
