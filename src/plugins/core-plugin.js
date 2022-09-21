import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { v4 as uuidv4 } from 'uuid';

// sharing a single Awareness instance (per space) over several providers:

import {Awareness} from 'y-protocols/awareness'


const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$coreInit = async function(options){
      //    console.log('{init options}', options)
      let ydoc = await createYdoc()
      let awareness = await createAwareness(ydoc)

      // let user =
      let user = await getUser(awareness)
      user = await getRouterParameters(user, options.route)
      //  console.log(user)
      await createProviders(ydoc, awareness, user)
    }


    Vue.prototype.$userChanged = async function(){
      let user = store.state.core.user
      console.log('[user Changed]', user)
      localStorage.setItem('noosphere-user', JSON.stringify(user));
      store.state.core.awareness.setLocalStateField('user', user)
      //  console.log("[user changed]"/*, this.awareness*/, user)
      store.commit('core/setUserById', user)
    }



    Vue.prototype.$randomUser = async function(awareness){
      console.log("awareness",awareness)
      if (awareness == undefined){
        awareness = store.state.core.awareness
      }
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

    Vue.prototype.$removeUser = async function(){
      localStorage.removeItem('noosphere-user');
      store.commit('core/setUser', null)
    }

    Vue.prototype.$getEditorMap = async function(roomId){
      let ymapTemp = store.state.core.yDoc.getMap(roomId)
      let data = await ymapTemp.get('editor_map')
      console.log('{{editorDataTemp}}',data)
      return data
    }

    Vue.prototype.$openRoom = async function(options){
      console.log('###{openRoom options}',options)
      console.log('Store editorData', store.state.core.editorData)

      let user = store.state.core.user
      let ymap = store.state.core.yDoc.getMap(user.roomId)

      console.log('ymap', ymap)
      store.commit('core/setYmap', ymap)
      store.commit('core/updateRoomHistory', user.roomId)
      console.log("[openRoom]", user.roomId)

      setYMapObserver(ymap)

      let editorData = await ymap.get('editor_map')
      console.log('{{ymap editorData}}',editorData)

      if (editorData == undefined){
        let tempData = null
        if (options != undefined && options.mode ==  'fork'){
          tempData = Object.assign({}, store.state.core.editorData)
          console.log("##### data to fork", options )
          tempData.blocks.unshift({
            "type" : "paragraph",
            "data" : {
              "text" : '<small><i>forked from <a href="https://scenaristeur.github.io/noosphere?room='+options.parent+'" >"'+options.parent+'"</a></i></small>'
            }
          })
          tempData.parent = options.parent
          console.log('todo link parent to fork')
        }else{
          console.log('default', store.state.core.editorDataDefault)
          let temporaryData = Object.assign({}, store.state.core.editorDataDefault)
          let fakeData = store.state.core.editorDataDefault
          tempData = {}
          tempData.blocks = []
          tempData.blocks.push(store.state.core.editorDataDefault)
          console.log(temporaryData, fakeData, tempData)
        }



        tempData.blocks.unshift({
          "type" : "header",
          "data" : {
            "text" : user.roomId,
            "level" : 2
          }
        })


        console.log('ed', tempData)

        ymap.set('editor_map', tempData)
        editorData = Object.assign({}, tempData)
        // editorData = Object.assign({}, this.editorDataDefault)

      }
      else{
        if (options != undefined && options.mode ==  'fork'){
          alert ("room already exist : cancel / merge / append / use another name ?")
        }else{
          store.commit('core/setEditorData', editorData)
        }

      }
      // store.commit('core/setEditorData', editorData)
      // console.log(opts.router, Vue.$route)
      if(opts.router.history.current.name != 'editor'){
        opts.router.push('/editor')
      }
    }

    Vue.prototype.$saveEditor = async function(data){

      console.log('saveEditor', data)
      data.clientID = store.state.core.user.clientID
      // const _editorMap = this.ymap.get('editor_map')
      // _editorMap.set('data', data)
      store.state.core.yMap.set('editor_map', data)
      //this.$forceUpdate()
      //},
    }

    Vue.prototype.$loadCid = async function(data){
      console.log(data)
      let user = store.state.core.user
      user.roomId = data.roomId
      let editorData = data.content
      store.commit('core/setEditorData', editorData)
      store.commit('core/setUser', user)
      Vue.prototype.$openRoom()
    }

    Vue.prototype.$solidRoomList = async function(){
      const roomList = await (
        await fetch(this.pod_url)
      ).text();
      console.log('{roomList',roomList)
    }


    ////////////////

    async function createYdoc(){
      let ydoc = new Y.Doc()
      store.commit('core/setYdoc', ydoc)
      //  console.log("{createYdoc}", ydoc)
      // ydoc.on('beforeTransaction', tr => {
      //   console.log('beforeTransaction',tr, tr.origin)
      // })
      // ydoc.on('beforeObserverCalls', tr => {
      //   console.log('beforeObserverCalls',tr, tr.origin)
      // })
      // ydoc.on('afterTransaction', tr => {
      //   console.log('afterTransaction',tr, tr.origin)
      // })
      // ydoc.on('update', (update, origin, tr) => {
      //   console.log('update',tr, tr.origin)
      // })
      return ydoc
    }

    async function createAwareness(ydoc){
      let awareness = new Awareness(ydoc)
      store.commit('core/setAwareness', awareness)
      //  console.log("{createAwareness}")
      awareness.on('change', ()/*changes*/ => {
        awareness.getStates().forEach(state => {
          // console.log(state)
          if (state.user) {
            //  console.log('[state.user]',state.user)
            store.commit('core/setUserById', state.user)
          }
        })
        store.commit('core/setUsersUpdateDate', Date.now())
      })
      return awareness
    }

    async function createProviders(ydoc, awareness, user){
      //  console.log("{createProviders}")
      // this allows you to instantly get the (cached) documents data

      // Sync clients with the y-webrtc provider.
      // let webrtcProvider =

      // console.log("[providers]", webrtcProvider, websocketProvider)
      let indexeddbProvider = new IndexeddbPersistence('noosphere-demo', ydoc)

      indexeddbProvider.on('synced', async () => {
        //  let syncedData = await indexeddbProvider.whenSynced
        //  console.log('[indexeddbProvider] loaded data from indexed db', syncedData)

        new WebrtcProvider('noosphere-demo', ydoc, {awareness,
          signaling: [
            "wss://y-webrtc-signaling-eu.herokuapp.com",
            "wss://y-webrtc-signaling-us.herokuapp.com",
            "wss://signaling.yjs.dev"
          ]})

          // Sync clients with the y-websocket provider
          // let websocketProvider =
          new WebsocketProvider('wss://demos.yjs.dev', 'noosphere-demo', ydoc, {awareness })

          await end(user)
        })



        // .then(async function(data){
        //   console.log('[indexeddbProvider] loaded data from indexed db', data)
        //   //  Vue.prototype.$openRoom()
        //   // console.log("should open room")
        //   console.log("user",user)
        //   await end(user)
        // })
      }


      async function getRouterParameters(user, route){
        //  console.log("{getRouterParameters}",opts.router, route)

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
      async function getUser(awareness){
        //  console.log("awareness",awareness)
        let user = JSON.parse(localStorage.getItem('noosphere-user'))

        if (user == undefined || user == null){
          //console.log("awareness",awareness)

          user = await Vue.prototype.$randomUser(awareness)

          opts.router.push('/profile')
        }
        console.log("{getUser}", user)
        store.commit('core/setUser', user)
        return user
      }


      async function end(user){
        //  console.log(user.isSharing)
        if(user.isSharing == undefined && user.roomId == undefined){
          user.roomId = uuidv4()
        }
        store.commit('core/setUser', user)
        //  Vue.prototype.$userChanged()
        //  console.log('{set local storage user, send awareness, open room}', user)
        if(user.isSharing == undefined ){
          Vue.prototype.$openRoom()
        }

      }

      async function setYMapObserver(ymap){
        // see https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
        let user = store.state.core.user


        ymap.observe((event, tr) => {
          console.log(tr, tr.origin)
        })
        // ymap.observeDeep((events, tr) => {
        //   tr.origin
        // })


        ymap.observeDeep((events,tr) => {
          console.log(tr, tr.origin)
          events.forEach(event => {
            // calls++
            // console.log('calls', calls)
            // @ts-ignore
            // console.log(event.keysChanged.has('deepmap'))
            // console.log(event.path.length === 1)
            // console.log(event.path[0] === 'map')
            console.log('[event]',event)
            let editor_map_changed = event.keysChanged.has('editor_map')
            //console.log('[editor_map_changed]', editor_map_changed)
            // @ts-ignore
            // let dmapid = event.target.get('deepmap')._item.id
            // console.log(dmapid)

            // console.log("nodes",event.target.get('nodes').toJSON())
            // this.nodes = event.target.get('nodes').toJSON()
            // if (event.keysChanged.has('editor_map')){
            // yService.log('editor_map changed')
            //  let editorData = this.ymap.get('editor_map')



            if (editor_map_changed == true ){
            console.log('{ymap}',ymap)
              //console.log(editorData)
              let editorData = ymap.get('editor_map')
              if (editorData.clientID != user.clientID){
                //this.editorData =  editorData//.toJSON()
                store.commit('core/setEditorData', editorData)
                console.log("[update editorData]", editorData)

              }
              // else{
              //   console.log("[same clientID]")
              // }

            }
            //  yService.log(this.editorData)
            //}
            // this.populateEditor(this.editorData)
            // }
          })
          //this.$forceUpdate();
          //var url = location.href;               //Save down the URL without hash.
          //location.href = "#ymap_div";                 //Go to the target element.
          //history.replaceState(null,null,url);

        })
      }

    }
  }

  // Auto-install
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }

  export default plugin
