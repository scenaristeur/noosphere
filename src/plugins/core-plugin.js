import { User, Channel, Room, /*Editor*//*, Graph*/ } from '@/noosphere'
  import { /*collaborative,*/collabServiceCtx } from '@milkdown/plugin-collab'


  const plugin = {
    install(Vue, opts = {}) {
      let store = opts.store
      let localUser = null
      let editorData = null
      // console.log("store",store)

      Vue.prototype.$coreInit = async function(options){
        // let route = await Vue.prototype.$getRouterParameters(options.route)
        // console.log("ROUTE", route)
        localUser = new User({store: store, route: options.route})
        let channelID = localUser.channelID || 'noosphere-demo'
        Vue.prototype.$newChannel({id: channelID, user: localUser})
        console.log('{core options}', options, opts.router)
        //Vue.prototype.$getPersistanceDB(options)

      }


      Vue.prototype.$newChannel = async function(c){
        c.store = store
      //  console.log('opts.router', opts.router.history.current.name, opts.router)


        await opts.router.onReady(async (router)=>{

          let channel = new Channel(c)
          localUser.addChannel(channel)
        //  localUser.d()
          console.log('[RRRRRouter]',router)
          // return {router: router, route: route}
          // return route.query

          if(router != undefined && router.name == 'share'){
            console.log('SHAREPAGE', router.query)
          }else{
            // console.log("pas share page", localUser)
            if (localUser.route.query.room != undefined) localUser.roomID = localUser.route.query.room
            if (localUser.roomID != null) Vue.prototype.$openRoom({id: localUser.roomID})
          }


        })






      }

      Vue.prototype.$openRoom = async function(params){
        let id = params.id
        console.log("{'openROOM params'}", params)
        params.content != undefined ? editorData = params.content : editorData = null


        //let channel = store.state.noosphere.channel


        let room = new Room(
          {id:id, channel: localUser.channel, store: store, history: []}
        )
        if(opts.router.history.current.name != 'editor'){
          opts.router.push('/editor')
        }
        // room.d()
        localUser.addRoom(room)

      }

      Vue.prototype.$connectMilkdown = async function(options){
        console.log(options)
      //  console.log("{EDITORDATA}", editorData)
        let editor = store.state.editor.editor
        let channel = store.state.noosphere.channel
      //  let user = store.state.noosphere.localUser
        let room = store.state.noosphere.room


        if(editor != null && room != null){
          let roomDoc = room.roomDoc
          let awareness = channel.awareness
        //  console.log(editor, channel, user, room, roomDoc, awareness)
          editor.action((ctx) => {
            const collabService = ctx.get(collabServiceCtx);

            collabService
            .disconnect()
            // bind doc and awareness
            .bindDoc(roomDoc)
            .setAwareness(awareness)
            // .connect();

            if(editorData != null){
              collabService.applyTemplate(editorData)
              editorData = null
            }

            // if (source.data != undefined){
            //   console.log(source.data)
            //   collabService.applyTemplate(source.data.result.content)
            //   store.commit('editor/setParent', source.data.result.parent)
            // }else{
            //   store.commit('editor/setParent', null)
            // }



            // connect yjs with milkdown
            collabService.connect();
          });

        //  console.log("{EDITOR}", editor, roomDoc.toJSON())
          // Vue.prototype.$spinnerRemove(roomID)
          //user.rooms[room.id] = {date: Date.now()}
          // awareness.setLocalStateField('user', user)
          // store.commit('noosphere/setLocalUser', user)
          // store.commit('actor/setRoomAddress', roomID)
          //Vue.prototype.$openRoom()
        }else{
          console.log('{something is null now}')
        }

      }


      // Vue.prototype.$getRouterParameters11 = async function(route){
      //   console.log("{getRouterParameters}",opts.router, route)
      //   await opts.router.onReady(async (router)=>{
      //     console.log('[RRRRRouter]',router, route, route.name)
      //     // return {router: router, route: route}
      //     return route.query
      //   })
      // }

      Vue.prototype.$removeUser = async function(){
        localStorage.removeItem('noosphere-user');
        store.commit('noosphere/setLocalUser', null)
      }


      Vue.prototype.$userChanged = async function(u){
        console.log('[userChanged]',u)
        localUser.updateProfile(u)
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

      Vue.prototype.$getRouterParameters1 = async function( route){
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
            route.query.room != undefined ? user.roomID = route.query.room : ''
          }


        })
        console.log(user)
        return user


      }


      Vue.prototype.$ready = function(){
        let user = store.state.actor.user
        //  console.log(user.isSharing)
        if(user.isSharing == undefined && user.roomID == undefined){
          user.roomID = Vue.prototype.$random()
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
