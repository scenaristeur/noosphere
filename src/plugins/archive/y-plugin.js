// https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
// import * as Y from 'yjs'
// import {Awareness} from 'y-protocols/awareness'
// import { WebrtcProvider } from 'y-webrtc'
// import { WebsocketProvider } from 'y-websocket'
// import { IndexeddbPersistence } from 'y-indexeddb'
// import { /*collaborative,*/collabServiceCtx } from '@milkdown/plugin-collaborative';
//
// let channel = 'noosphere-demo'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    // Vue.prototype.$getPersistanceDB = async function(options){
    //
    //   // Vue.prototype.$createYDoc()
    //   let ydoc = new Y.Doc()
    //   store.commit('y/setYdoc', ydoc)
    //   let awareness = Vue.prototype.$createAwareness(ydoc)
    //   console.log('{awareness}',awareness)
    //
    //   let indexeddbProvider = new IndexeddbPersistence(channel, ydoc)
    //
    //   indexeddbProvider.on('synced', async (data) => {
    //     console.log('{$getPersistanceDB} synced', data)
    //     // Vue.prototype.$getWebsocketProvider()
    //     let user = await Vue.prototype.$getUser(options)
    //     console.log('{user}', user)
    //     Vue.prototype.$userChanged()
    //
    //     if(store.state.actor.user.roomID != undefined && opts.router.history.current.name != 'editor'){
    //       // console.log(opts.router.current.name)
    //       opts.router.push('/editor')
    //     }
    //
    //   })
    //
    //
    //
    // }


    // Vue.prototype.$getWebsocketProvider = async function(){
    //   new WebrtcProvider(channel, ydoc, {awareness,
    //     signaling: [
    //       "wss://y-webrtc-signaling-eu.herokuapp.com",
    //       "wss://y-webrtc-signaling-us.herokuapp.com",
    //       "wss://signaling.yjs.dev"
    //     ]})
    //
    //     // Sync clients with the y-websocket provider
    //     // let websocketProvider =
    //     new WebsocketProvider(
    //       "wss://flame-long-base.glitch.me/",
    //       // 'wss://demos.yjs.dev',
    //       channel, ydoc, {awareness })
    // }



    //  console.log("store",store)

    //     Vue.prototype.$editorToYMapBlocks = function (blocks){
    //       let ymap = store.state.y.yMap
    //       console.log('{blocks}',blocks)
    //       // let user = store.state.actor.user
    //       let ymapData = ymap.get('editor_map')
    //       console.log(ymapData)
    // let temp = {}
    //       blocks.forEach((b) => {
    //         console.log(b.id, b)
    //         temp[b.id] = b
    //       });
    //
    //       if(ymapData == undefined){
    //         console.log(temp)
    //         ymap.set('editor_map',temp)
    //         console.log('{ymap populated}',ymap)
    //       }else{
    //         console.log('ymapdata is', ymapData)
    //       }
    //       // blocks.forEach((b) => {
    //       //   console.log(b)
    //       //   ymapData.set(b.id, b)
    //       // });
    //
    //
    //
    //     }


    // Vue.prototype.$propagateEvent = function (e){
    //   console.log(e)
    //   console.log(e.event.type, e.event.detail)
    //   let ymap = store.state.y.yMap
    //   let ymapData = ymap.get('editor_map')
    //   console.log('{ymap before}',ymapData)
    //   console.log('{blockid}', e.block.id, '{targetid}', e.event.detail.target.id)
    //
    //   switch (e.event.type) {
    //     case 'block-added':
    //     console.log('add')
    //     //ymapData.set('editor_map', ymapData)
    //     break;
    //     case 'block-removed':
    //     console.log('removed')
    //     break;
    //     case 'block-changed':
    //     console.log('changed')
    //     break;
    //     case 'block-moved':
    //     console.log('moved')
    //     break;
    //     default:
    //     console.log("unknown",e.type)
    //   }
    // }

    // Vue.prototype.$createYDoc1 = function(){
    //   let ydoc = new Y.Doc()
    //   // console.log("REVOIR LA CREATION DU YDOC !!! en double avec l'editeur")
    //   store.commit('y/setYdoc', ydoc)
    //   //  Vue.prototype.$createAwareness(ydoc)
    //   //  console.log("{createYdoc}", ydoc)
    //   // ydoc.on('beforeTransaction', tr => {
    //   //   console.log('beforeTransaction',tr, tr.origin)
    //   // })
    //   // ydoc.on('beforeObserverCalls', tr => {
    //   //   console.log('beforeObserverCalls',tr, tr.origin)
    //   // })
    //   // ydoc.on('afterTransaction', tr => {
    //   //   console.log('afterTransaction',tr, tr.origin)
    //   // })
    //   // ydoc.on('update', (update, origin, tr) => {
    //   //   console.log('ydoc update',update, origin, tr)
    //   // })
    //   return ydoc
    //
    // }

    // Vue.prototype.$createAwareness = function (ydoc){
    //   let awareness = new Awareness(ydoc)
    //   store.commit('y/setAwareness', awareness)
    //   let localUser = store.state.actor.user
    //   // user.clientID = awareness.clientID
    //   // store.commit('actor/setUser', user)
    //   //  let d = Date.now()
    //   awareness.on('change', ()/*changes*/ => {
    //     console.log('awareness changed')
    //     let users = store.state.actor.users
    //     // console.log("users",users)
    //     awareness.getStates().forEach(state => {
    //       console.log(state)
    //       if (state.user ) {
    //         //  console.log('[state.user]',d,'name:',state.user.name, 'room:',state.user.roomID, 'clientID:',state.user.clientID)
    //         // console.log('mustupdate')
    //         let user = users[state.user.id]
    //         // console.log(state.user,user)
    //
    //         // if (user == undefined || Object.entries(state.user).toString() === Object.entries(user).toString() == false){
    //         // if (user == undefined || Object.entries(state.user).toString() === Object.entries(user).toString() == false){
    //         if (user == undefined || state.user.id != localUser.id){
    //           store.commit('actor/setUserByID', state.user)
    //         }
    //
    //
    //       }
    //     })
    //     store.commit('actor/setUsersUpdated', Date.now())
    //   })
    //   return awareness
    // }


    Vue.prototype.$getEditorMap = async function(roomID){
      let rootDoc = store.state.y.yDoc
      console.log(rootDoc)
      let ymap = rootDoc.getMap()
      console.log(ymap)
      let roomDoc = ymap.get(roomID)
      console.log ('{roomDoc}',roomDoc)


    }


    // Vue.prototype.$roomToJson1 = function (roomID){
    //   console.log('{serialize}', roomID)
    //   let rootDoc = store.state.y.yDoc
    //   Vue.prototype.$spinnerAdd(roomID)
    //   let ymap = rootDoc.getMap()
    //   console.log('ymap', ymap)
    //   let roomDoc = ymap.get(roomID)
    //   console.log ('{roomDoc}',roomDoc, roomDoc.toJSON())
    //
    //   // let state = Y.encodeStateAsUpdate(roomDoc)
    //   // console.log(state)
    //   Vue.prototype.$spinnerRemove(roomID)
    //   // return state
    //   return roomDoc.toJSON()
    // }

    // Vue.prototype.$applyUpdate1 = async function(jsonCid){
    //   let roomID = store.state.actor.user.roomID
    //   console.log('{jsonCid}', jsonCid)
    //   let rootDoc = store.state.y.yDoc
    //   console.log(rootDoc)
    //   let ymap = rootDoc.getMap()
    //   console.log(ymap)
    //   let roomDoc = ymap.get(roomID)
    //
    //   if (roomDoc == undefined){
    //     roomDoc = new Y.Doc()
    //     //  roomDoc.getText().insert(0, 'some initial content')
    //     ymap.set(roomID, roomDoc)
    //   }
    //   console.log ('{roomDoc}', roomID, roomDoc)
    //
    //   //  await roomDoc.whenLoaded
    //   console.log('roomDoc loaded')
    //
    //   const state2 = Y.encodeStateAsUpdate(jsonCid)
    //   Y.applyUpdate(roomDoc, state2)
    //
    //   //Y.applyUpdate(roomDoc, state)
    //   // console.log('{JSON}', roomDoc.toJSON())
    //   //
    //   // ymap.set(roomID, roomDoc)
    //
    //   //  ymap.set(roomID, roomDoc)
    //   // let currentState1 = Y.encodeStateAsUpdate(roomDoc)
    //   // roomDoc.destroy()
    //   // const stateVector1 = Y.encodeStateVectorFromUpdate(state)
    //   // const diff1 = Y.diffUpdate(currentState1, stateVector1)
    //   // currentState1 = Y.mergeUpdates([currentState1, diff1])
    //   // Y.applyUpdate(roomDoc, currentState1)
    //   // console.log(currentState1, stateVector1, diff1, roomDoc )
    //
    //
    //
    //
    // }

    // Vue.prototype.$connect = async function(source){
    //   console.log('connect from ',source)
    //   let rootDoc = store.state.y.yDoc
    //   let awareness = store.state.y.awareness //Vue.prototype.$createAwareness(rootDoc)
    //   let user = store.state.actor.user
    //   let editor = store.state.editor.editor
    //   let roomID = user.roomID
    //   Vue.prototype.$spinnerAdd(roomID)
    //
    //   if(opts.router.history.current.name != 'editor'){
    //     opts.router.push('/editor')
    //   }
    //
    //   //  let uploads =
    //
    //   //  console.log("Web3 uploads",uploads)
    //
    //   console.log('awareness clientID', awareness.clientID)
    //   let ymap = rootDoc.getMap()
    //   console.log('ymap', ymap)
    //   let roomDoc = ymap.get(roomID)
    //   console.log ('{roomDoc}',roomDoc)
    //   if (roomDoc == undefined){
    //     // Client One
    //     roomDoc = new Y.Doc()
    //     //subDoc.getText().insert(0, 'some initial content')
    //     ymap.set(roomID, roomDoc)
    //   }
    //   // else{
    //   //
    //   // }
    //
    //
    //
    //
    //
    //
    //   // const wsProvider =
    //   let wsProvider = new WebsocketProvider(
    //     // "ws://localhost:1234",
    //     //  "wss://noosphere.glitch.me/",       // basic y-websocket
    //     "wss://yjs-leveldb.glitch.me/", // with leveldb
    //     // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
    //     // 'wss://demos.yjs.dev',
    //     roomID, //'milkdown', // roomID
    //     roomDoc, // Doc
    //     {awareness: awareness, connect: true}
    //   );
    //
    //   wsProvider.on('status', (payload) => {
    //     if (payload.status) {
    //       console.log("--------------------------\nwsProvider status", payload.status, "\n--------------------------")
    //       // this.status = payload.status;
    //       store.commit('y/setStatus', payload.status)
    //       user.status = payload.status
    //       store.commit('actor/setUser', user)
    //       Vue.prototype.$userChanged()
    //     }
    //   });
    //
    //
    //   console.log('{connect}',roomID, rootDoc, roomDoc)
    //
    //
    //
    //
    //
    //   // console.log (editor)
    //   if(editor != null){
    //     editor.action((ctx) => {
    //       const collabService = ctx.get(collabServiceCtx);
    //
    //       collabService
    //       .disconnect()
    //       // bind doc and awareness
    //       .bindDoc(roomDoc)
    //       .setAwareness(awareness)
    //
    //       if (source.data != undefined){
    //         console.log(source.data)
    //         collabService.applyTemplate(source.data.result.content)
    //         store.commit('editor/setParent', source.data.result.parent)
    //       }else{
    //         store.commit('editor/setParent', null)
    //       }
    //
    //
    //
    //       // connect yjs with milkdown
    //       collabService.connect();
    //     });
    //
    //     console.log("{EDITOR}", editor, roomDoc.toJSON())
    //     Vue.prototype.$spinnerRemove(roomID)
    //     user.rooms[roomID] = {date: Date.now()}
    //     awareness.setLocalStateField('user', user)
    //     store.commit('actor/setUser', user)
    //     store.commit('actor/setRoomAddress', roomID)
    //   }else{
    //     console.log('{editor is null now}')
    //   }
    //
    //   // user.roomID = roomID
    // }





    // Vue.prototype.$createProviderOLD = function(){
    //   //  console.log("create providers")
    //   // }
    //   let ydoc = store.state.y.yDoc
    //   let awareness = store.state.y.awareness
    //   //  let user = store.state.actor.user
    //   // async function createProviders(ydoc, awareness, user){
    //   //  console.log("{createProviders}")
    //   // this allows you to instantly get the (cached) documents data
    //
    //   // Sync clients with the y-webrtc provider.
    //   // let webrtcProvider =
    //
    //   // console.log("[providers]", webrtcProvider, websocketProvider)
    //   let indexeddbProvider = new IndexeddbPersistence(channel, ydoc)
    //
    //   indexeddbProvider.on('synced', async () => {
    //     //  let syncedData = await indexeddbProvider.whenSynced
    //     //  console.log('[indexeddbProvider] loaded data from indexed db', syncedData)
    //
    //     new WebrtcProvider(channel, ydoc, {awareness,
    //       signaling: [
    //         "wss://y-webrtc-signaling-eu.herokuapp.com",
    //         "wss://y-webrtc-signaling-us.herokuapp.com",
    //         "wss://signaling.yjs.dev"
    //       ]})
    //
    //       // Sync clients with the y-websocket provider
    //       // let websocketProvider =
    //       new WebsocketProvider(
    //         "wss://flame-long-base.glitch.me/",
    //         // 'wss://demos.yjs.dev',
    //         channel, ydoc, {awareness })
    //
    //         //  await end(user)
    //       })
    //
    //
    //
    //       // .then(async function(data){
    //       //   console.log('[indexeddbProvider] loaded data from indexed db', data)
    //       //   //  Vue.prototype.$openRoom()
    //       //   // console.log("should open room")
    //       //   console.log("user",user)
    //       //   await end(user)
    //       // })
    //     }

        // Vue.prototype.$setYMapObserver = async function(){
        //   // see https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
        //   let user = store.state.actor.user
        //   let ymap = store.state.y.yMap
        //   //  console.log('user', user)
        //
        //   // ymap.observe((event, tr) => {
        //   //   console.log(tr, tr.origin)
        //   // })
        //   // ymap.observeDeep((events, tr) => {
        //   //   tr.origin
        //   // })
        //
        //
        //   ymap.observeDeep((events/*,tr*/) => {
        //     //  console.log(tr, tr.origin)
        //     events.forEach(event => {
        //       // calls++
        //       // console.log('calls', calls)
        //       // @ts-ignore
        //       // console.log(event.keysChanged.has('deepmap'))
        //       // console.log(event.path.length === 1)
        //       // console.log(event.path[0] === 'map')
        //       console.log('[YMAP event]',event)
        //       let editor_map_changed = event.keysChanged.has('editor_map')
        //       //console.log('[editor_map_changed]', editor_map_changed)
        //       // @ts-ignore
        //       // let dmapid = event.target.get('deepmap')._item.id
        //       // console.log(dmapid)
        //
        //       // console.log("nodes",event.target.get('nodes').toJSON())
        //       // this.nodes = event.target.get('nodes').toJSON()
        //       // if (event.keysChanged.has('editor_map')){
        //       // yService.log('editor_map changed')
        //       //  let editorData = this.ymap.get('editor_map')
        //
        //
        //
        //       if (editor_map_changed == true ){
        //         //  console.log('{ymap}',ymap)
        //         //console.log(editorData)
        //         let ymapData = ymap.get('editor_map')
        //         console.log(ymapData.clientID != user.clientID)
        //         //  if (editorData.clientID != user.clientID){
        //         //this.editorData =  editorData//.toJSON()
        //         if (ymapData.clientID != user.clientID){
        //         //  ymapData.source = 'ymapEvent'
        //           console.log('{ymap event}',ymapData)
        //           store.commit('editor/setEditorData', ymapData)
        //         }
        //
        //         //  console.log("[update editorData]", editorData)
        //
        //         //  }
        //         // else{
        //         //   console.log("[same clientID]")
        //         // }
        //
        //       }
        //       //  yService.log(this.editorData)
        //       //}
        //       // this.populateEditor(this.editorData)
        //       // }
        //     })
        //     //this.$forceUpdate();
        //     //var url = location.href;               //Save down the URL without hash.
        //     //location.href = "#ymap_div";                 //Go to the target element.
        //     //history.replaceState(null,null,url);
        //
        //   })
        // }


      }
    }

    // Auto-install
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(plugin)
    }

    export default plugin
