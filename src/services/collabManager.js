import {Awareness} from 'y-protocols/awareness'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { Doc } from 'yjs';

let autoConnect = true
const markdown = `
# Milkdown Collaborative Example

---

Now you can play!
`;

const options = [
  { color: '#5e81AC', name: 'milkdown user 1' },
  { color: '#8FBCBB', name: 'milkdown user 2' },
  { color: '#dbfdbf', name: 'milkdown user 3' },
  { color: '#D08770', name: 'milkdown user 4' },
];
const rndInt = Math.floor(Math.random() * 4);

export { CollabManager }

class CollabManager {

  constructor(collabService) {
    this.collabService = collabService
    this.room = 'milkdown';
    this.doc = null
    this.wsProvider = null
    this.status = null
    // if (room) {
    //   room.textContent = this.room;
    // }
  }

  flush(template = markdown) {

    this.doc ? this.doc.destroy(): ""
    this.wsProvider ? this.wsProvider.destroy(): ""

    this.doc = new Doc();
    let awareness = this.awareness = new Awareness(this.doc)
    this.awareness.on('change', ()/*changes*/ => {
      this.awareness.getStates().forEach(state => {
        //  console.log(state)
        if (state.user) {
          console.log('[state.user]',state.user)
          // store.commit('actor/setUserByID', state.user)
        }
      })
      // store.commit('actor/setUsersUpdated', Date.now())
    })

    console.log(this.room)


let indexeddbProvider = new IndexeddbPersistence(this.room, this.doc)
indexeddbProvider.on('synced', async () => {
  //  let syncedData = await indexeddbProvider.whenSynced
  //  console.log('[indexeddbProvider] loaded data from indexed db', syncedData)

  new WebrtcProvider(this.room, this.doc, {awareness,
    signaling: [
      "wss://y-webrtc-signaling-eu.herokuapp.com",
      "wss://y-webrtc-signaling-us.herokuapp.com",
      "wss://signaling.yjs.dev"
    ]})

    // Sync clients with the y-websocket provider
    // let websocketProvider =
    // new WebsocketProvider('wss://demos.yjs.dev', channel, this.doc, {awareness })
    // ["ws://localhost:1234",'wss://demos.yjs.dev']
    this.wsProvider = new WebsocketProvider(
      // "ws://localhost:1234",
      "wss://flame-long-base.glitch.me/",
      // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
      // 'wss://demos.yjs.dev',
      this.room, this.doc, { connect: autoConnect });
      this.wsProvider.awareness.setLocalStateField('user', options[rndInt]);
      this.wsProvider.on('status', (payload) => {
        if (payload.status) {
          this.status = payload.status;
        }
      });

      this.collabService.bindDoc(this.doc).setAwareness(this.wsProvider.awareness);
      this.wsProvider.once('synced', async (isSynced) => {
        if (isSynced) {
          this.collabService.applyTemplate(template).connect();
        }
      });
    //  await end(user)
  })



    }

    connect() {
      this.wsProvider.connect();
      this.collabService.connect();
    }

    disconnect() {
      this.collabService.disconnect();
      this.wsProvider.disconnect();
    }

    applyTemplate(template) {
      this.collabService
      .disconnect()
      .applyTemplate(template, () => true)
      .connect();
    }
    toggleRoom() {
      this.room = this.room === 'milkdown' ? 'sandbox' : 'milkdown';
      // if (room$) {
      //     room$.textContent = this.room;
      // }

      const template = this.room === 'milkdown' ? markdown : '# Sandbox Room';
      this.disconnect();
      this.flush(template);
    }

    openRoom(roomID) {
      console.log(roomID)
      this.room = roomID //this.room === 'milkdown' ? 'sandbox' : 'milkdown';
      // if (room$) {
      //     room$.textContent = this.room;
      // }
      //const template = this.room === 'milkdown' ? markdown : '# Sandbox Room';
      const template = markdown+'#'+this.room
      this.disconnect();
      this.flush(template);
    }


  }
