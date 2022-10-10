import { Base } from "./base.js"
import { v4 as uuidv4 } from 'uuid';
import * as Y from 'yjs'
import {Awareness} from 'y-protocols/awareness'
import { IndexeddbPersistence } from 'y-indexeddb'
// import { WebrtcProvider } from 'y-webrtc'
// import { WebsocketProvider } from 'y-websocket'




export { Channel }

class Channel extends Base {
  constructor(options = {}) {
    super(options)
    this.id = options.id || uuidv4()
    this.group = 'channel'
    this.rootDoc = new Y.Doc()
    this.createAwareness()
    this.createIndexedDbProvider()


  }
  createAwareness(){
    this.awareness = new Awareness(this.rootDoc)
    this.  awareness.on('change', changes => {
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
    this.indexeddbProvider = new IndexeddbPersistence(this.id, this.rootDoc)

    this.indexeddbProvider.on('synced', async (data) => {
      console.log('{$getPersistanceDB} synced'/*, data*/)
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
