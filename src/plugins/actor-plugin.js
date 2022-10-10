const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    // console.log("store",store)

    Vue.prototype.$getUser = async function(options){
      //  console.log("awareness",awareness)
      let localuser = localStorage.getItem('noosphere-user')
      //  console.log('{localuser}',localuser)
      let user = JSON.parse(localuser)

      if (user == undefined || user == null){
        //console.log("awareness",awareness)
        // let awareness = store.state.y.awareness
        user = Vue.prototype.$randomUser()

        //opts.router.push('/profile')
      }
      //  console.log("{getUser}", user)


      await opts.router.onReady(async (router)=>{
        console.log('[RRRRRouter]',router, options.route, options.route.name)
        let roomQuery = options.route.query.room
        console.log('[roomQuery]',roomQuery)
        if (roomQuery != undefined){
          user.roomId = roomQuery
        }
        // return {router: router, route: route}
      })




      store.commit('actor/setUser', user)
      console.log('[user]', user)
      return user
    }

    Vue.prototype.$randomUser = function(){
      // console.log("awareness",awareness)
      // if (awareness == undefined){
      //   awareness = store.state.y.awareness
      // }
      let awareness = store.state.y.awareness
      let user = {
        name: 'User_'+Date.now(),
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        clientID: awareness.clientID,
        //roomId: uuidv4(),
        rooms: {}
      }
      //  store.commit('actor/setUser', user)
      return user
    }

    Vue.prototype.$userChanged = async function(){
      let user = store.state.actor.user
      //  console.log('[user Changed]', user)
      console.log('awareness',store.state.y.awareness.clientID)
      localStorage.setItem('noosphere-user', JSON.stringify(user));
      if (store.state.y.awareness != null){
        store.state.y.awareness.setLocalStateField('user', user)}
        //  console.log("[user changed]"/*, this.awareness*/, user)
        store.commit('actor/setUserById', user)
      }

      Vue.prototype.$removeUser = async function(){
        localStorage.removeItem('noosphere-user');
        store.commit('core/setUser', null)
      }

    }
  }

  // Auto-install
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }

  export default plugin
