import {Awareness} from 'y-protocols/awareness'
// import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { Doc } from 'yjs';

let autoConnect = true
const markdown = `
# Milkdown Collaborative Example

---

Now you can play!
`;

// const options = [
//   { color: '#5e81AC', name: 'milkdown user 1' },
//   { color: '#8FBCBB', name: 'milkdown user 2' },
//   { color: '#dbfdbf', name: 'milkdown user 3' },
//   { color: '#D08770', name: 'milkdown user 4' },
// ];
// const rndInt = Math.floor(Math.random() * 4);

export { CollabManager }

class CollabManager {

  constructor(options) {

    console.log(options)
    this.collabService = options.collabService
    this.store = options.store
    this.room = 'milkdown';
    this.doc = null
    this.wsProvider = null
    this.indexeddbProvider = null
    // this.webrtcProvider = null
    // this.awareness = null
    this.status = null
    console.log("store", this.store)
    // if (room) {
    //   room.textContent = this.room;
    // }
  }

  flush(template = markdown) {

    this.doc ? this.doc.destroy(): ""
    this.wsProvider ? this.wsProvider.destroy(): ""

    // this.indexeddbProvider ? this.indexeddbProvider.destroy(): ""
    // this.webrtcProvider ? this.webrtcProvider.destroy(): ""
    // this.awareness ? this.awareness.destroy() : ""

    this.doc = new Doc();
    // let awareness = this.awareness = new Awareness(this.doc)
    // this.awareness.on('change', ()/*changes*/ => {
    //   this.awareness.getStates().forEach(state => {
    //     //  console.log(state)
    //     if (state.user) {
    //       console.log('[state.user]',state.user)
    //       // store.commit('actor/setUserById', state.user)
    //     }
    //   })
    //   // store.commit('actor/setUsersUpdated', Date.now())
    // })

    //  console.log(this.room)


    this.indexeddbProvider = new IndexeddbPersistence(this.room, this.doc)

    let awareness = new Awareness(this.doc)
    this.store.commit('y/setAwareness', awareness)
    awareness.on('change', ()/*changes*/ => {
      awareness.getStates().forEach(state => {
        //  console.log(state)
        if (state.user) {
          console.log('[state.user]',state.user)
          // store.commit('actor/setUserById', state.user)
        }
      })
      // store.commit('actor/setUsersUpdated', Date.now())
    })

    //  let syncedData = await indexeddbProvider.whenSynced
    //  console.log('[indexeddbProvider] loaded data from indexed db', syncedData)

    // this.webrtcProvider = new WebrtcProvider(this.room, this.doc, {awareness,
    //   signaling: [
    //     "wss://y-webrtc-signaling-eu.herokuapp.com",
    //     "wss://y-webrtc-signaling-us.herokuapp.com",
    //     "wss://signaling.yjs.dev"
    //   ]})

    // Sync clients with the y-websocket provider
    // let websocketProvider =
    // new WebsocketProvider('wss://demos.yjs.dev', channel, this.doc, {awareness })
    // ["ws://localhost:1234",'wss://demos.yjs.dev']
    let user = this.store.state.actor.user
    this.store.state.y.awareness.setLocalStateField('user', user)

    this.indexeddbProvider.on('synced', async (synced) => {
      console.log('indexeddb synced', synced, template)
      // await this.collabService.applyTemplate(template+"_indexdeddb").connect();

      this.wsProvider = new WebsocketProvider(
        // "ws://localhost:1234",
        "wss://flame-long-base.glitch.me/",
        // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
        // 'wss://demos.yjs.dev',
        this.room, this.doc, { connect: autoConnect },{awareness });



        this.wsProvider.awareness.setLocalStateField('user', user/*options[rndInt]*/);
        this.wsProvider.on('status', (payload) => {
          if (payload.status) {
            this.status = payload.status;
          }
        });

        this.collabService.bindDoc(this.doc).setAwareness(this.wsProvider.awareness);




        this.wsProvider.once('synced', async (isSynced) => {
          if (isSynced) {
            console.log('ws synced', isSynced,template)
            // this.collabService.applyTemplate(template).connect();
            this.collabService.connect();
          }
        });
        //  this.collabService.applyTemplate(template).connect();
      })


      //  await end(user)

    }

    connect() {
      this.indexeddbProvider.connect();
      // this.webrtcProvider.connect();
      this.wsProvider.connect();
      this.collabService.connect();
    }

    disconnect() {
      //  this.indexeddbProvider.disconnect();
      // this.webrtcProvider.disconnect();
      this.collabService.disconnect();
      this.wsProvider.disconnect();
    }

    // applyTemplate(template) {
    //   this.collabService
    //   .disconnect()
    //   .applyTemplate(template, (remoteNode, templateNode) => {
    //     console.log(remoteNode, templateNode)
    //   })
    //   .connect();
    // }
    // toggleRoom() {
    //   this.room = this.room === 'milkdown' ? 'sandbox' : 'milkdown';
    //   // if (room$) {
    //   //     room$.textContent = this.room;
    //   // }
    //
    //   const template = this.room === 'milkdown' ? markdown : '# Sandbox Room';
    //   this.disconnect();
    //   this.flush(template);
    // }

    openRoom(roomId) {
      this.room = roomId
      console.log(this.room)
      // if (room$) {
      //   room$.textContent = this.room;
      // }

      // const template = this.room === 'milkdown' ? markdown : '# Sandbox Room';
      const template = '# '+this.room+  " Room -- click"
      this.disconnect();
      this.flush(template);
    }


  }
