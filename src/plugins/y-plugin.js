// https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
import * as Y from 'yjs'
import {Awareness} from 'y-protocols/awareness'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'

let channel = 'noosphere-demo'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
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

    Vue.prototype.$createYDoc = function(){
      let ydoc = new Y.Doc()
      store.commit('y/setYdoc', ydoc)
      Vue.prototype.$createAwareness(ydoc)
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
      //   console.log('ydoc update',update, origin, tr)
      // })
      return ydoc

    }

    Vue.prototype.$createAwareness = function (ydoc){
      let awareness = new Awareness(ydoc)
      store.commit('y/setAwareness', awareness)
      awareness.on('change', ()/*changes*/ => {
        awareness.getStates().forEach(state => {
          //  console.log(state)
          if (state.user) {
            //  console.log('[state.user]',state.user)
            store.commit('actor/setUserById', state.user)
          }
        })
        store.commit('actor/setUsersUpdated', Date.now())
      })
      return awareness
    }

    Vue.prototype.$createProvider = function(){
      //  console.log("create providers")
      // }
      let ydoc = store.state.y.yDoc
      let awareness = store.state.y.awareness
      //  let user = store.state.actor.user
      // async function createProviders(ydoc, awareness, user){
      //  console.log("{createProviders}")
      // this allows you to instantly get the (cached) documents data

      // Sync clients with the y-webrtc provider.
      // let webrtcProvider =

      // console.log("[providers]", webrtcProvider, websocketProvider)
      let indexeddbProvider = new IndexeddbPersistence(channel, ydoc)

      indexeddbProvider.on('synced', async () => {
        //  let syncedData = await indexeddbProvider.whenSynced
        //  console.log('[indexeddbProvider] loaded data from indexed db', syncedData)

        new WebrtcProvider(channel, ydoc, {awareness,
          signaling: [
            "wss://y-webrtc-signaling-eu.herokuapp.com",
            "wss://y-webrtc-signaling-us.herokuapp.com",
            "wss://signaling.yjs.dev"
          ]})

          // Sync clients with the y-websocket provider
          // let websocketProvider =
          new WebsocketProvider(["ws://localhost:1234",'wss://demos.yjs.dev'], channel, ydoc, {awareness })

          //  await end(user)
        })



        // .then(async function(data){
        //   console.log('[indexeddbProvider] loaded data from indexed db', data)
        //   //  Vue.prototype.$openRoom()
        //   // console.log("should open room")
        //   console.log("user",user)
        //   await end(user)
        // })
      }

      Vue.prototype.$setYMapObserver = async function(){
        // see https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
        let user = store.state.actor.user
        let ymap = store.state.y.yMap
        //  console.log('user', user)

        // ymap.observe((event, tr) => {
        //   console.log(tr, tr.origin)
        // })
        // ymap.observeDeep((events, tr) => {
        //   tr.origin
        // })


        ymap.observeDeep((events/*,tr*/) => {
          //  console.log(tr, tr.origin)
          events.forEach(event => {
            // calls++
            // console.log('calls', calls)
            // @ts-ignore
            // console.log(event.keysChanged.has('deepmap'))
            // console.log(event.path.length === 1)
            // console.log(event.path[0] === 'map')
            console.log('[YMAP event]',event)
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
              //  console.log('{ymap}',ymap)
              //console.log(editorData)
              let ymapData = ymap.get('editor_map')
              console.log(ymapData.clientID != user.clientID)
              //  if (editorData.clientID != user.clientID){
              //this.editorData =  editorData//.toJSON()
              if (ymapData.clientID != user.clientID){
              //  ymapData.source = 'ymapEvent'
                console.log('{ymap event}',ymapData)
                store.commit('editor/setEditorData', ymapData)
              }

              //  console.log("[update editorData]", editorData)

              //  }
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
