<template>
  <div >
    roomId : {{roomId}}
    <!-- {{ ready}} -->
    <div ref="editor" class="editor" ></div>
    {{ user }}
  </div>
</template>

<script>
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { collaborative, collabServiceCtx } from '@milkdown/plugin-collaborative';
import { menu } from '@milkdown/plugin-menu';
import { slash } from '@milkdown/plugin-slash';
import { tooltip } from '@milkdown/plugin-tooltip';
import { clipboard } from '@milkdown/plugin-clipboard';
import { cursor } from '@milkdown/plugin-cursor';
import { history } from '@milkdown/plugin-history';
import { emoji } from '@milkdown/plugin-emoji';
import { diagram } from '@milkdown/plugin-diagram';
// import { gfm } from '@milkdown/preset-gfm';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { Doc } from 'yjs';
import {Awareness} from 'y-protocols/awareness'
// import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
// import { IndexeddbPersistence } from 'y-indexeddb'

// import { CollabManager } from '@/services/collabManager';

export default {
  name: 'MilkEditor',
  data(){
    return{
      roomId: null,
      default: "### Welcome to the Noosphere \n1. Choose a room\n 2. click to edit",
      rootDoc: null,
      user: null
      // ready: false
    }
  },
  async mounted() {
    this.editor = await Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, this.$refs.editor);
      ctx.set(defaultValueCtx, this.default);
      ctx.get(listenerCtx)
      // .beforeMount((ctx) => {
      //   // before the editor mounts
      //   console.log('beforeMount', ctx)
      // })
      // .mounted((ctx) => {
      //   // after the editor mounts
      //   console.log('mounted', ctx)
      // })
      .updated((ctx, /*doc, prevDoc*/) => {
        console.log('updated', ctx)
        //  console.log('updated', ctx, doc, prevDoc)
        // when editor state updates
      })
      // .markdownUpdated((ctx, markdown, prevMarkdown) => {
      //   // when markdown updates
      //   console.log('markdown updated', ctx,markdown, prevMarkdown)
      // })
      // .blur((ctx) => {
      //   // when editor loses focus
      //   console.log('blur', ctx)
      // })
      // .focus((ctx) => {
      //   // when focus editor
      //   console.log('focus', ctx)
      // })
      .destroy((ctx) => {
        // when editor is being destroyed
        console.log('destroy', ctx)
      });
    })
    .use(nord)
    .use(commonmark)
    .use(menu)
    .use(slash)
    .use(tooltip)
    .use(cursor)
    .use(clipboard)
    // .use(gfm)
    .use(collaborative)
    .use(history)
    .use(emoji)
    .use(diagram)
    .use(listener)
    .create();

    this.rootDoc = new Doc();

    // let indexeddbProvider = new IndexeddbPersistence('noosphere-demo3', this.rootDoc)
    // //
    // indexeddbProvider.on('synced', (data) => {
    //   this.ready = true
    //   console.log(this.ready)
    //     console.log('content from the database is loaded', data)
    // })
    // console.log(this.ready)



    let awareness = this.awareness =  new Awareness(this.rootDoc)
    // store.commit('y/setAwareness', awareness)
    awareness.on('change', ()/*changes*/ => {
      awareness.getStates().forEach(async state => {
        //  console.log(state)
        if (state.user) {
          console.log('[state.user]',await state.user)
          // store.commit('actor/setUserById', state.user)
        }
      })
      // store.commit('actor/setUsersUpdated', Date.now())
    })


    this.user = {
      name: 'User_RAND_'+Date.now(),
      color: '#'+Math.floor(Math.random()*16777215).toString(16),
      clientID: awareness.clientID,
      //roomId: uuidv4(),
      rooms: {}
    }


  },
  methods:{
    connect(){
      let awareness = this.awareness
      console.log('awareness clientID', awareness.clientID)
      this.ymap = this.rootDoc.getMap()
      console.log('ymap', this.ymap)
      this.roomDoc = this.ymap.get(this.roomId)
      console.log (this.roomDoc)
      if (this.roomDoc == undefined){
        // Client One



        this.roomDoc = new Doc()
        //subDoc.getText().insert(0, 'some initial content')
        this.ymap.set(this.roomId, this.roomDoc)
      }
      // else{
      //
      // }



      // const wsProvider =
      new WebsocketProvider(
        // "ws://localhost:1234",
        //  "wss://noosphere.glitch.me/",       // basic y-websocket
        "wss://yjs-leveldb.glitch.me/", // with leveldb
        // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
        // 'wss://demos.yjs.dev',
        this.roomId, //'milkdown', // roomId
        this.roomDoc, // Doc
        {awareness}
      );


      console.log(this.rootDoc, this.roomDoc)





      // console.log (editor)

      this.editor.action((ctx) => {
        const collabService = ctx.get(collabServiceCtx);

        collabService
        .disconnect()
        // bind doc and awareness
        .bindDoc(this.roomDoc)
        .setAwareness(this.awareness)
        // connect yjs with milkdown
        .connect();
      });

      this.user.roomId = this.roomId
      this.user.rooms[this.roomId] = {}
      this.awareness.setLocalStateField('user', this.user)

    }
  },



  watch:{
    roomAddress(){
      this.roomId = this.roomAddress
      console.log(this.roomId)
      this.connect()


    }
  },

  computed: {
    roomAddress() {
      return this.$store.state.actor.roomAddress
    },

  }


}
</script>

<style lang="css">
.milkdown-menu {
  position:fixed;
  top:56px;
  right:0;
  left:0;
  /* bottom: 0px; */
  z-index:1
}

/* .milkdown-wsc9t6 .menu-selector-list {
  width: 184px;
  position: absolute;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 222, 233, 1);
  box-shadow: 0 1px 1px rgba(59, 66, 82, 0.14),0 2px 1px rgba(59, 66, 82, 0.12),0 1px 3px rgba(59, 66, 82, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 2;
} */
</style>
