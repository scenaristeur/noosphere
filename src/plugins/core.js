
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$coreInit = async function(/*options = {}*/){
      // console.log(options)
      // store.commit('core/initRooms')
      let query = this.$route.query
      console.log("query", query)
      if (query.room != undefined){

        store.commit('core/setRoom', query.room)

      }
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
