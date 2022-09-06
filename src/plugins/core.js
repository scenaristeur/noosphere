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
      let user = JSON.parse(localStorage.getItem('noosphere-user'))
      console.log('{init options}', options)

      let ydoc = new Y.Doc()
      store.commit('core/setYdoc', ydoc)
      // this allows you to instantly get the (cached) documents data
      let indexeddbProvider = new IndexeddbPersistence('noosphere-demo', ydoc)
      indexeddbProvider.whenSynced.then((data) => {
        console.log('[indexeddbProvider] loaded data from indexed db', data)
        //  Vue.prototype.$openRoom()
        // console.log("should open room")
      })


      let awareness = new Awareness(ydoc)
      store.commit('core/setAwareness', awareness)

      if (user == undefined || user == null){
        user = await Vue.prototype.$randomUser()
      }else{
        //awareness.clientID = this.user.clientID
      }


      await opts.router.onReady(router=>{
        console.log('[RRRRRouter]',router)

        if(router != undefined && router.name == "share"){
          console.log(router.name)
          console.log(router.query)
          console.log(user)
          shareInit(user)
        }else{
          // if router is undefined we use route
          console.log(options.route.query)
          if(options.route.query.room!= undefined){
            user.roomId = options.route.query.room
          }
          console.log(user)
          // let   testok = false
          // if(testok == true){
          defaultInit(user)
          // }

        }
        if(user.rommId == undefined){
          user.rommId = uuidv4()
        }

        store.commit('core/setUser', user)
        Vue.prototype.$userChanged()

        awareness.on('change', ()/*changes*/ => {

          // Whenever somebody updates their awareness information,
          // we log all awareness information from all users.
          awareness.getStates().forEach(state => {
            console.log(state)
            if (state.user) {
              console.log('[state.user]',state.user)
              //console.log('[state.user]',state.user)
              // app.users[state.user.clientID]= state.user
              // store.state.core.users[state.user.clientID] = state.user
              store.commit('core/setUserById', state.user)
              //  store.commit('core/setUsersUpdateDate', Date.now())

              //strings.push(`<div style="color:${state.user.color};">• ${state.user.name}</div>`)
            }
          })
          store.commit('core/setUsersUpdateDate', Date.now())
          //console.log("[awareness]",Array.from(awareness.getStates().values()), changes)
          //console.log('[app users]',app.users)
          //  this.$forceUpdate();
        })



        // Sync clients with the y-webrtc provider.
        let webrtcProvider = new WebrtcProvider('noosphere-demo', ydoc, {awareness})

        // Sync clients with the y-websocket provider
        let websocketProvider = new WebsocketProvider('wss://demos.yjs.dev', 'noosphere-demo', ydoc, {awareness})
        console.log("[providers]", webrtcProvider, websocketProvider)

        // if (this.$route.query!= undefined){
        //   console.log("this.$route.query", this.$route.query)
        //   store.commit('core/setQuery', this.$route.query)
        //
        // }
        if(router.name != "share"){
          Vue.prototype.$openRoom()
        }




      })



    }


    Vue.prototype.$userChanged = async function(){
      let user = store.state.core.user
      console.log('[user Changed]', user)
      localStorage.setItem('noosphere-user', JSON.stringify(user));
      store.state.core.awareness.setLocalStateField('user', user)
      console.log("[user changed]"/*, this.awareness*/, user)
      store.commit('core/setUserById', user)
    }



    Vue.prototype.$randomUser = async function(/*options = {}*/){
      let user = {
        name: 'User_'+Date.now(),
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        clientID: store.state.core.awareness.clientID,
        roomId: '',
        rooms: {}
      }
      store.commit('core/setUser', user)
      Vue.prototype.$userChanged()
      return user
    }
    Vue.prototype.$openRoom = async function(){
      Vue.prototype.$userChanged()
      let user = store.state.core.user
      let ymap = store.state.core.yDoc.getMap(user.roomId)
      store.commit('core/setYmap', ymap)
      store.commit('core/updateRoomHistory', user.roomId)
      console.log("[openRoom]", user.roomId)
      //this.updateUser()

      let editorData = await ymap.get('editor_map')
      console.log(editorData)
      if (editorData != undefined){
        store.commit('core/setEditorData', editorData)
        //   console.log(editorData)
        //this.editorData = editorData //|| this.editorDataDefault//.toJSON()
        // //  console.log(this.editorData)
        // //  yService.log(this.editorData)
      }else{
        let defaultData = store.state.core.editorDataDefault
        defaultData.blocks.push(
          {
            "type" : "paragraph",
            "data" : {
              "text" : "The roomId of this room is "+user.roomId
            }
          }
        )
        ymap.set('editor_map', defaultData)
        // editorData = Object.assign({}, this.editorDataDefault)
        store.commit('core/setEditorData', defaultData)
      }
      // observe changes of the sum
      // let app = this

      // let calls = 0
      ymap.observeDeep(events => {
        events.forEach(event => {
          // calls++
          // console.log('calls', calls)
          // @ts-ignore
          // console.log(event.keysChanged.has('deepmap'))
          // console.log(event.path.length === 1)
          // console.log(event.path[0] === 'map')
          console.log('[event]',event)
          let editor_map_changed = event.keysChanged.has('editor_map')
          console.log('[editor_map_changed]', editor_map_changed)
          // @ts-ignore
          // let dmapid = event.target.get('deepmap')._item.id
          // console.log(dmapid)

          // console.log("nodes",event.target.get('nodes').toJSON())
          // this.nodes = event.target.get('nodes').toJSON()
          // if (event.keysChanged.has('editor_map')){
          // yService.log('editor_map changed')
          //  let editorData = this.ymap.get('editor_map')



          if (editor_map_changed == true ){
            //console.log(editorData)
            let editorData = ymap.get('editor_map')
            if (editorData.clientID != user.clientID){
              //this.editorData =  editorData//.toJSON()
              store.commit('core/setEditorData', editorData)
              console.log("[update editorData]", editorData)
            }else{
              console.log("[same clientID]")
            }

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
      opts.router.push('/editor')
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

    async function shareInit(user){
      console.log("{share}", user)
    }
    async function defaultInit(user){
      console.log("{default}", user)





      // user.roomId = opts.router.query.room || user.roomId || uuidv4()



    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
