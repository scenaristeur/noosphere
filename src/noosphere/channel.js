import { Base } from "./base.js"
import { v4 as uuidv4 } from 'uuid';
import * as Y from 'yjs'
import { Awareness } from 'y-protocols/awareness'
import { IndexeddbPersistence } from 'y-indexeddb'
import { WebsocketProvider } from 'y-websocket'

export { Channel }

class Channel extends Base {
  constructor(options = {}) {
    super(options)
    this.id = options.id || uuidv4()
    this.group = 'channel'
    this.created = Date.now()
    this.rootDoc = new Y.Doc()
    this.flushIndex = 0
    this.createAwareness()
    this.createIndexedDbProvider()
    // this.store.commit('noosphere/setChannel',channel)
    this.d()
  }
  createAwareness(){
    let userHasClientId = this.user.clientID





    this.awareness = new Awareness(this.rootDoc)

    // console.log("must fusion user clientID or remove old", userHasClientId, this.awareness.clientID)
    //
    // // this.awareness.clientID = userHasClientId
    // //     awarenessProtocol.removeAwarenessStates(
    // //
    // // )
    //
    // let awarenessClientExists = this.awareness.meta.userHasClientId
    //
    // console.log('awarenessClientExists', awarenessClientExists)
    //
    // if(awarenessClientExists != undefined){
    //   this.awareness.clientID = userHasClientId
    //
    // }




    console.log('user clientID', userHasClientId)
    console.log("Awareness outdatedTime", this.awareness)
    this.awareness.on('change', changes => {
      console.log('changes', changes)
      let usersStates = {changes: changes, users: {}}
      this.awareness.getStates().forEach(state => {
        console.log('state',state)
        if (state.user ) {
          console.log('state.user', state.user)
          //  this.store.commit('actor/setUserById', state.user)
          usersStates.users[state.user.clientID] = state.user
          console.log(usersStates)
        }
      })
      console.log(usersStates)
      this.store.commit('actor/updateUsersStates', usersStates)
    })
  }

  createIndexedDbProvider(){

    this.indexeddbProvider = new IndexeddbPersistence(this.id, this.rootDoc)

    this.indexeddbProvider.on('synced', async (data) => {
      console.log('{$getPersistanceDB} synced', data)


      this.flush({doc: this.rootDoc, roomID: this.id, type: 'main'})

      // Vue.prototype.$getWebsocketProvider()
      //let user = await Vue.prototype.$getUser(options)
      //console.log('{user}', user)
      //Vue.prototype.$userChanged()

      // if(store.state.actor.user.roomId != undefined && opts.router.history.current.name != 'editor'){
      //   // console.log(opts.router.current.name)
      //   opts.router.push('/editor')
      // }

    })
  }


  flush(params){
    this.flushIndex++

    let awareness = this.awareness
    let doc = params.doc
    let roomID = params.roomID
    let type = params.type

    if(this.roomWsProvider != undefined) this.roomWsProvider.destroy()

    let wsProvider = new WebsocketProvider(
      // "ws://localhost:1234",
      //  "wss://noosphere.glitch.me/",       // basic y-websocket
      "wss://yjs-leveldb.glitch.me/", // with leveldb
      // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
      // 'wss://demos.yjs.dev',
      roomID , //'milkdown', // roomId
      doc, //this.rootDoc, // Doc
      {awareness: awareness, connect: true}
    );



    wsProvider.on('status', (payload) => {
      if (payload.status) {
        console.log("--------------------------\nwsProvider status",
        this.flushIndex,
        payload.status,
        roomID,
        params.type,
        awareness.clientID,
        "\n--------------------------")
        // this.status = payload.status;
        this.store.commit('y/setStatus', payload.status)
        this.status = payload.status

        // store.commit('actor/setUser', user)
        // Vue.prototype.$userChanged()
      }
    });

    if (type == 'main'){
      this.wsProvider = wsProvider
    }else{
      this.roomWsProvider = wsProvider
    }



  }



  // randomUser(){
  //   if ( this.name == undefined ) this.name =
  //   if ( this.color == undefined ) '#'+Math.floor(Math.random()*16777215).toString(16)
  //   // this.created = options.created || Date.now()
  //   //this.rooms = options.rooms || {}
  //
  // }

}
