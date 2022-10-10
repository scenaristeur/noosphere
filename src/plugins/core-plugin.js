import { User, Channel, Room/*, Graph*/ } from '@/noosphere'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    let localUser = null
    // console.log("store",store)



    Vue.prototype.$coreInit = async function(options){
      localUser = new User()
      localUser.d()


      Vue.prototype.$newChannel({id: 'noosphere-demo'})

      store.commit('noosphere/setLocalUser',localUser)


      console.log('{core options}', options)
      //Vue.prototype.$getPersistanceDB(options)
      // let route = await Vue.prototype.$getRouterParameters(options.route)
      // console.log(route)
    }


    Vue.prototype.$newChannel = async function(c){
      let channel = new Channel(c)
      store.commit('noosphere/setChannel',channel)
      channel.d()
      delete localUser.channels[channel.id]
      localUser.channels[channel.id] = {channel}
      localUser.d()
    }

    Vue.prototype.$openRoom = async function(id){
      console.log(id)
      let channel = store.state.noosphere.channel
      let room = localUser.rooms[id] || new Room({channel: channel, id:id, store: store})
      room.d()
    }


    Vue.prototype.$getRouterParameters = async function(route){
      console.log("{getRouterParameters}",opts.router, route)
      await opts.router.onReady(async (router)=>{
        console.log('[RRRRRouter]',router, route, route.name)
        // return {router: router, route: route}
      })

    }



    ///////////////////// OLD ///////////////////////////
    Vue.prototype.$coreInit1 = async function(options){
      console.log('{core options}', options)
      Vue.prototype.$createYDoc()
      //let yDoc = store.state.y.yDoc
      // let awareness = store.state.y.awareness
      // console.log('{core ydoc}', yDoc)
      // let user = await getUser(awareness)
      Vue.prototype.$getUser()
      Vue.prototype.$getRouterParameters(options.route)
      // user = await getRouterParameters(user, options.route)
      //  console.log(user)
      //await createProviders(ydoc, awareness, user)
      //  Vue.prototype.$createProvider()
      Vue.prototype.$connect('core')


      Vue.prototype.$ready()

    }

    Vue.prototype.$getRouterParameters = async function( route){
      console.log("{getRouterParameters}",opts.router, route)
      let user = store.state.actor.user
      await opts.router.onReady(async (router)=>{
        console.log('[RRRRRouter]',router)
        if(router != undefined && router.name == "share"){
          console.log(router.name)
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
      console.log(user)
      return user


    }


    Vue.prototype.$ready = function(){
      let user = store.state.actor.user
      //  console.log(user.isSharing)
      if(user.isSharing == undefined && user.roomId == undefined){
        user.roomId = Vue.prototype.$random()
      }
      store.commit('actor/setUser', user)
      //  Vue.prototype.$userChanged()
      console.log('{set local storage user, send awareness, open room}', user)
      if(user.isSharing == undefined ){
        Vue.prototype.$connect('core')
      }

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
