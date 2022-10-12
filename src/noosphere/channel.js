import { Base } from "./base.js"
import { v4 as uuidv4 } from 'uuid';
import * as Y from 'yjs'
import {Awareness} from 'y-protocols/awareness'
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
    this.createAwareness()
    this.createIndexedDbProvider()
    // this.store.commit('noosphere/setChannel',channel)
    this.d()
  }
  createAwareness(){
    this.awareness = new Awareness(this.rootDoc)
    this.awareness.on('change', changes => {
      console.log('changes', changes)
      this.awareness.getStates().forEach(state => {
        console.log('state',state)
        if (state.user ) {
          console.log('state.user', state.user)
        }
      })
    })
  }

  createIndexedDbProvider(){
    let awareness = this.awareness
    this.indexeddbProvider = new IndexeddbPersistence(this.id, this.rootDoc)

    this.indexeddbProvider.on('synced', async (data) => {
      console.log('{$getPersistanceDB} synced', data)
      this.wsProvider = new WebsocketProvider(
        // "ws://localhost:1234",
        //  "wss://noosphere.glitch.me/",       // basic y-websocket
        "wss://yjs-leveldb.glitch.me/", // with leveldb
        // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
        // 'wss://demos.yjs.dev',
        this.id, //'milkdown', // roomId
        this.rootDoc, // Doc
        {awareness: awareness, connect: true}
      );

      this.wsProvider.on('status', (payload) => {
        if (payload.status) {
          console.log("--------------------------\nwsProvider status", payload.status, "\n--------------------------")
          // this.status = payload.status;
          this.store.commit('y/setStatus', payload.status)
          this.status = payload.status
          // store.commit('actor/setUser', user)
          // Vue.prototype.$userChanged()
        }
      });
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



  // randomUser(){
  //   if ( this.name == undefined ) this.name =
  //   if ( this.color == undefined ) '#'+Math.floor(Math.random()*16777215).toString(16)
  //   // this.created = options.created || Date.now()
  //   //this.rooms = options.rooms || {}
  //
  // }

}
