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
    //  this.log()
  }
  createAwareness(){
    // let userHasClientID = this.user.clientID

    this.awareness = new Awareness(this.rootDoc)

    // console.log("must fusion user clientID or remove old", userHasClientID, this.awareness.clientID)
    //
    // // this.awareness.clientID = userHasClientID
    // //     awarenessProtocol.removeAwarenessStates(
    // //
    // // )
    //
    // let awarenessClientExists = this.awareness.meta.userHasClientID
    //
    // console.log('awarenessClientExists', awarenessClientExists)
    //
    // if(awarenessClientExists != undefined){
    //   this.awareness.clientID = userHasClientID
    //
    // }



    // ymap.set('key', 'value') // => Property "key" was added. Initial value: "value".
    // ymap.set('key', 'new') // => Property "key" was updated. New value: "new". Previous value: "value".
    // ymap.delete('key') // => Property "key" was deleted. New value: undefined. Previous Value: "new".




    // console.log('user local clientID', userHasClientID, this.user.name)
    // console.log("Awareness outdatedTime clientID", this.awareness.clientID)
    this.awareness.on('change', changes => {
      this.logChanges(changes)
      let usersStates = {changes: changes, users: {}}
      this.awareness.getStates().forEach(state => {
        this.logState(state)
        if (state.user ) {
          //console.log('state.user', state.user)
          //  this.store.commit('actor/setUserByID', state.user)
          usersStates.users[state.user.clientID] = state.user
          //console.log(usersStates)
        }
      })
      //console.log(usersStates)
      this.store.commit('actor/updateUsersStates', usersStates)
    })


    this.roomList = this.rootDoc.getMap('allrooms')


    this.roomList.observe(ymapEvent => {
      ymapEvent.target === this.roomList // => true
    //  console.log("this.roomList has changed", this.roomList.toJSON())
      let rooms = Array.from(this.roomList.values()).sort((a,b) => b.date - a.date)
      this.store.commit('noosphere/setAllRooms', rooms)

      // // Find out what changed:
      // // Option 1: A set of keys that changed
      // ymapEvent.keysChanged // => Set<strings>
      // // Option 2: Compute the differences
      // ymapEvent.changes.keys // => Map<string, { action: 'add'|'update'|'delete', oldValue: any}>
      //
      // // sample code.
      // ymapEvent.changes.keys.forEach((change, key) => {
      //   if (change.action === 'add') {
      //     console.log(`Property "${key}" was added. Initial value: "${this.roomList.get(key)}".`)
      //   } else if (change.action === 'update') {
      //     console.log(`Property "${key}" was updated. New value: "${this.roomList.get(key)}". Previous value: "${change.oldValue}".`)
      //   } else if (change.action === 'delete') {
      //     console.log(`Property "${key}" was deleted. New value: undefined. Previous value: "${this.roomList.oldValue}".`)
      //   }
      // })
    })




  }

  createIndexedDbProvider(){

    this.indexeddbProvider = new IndexeddbPersistence(this.id, this.rootDoc)

    this.indexeddbProvider.on('synced', async () => {
    //  console.log('{$getPersistanceDB} synced', data)

      this.flush({doc: this.rootDoc, roomID: this.id, type: 'main'})

      // Vue.prototype.$getWebsocketProvider()
      //let user = await Vue.prototype.$getUser(options)
      //console.log('{user}', user)
      //Vue.prototype.$userChanged()

      // if(store.state.actor.user.roomID != undefined && opts.router.history.current.name != 'editor'){
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
      roomID , //'milkdown', // roomID
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
      this.roomWsProvider != undefined ? this.roomWsProvider.destroy() : ""
      this.roomWsProvider = wsProvider
      this.addToRoomList(roomID)
    }






  }

  addToRoomList(roomID){
    this.roomList.set(roomID, {roomID: roomID, date: Date.now()})
  //  console.log("add to room List", this.roomList.toJSON(), roomID)

  }

  logState(state){

    if(state.user){
      console.log("--", state.user.clientID, state.user.name,  state.user.roomID)
    }else{
      console.log("-",state)
    }
  }

  logChanges(c){
    console.log('-- --add',c.added, 'up',c.updated, 'rem',c.removed)
  }



  // randomUser(){
  //   if ( this.name == undefined ) this.name =
  //   if ( this.color == undefined ) '#'+Math.floor(Math.random()*16777215).toString(16)
  //   // this.created = options.created || Date.now()
  //   //this.rooms = options.rooms || {}
  //
  // }

}
