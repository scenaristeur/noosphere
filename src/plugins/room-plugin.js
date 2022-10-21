const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    // console.log("store",store)

    // Vue.prototype.$openRoom2 = async function(options){
    //   let user = store.state.actor.user
    //   let ymap = store.state.y.yDoc.getMap(user.roomID)
    //   let ymapData = await ymap.get('editor_map')
    //   console.log('openRoom', options, user, ymap, ymapData)
    //   console.log('ymapData', ymapData)
    //
    //   store.commit('y/setYmap', ymap)
    //
    //
    //
    //   if( ymapData == undefined){
    //     ymapData = {}
    //     ymapData.blocks = []
    //     ymapData.blocks.push(store.state.editor.editorDataDefault)
    //     ymapData.blocks.unshift({
    //       "type" : "header",
    //       "data" : {
    //         "text" : user.roomID,
    //         "level" : 2
    //       }
    //     })
    //     ymapData.creator = user.clientID
    //     ymapData.action = "create"
    //     ymapData.roomID = user.roomID
    //   //  ymap.set('editor_map', ymapData)
    //     ymapData.source = 'creation'
    //   }else{
    //     console.log('not undefined')
    //     ymapData.source = 'exist'
    //     ymapData.roomID == undefined ? ymapData.roomID = user.roomID : ""
    //   }
    //   console.log('ymapReady', ymapData)
    //   store.commit('editor/setEditorData', ymapData)
    //   if(opts.router.history.current.name != 'editor'){
    //     opts.router.push('/editor')
    //   }
    //   Vue.prototype.$setYMapObserver()
    // }


    Vue.prototype.$openRoomOLD = async function(options){
      //  console.log('###{openRoom options}',options)
      //  console.log('Store editorData', store.state.editor.editorData)

      let user = store.state.actor.user
      let ymap = store.state.y.yDoc.getMap(user.roomID)

      //  console.log('ymap', ymap)
      store.commit('y/setYmap', ymap)
      store.commit('actor/updateRoomHistory', user.roomID)
      //  console.log("[openRoom]", user.roomID)

      Vue.prototype.$setYMapObserver()

      let editorData = await ymap.get('editor_map')
      //  console.log('{{ymap editorData}}',editorData)

      if (editorData == undefined){
        let tempData = null
        if (options != undefined && options.mode ==  'fork'){
          tempData = Object.assign({}, store.state.editor.editorData)
          //    console.log("##### data to fork", options )
          tempData.blocks.unshift({
            "type" : "paragraph",
            "data" : {
              "text" : '<small><i>forked from <a href="https://scenaristeur.github.io/noosphere?room='+options.parent+'" >"'+options.parent+'"</a></i></small>'
            }
          })
          tempData.parent = options.parent
          //  console.log('todo link parent to fork')
        }else{
          //  console.log('default', store.state.editor.editorDataDefault)
          // let temporaryData = Object.assign({}, store.state.editoe.editorDataDefault)
          // let fakeData = store.state.editor.editorDataDefault
          tempData = {}
          tempData.blocks = []
          tempData.blocks.push(store.state.editor.editorDataDefault)
          //  console.log( tempData)
        }



        tempData.blocks.unshift({
          "type" : "header",
          "data" : {
            "text" : user.roomID,
            "level" : 2
          }
        })


        //  console.log('ed', tempData)

        ymap.set('editor_map', tempData)
        editorData = Object.assign({}, tempData)
        // editorData = Object.assign({}, this.editorDataDefault)

      }
      else{
        if (options != undefined && options.mode ==  'fork'){
          alert ("room already exist : cancel / merge / append / use another name ?")
        }else{
          store.commit('editor/setEditorData', editorData)
        }

      }
      // store.commit('editor/setEditorData', editorData)
      // console.log(opts.router, Vue.$route)
      if(opts.router.history.current.name != 'editor'){
        opts.router.push('/editor')
      }
    }




  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
