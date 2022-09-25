import {Awareness} from 'y-protocols/awareness'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import * as Y from 'yjs'

// let autoConnect = true
// const markdown = `
// # Milkdown Collaborative Example
//
// ---
//
// Now you can play!
// `;



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
    this.channel = 'noosphere-demo2'
    this.collabService = options.collabService
    this.store = options.store
    this.room = 'milkdown';
    this.ydoc = new Y.Doc()
    this.createAwareness()
    this.createProviders()
        this.openRoom('default')
    //this.setYMapObserver()
    // this.wsProvider = null
    // this.indexeddbProvider = null
    // this.webrtcProvider = null
    // this.awareness = null
    this.status = null
    console.log("store", this.store)
    // if (room) {
    //   room.textContent = this.room;
    // }

    this.init()
  }

  createAwareness(){
    this.awareness = new Awareness(this.ydoc)
    // store.commit('y/setAwareness', awareness)
    this.awareness.on('change', ()/*changes*/ => {
      this.awareness.getStates().forEach(state => {
        console.log(state)
        if (state.user) {
          console.log('[state.user]',state.user)
          // store.commit('actor/setUserById', state.user)
        }
      })
      // store.commit('actor/setUsersUpdated', Date.now())
    })
    // return awareness
  }

  createProviders(){
    let manager = this
    let awareness = this.awareness
    let indexeddbProvider = new IndexeddbPersistence(this.channel, this.ydoc)
    indexeddbProvider.on('synced', async () => {
      //  let syncedData = await indexeddbProvider.whenSynced
      //  console.log('[indexeddbProvider] loaded data from indexed db', syncedData)

      new WebrtcProvider(manager.channel, manager.ydoc, {awareness,
        signaling: [
          "wss://y-webrtc-signaling-eu.herokuapp.com",
          "wss://y-webrtc-signaling-us.herokuapp.com",
          "wss://signaling.yjs.dev"
        ]})

        // Sync clients with the y-websocket provider
        // let websocketProvider =
        manager.wsProvider = new WebsocketProvider(
          // 'wss://demos.yjs.dev',
          "wss://flame-long-base.glitch.me/",
          manager.channel, manager.ydoc, {awareness })

          manager.wsProvider.on('status', (payload) => {
            console.log('payload')
            if (payload.status) {
              manager.status = payload.status;
              console.log(manager.status)
            }
          });

          //  await end(user)
        })






      }



      setYMapObserver(){
        // see https://github.com/hughfenghen/y-editorjs/blob/8a24139170033ee8bec17e9cdf543661a385e7aa/src/y-editor.ts
        let user = this.store.state.actor.user
        let ymap = this.roomDoc
        //  console.log('user', user)

        // ymap.observe((event, tr) => {
        //   console.log(tr, tr.origin)
        // })
        // ymap.observeDeep((events, tr) => {
        //   tr.origin
        // })


        ymap.observeDeep((events/*,tr*/) => {
          //  console.log(tr, tr.origin)
          events.forEach(event => {
            // calls++
            // console.log('calls', calls)
            // @ts-ignore
            // console.log(event.keysChanged.has('deepmap'))
            // console.log(event.path.length === 1)
            // console.log(event.path[0] === 'map')
            console.log('[YMAP event]',event)
            let editor_map_changed = event.keysChanged.has('editor_map')
            //console.log('[editor_map_changed]', editor_map_changed)
            // @ts-ignore
            // let dmapid = event.target.get('deepmap')._item.id
            // console.log(dmapid)

            // console.log("nodes",event.target.get('nodes').toJSON())
            // this.nodes = event.target.get('nodes').toJSON()
            // if (event.keysChanged.has('editor_map')){
            // yService.log('editor_map changed')
            //  let editorData = this.ymap.get('editor_map')



            if (editor_map_changed == true ){
              //  console.log('{ymap}',ymap)
              //console.log(editorData)
              let ymapData = ymap.get('editor_map')
              console.log(ymapData.clientID != user.clientID)
              //  if (editorData.clientID != user.clientID){
              //this.editorData =  editorData//.toJSON()
              if (ymapData.clientID != user.clientID){
                //  ymapData.source = 'ymapEvent'
                console.log('{ymap event}',ymapData)
                // this.store.commit('editor/setEditorData', ymapData)
              }

              //  console.log("[update editorData]", editorData)

              //  }
              // else{
              //   console.log("[same clientID]")
              // }

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
      }

      init(){
        // console.log("{createYdoc}", this.ydoc)
        // this.ydoc.on('beforeTransaction', tr => {
        //   console.log('beforeTransaction',tr, tr.origin)
        // })
        // this.ydoc.on('beforeObserverCalls', tr => {
        //   console.log('beforeObserverCalls',tr, tr.origin)
        // })
        // this.ydoc.on('afterTransaction', tr => {
        //   console.log('afterTransaction',tr, tr.origin)
        // })
        // this.ydoc.on('update', (update, origin, tr) => {
        //   console.log('ydoc update',update, origin, tr)
        // })
        this.collabService.bindDoc(this.roomDoc).setAwareness(this.awareness);

        this.collabService.connect();
      }

      // flush(template = markdown) {
      //
      //   let user = this.store.state.actor.user
      //   this.awareness.setLocalStateField('user', user)
      //
      //   this.indexeddbProvider.on('synced', async (synced) => {
      //     console.log('indexeddb synced', synced, template)
      //     // await this.collabService.applyTemplate(template+"_indexdeddb").connect();
      //
      //     this.wsProvider = new WebsocketProvider(
      //       // "ws://localhost:1234",
      //       "wss://flame-long-base.glitch.me/",
      //       // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
      //       // 'wss://demos.yjs.dev',
      //       channel, this.doc, { connect: autoConnect },{awareness });
      //
      //
      //
      //       this.wsProvider.awareness.setLocalStateField('user', user/*options[rndInt]*/);
      //       this.wsProvider.on('status', (payload) => {
      //         if (payload.status) {
      //           this.status = payload.status;
      //         }
      //       });
      //
      //       this.collabService.bindDoc(this.doc).setAwareness(this.wsProvider.awareness);
      //
      //
      //
      //
      //       this.wsProvider.once('synced', async (isSynced) => {
      //         if (isSynced) {
      //           console.log('ws synced', isSynced,template)
      //           // this.collabService.applyTemplate(template).connect();
      //           this.collabService.connect();
      //         }
      //       });
      //       //  this.collabService.applyTemplate(template).connect();
      //     })
      //
      //
      //     //  await end(user)
      //
      //   }

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
        // this.ymap = this.yDoc.getMap(this.user.roomId)
        // console.log(this.ymap)


        // Client One
        // const rootDoc = new Y.Doc()
        const folder = this.ydoc.getMap()

        this.roomDoc = new Y.Doc()
        this.roomDoc.getText().insert(0, 'some initial content')
        folder.set(this.room, this.roomDoc)
        // if (room$) {
        //   room$.textContent = this.room;
        // }

        // const template = this.room === 'milkdown' ? markdown : '# Sandbox Room';
        // const template = '# '+this.room+  " Room -- click"
        // this.disconnect();
        // this.flush(template);
      }


    }
