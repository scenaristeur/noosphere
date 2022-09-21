const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log("store",store)
    // Vue.prototype.$spinnerAdd = function(task){
    //   store.commit('core/spinnerAdd', task)
    // }
    Vue.prototype.$getUser = function(){
      //  console.log("awareness",awareness)
      let user = JSON.parse(localStorage.getItem('noosphere-user'))

      if (user == undefined || user == null){
        //console.log("awareness",awareness)
        // let awareness = store.state.y.awareness
        user = Vue.prototype.$randomUser()

        opts.router.push('/profile')
      }
      console.log("{getUser}", user)
      store.commit('actor/setUser', user)
      return user
    }

    Vue.prototype.$randomUser = function(){
      // console.log("awareness",awareness)
      // if (awareness == undefined){
      //   awareness = store.state.core.awareness
      // }
      let awareness = store.state.core.awareness
      let user = {
        name: 'User_'+Date.now(),
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        clientID: awareness.clientID,
        //roomId: uuidv4(),
        rooms: {}
      }
      //  store.commit('core/setUser', user)
      return user
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
