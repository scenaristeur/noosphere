import { WebsocketProvider } from 'y-websocket';
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
    // ["ws://localhost:1234",'wss://demos.yjs.dev']
    this.wsProvider = new WebsocketProvider(
      "ws://localhost:1234",
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

    openRoom(roomId) {
      this.room = roomId //this.room === 'milkdown' ? 'sandbox' : 'milkdown';
      // if (room$) {
      //     room$.textContent = this.room;
      // }

      //const template = this.room === 'milkdown' ? markdown : '# Sandbox Room';
      const template = markdown+'#'+this.room
      this.disconnect();
      this.flush(template);
    }


  }
