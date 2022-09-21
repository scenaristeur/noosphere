

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log("store",store)
    Vue.prototype.$coreInit = async function(options){
      console.log('{core options}', options)
      Vue.prototype.$createYDoc()
      //let yDoc = store.state.y.yDoc
      // let awareness = store.state.y.awareness
      // console.log('{core ydoc}', yDoc)
      // let user = await getUser(awareness)
      Vue.prototype.$getUser()
      Vue.prototype.getRouterParameters(options.route)
      // user = await getRouterParameters(user, options.route)
      //  console.log(user)
      //await createProviders(ydoc, awareness, user)
      Vue.prototype.$createProvider()


    }

    Vue.prototype.$getRouterParameters= async function( route){
      //  console.log("{getRouterParameters}",opts.router, route)
      let user = store.state.actor.user
      await opts.router.onReady(async (router)=>{
        //  console.log('[RRRRRouter]',router)
        if(router != undefined && router.name == "share"){
          //console.log(router.name)
          // let dataTemp = await Vue.prototype.$getEditorMap(router.query.title)
          // // //console.log(router.query)
          // // //console.log(user)
          // console.log('{dataTemp}', dataTemp)
          user.isSharing = router.query
        }else{
          // if router is undefined we use route
          //console.log(route.query)
          route.query.room != undefined ? user.roomId = route.query.room : ''
        }


      })
      //  console.log(user)
      return user


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
