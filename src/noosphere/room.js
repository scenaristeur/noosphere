import { Base } from "./base.js"
import * as Y from 'yjs'
// import { v4 as uuidv4 } from 'uuid';
// import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'


export { Room }

class Room extends Base {
  constructor(options = {}) {
    super(options)
    this.type = 'room'
    this.init()
  }

  init(){
    let awareness = this.channel.awareness
    this.ymap = this.channel.rootDoc.getMap()
    this.roomDoc = this.ymap.get(this.id)
    if (this.roomDoc == undefined){
      this.roomDoc = new Y.Doc()
      this.ymap.set(this.id, this.roomDoc)
    }

    this.wsProvider = new WebsocketProvider(
      // "ws://localhost:1234",
      //  "wss://noosphere.glitch.me/",       // basic y-websocket
      "wss://yjs-leveldb.glitch.me/", // with leveldb
      // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
      // 'wss://demos.yjs.dev',
      this.id, //'milkdown', // roomId
      this.roomDoc, // Doc
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

  }



}
