import * as Y from 'yjs'

import { v4 as uuidv4 } from 'uuid';

// sharing a single Awareness instance (per space) over several providers:




const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    // Vue.prototype.$coreInit = async function(options){
    //   //    console.log('{init options}', options)
    //   let ydoc = await createYdoc()
    //   let awareness = await createAwareness(ydoc)
    //
    //   // let user =
    //   let user = await getUser(awareness)
    //   user = await getRouterParameters(user, options.route)
    //   //  console.log(user)
    //   await createProviders(ydoc, awareness, user)
    // }






    Vue.prototype.$randomUser = async function(awareness){
      console.log("awareness",awareness)
      if (awareness == undefined){
        awareness = store.state.core.awareness
      }
      let user = {
        name: 'User_'+Date.now(),
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        clientID: awareness.clientID,
        //roomID: uuidv4(),
        rooms: {}
      }
      //  store.commit('core/setUser', user)
      return user
    }



    Vue.prototype.$getEditorMap = async function(roomID){
      let ymapTemp = store.state.core.yDoc.getMap(roomID)
      let data = await ymapTemp.get('editor_map')
      console.log('{{editorDataTemp}}',data)
      return data
    }



    Vue.prototype.$solidRoomList = async function(){
      const roomList = await (
        await fetch(this.pod_url)
      ).text();
      console.log('{roomList',roomList)
    }


    ////////////////
















    }
  }

  // Auto-install
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }

  export default plugin
