<template>
  <div >
    <!-- roomId : {{roomId}} -->
    <!-- {{ ready}} -->
    <div ref="editor" class="editor" ></div>
    <!-- content {{ markdownContent}} -->
    <!-- {{ user }} -->

    <b-button v-if="parent != null" @click='open(parent)'>parent :  {{ parent}}</b-button>

  </div>
</template>

<script>
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { collaborative/*, collabServiceCtx*/ } from '@milkdown/plugin-collaborative';
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

// import {Awareness} from 'y-protocols/awareness'
// import { WebrtcProvider } from 'y-webrtc'

// import { IndexeddbPersistence } from 'y-indexeddb'

// import { CollabManager } from '@/services/collabManager';

export default {
  name: 'MilkEditor',
  data(){
    return{
      roomId: null,
      default: "### Welcome to the Noosphere \n1. Choose a room\n 2. click to edit",
      // markdownContent : null
      // rootDoc: null,
      // user: null
      // ready: false
    }
  },
  async mounted() {
    let editor = await Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, this.$refs.editor);
      ctx.set(defaultValueCtx, this.default);
      ctx.get(listenerCtx).markdownUpdated((ctx, markdown/*, prevMarkdown*/) => {
        // output = markdown;
        // this.markdownContent = markdown
        this.$store.commit('editor/setMarkdownContent', markdown)
      });
      //   ctx.get(listenerCtx)
      //   .beforeMount((ctx) => {
      //     // before the editor mounts
      //     console.log('beforeMount', ctx)
      //   })
      //   .mounted((ctx) => {
      //     // after the editor mounts
      //     console.log('mounted', ctx)
      //   })
      //   .updated((ctx, /*doc, prevDoc*/) => {
      //     console.log('updated', ctx)
      //     //  console.log('updated', ctx, doc, prevDoc)
      //     // when editor state updates
      //   })
      //   .markdownUpdated((ctx, markdown, prevMarkdown) => {
      //     // when markdown updates
      //     console.log('markdown updated', ctx,markdown, prevMarkdown)
      //   })
      //   .blur((ctx) => {
      //     // when editor loses focus
      //     console.log('blur', ctx)
      //   })
      //   .focus((ctx) => {
      //     // when focus editor
      //     console.log('focus', ctx)
      //   })
      //   .destroy((ctx) => {
      //     // when editor is being destroyed
      //     console.log('destroy', ctx)
      //   });
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


    this.$store.commit('editor/setEditor', editor)
    // this.rootDoc = new Doc();

    // let indexeddbProvider = new IndexeddbPersistence('noosphere-demo3', this.rootDoc)
    // //
    // indexeddbProvider.on('synced', (data) => {
    //   this.ready = true
    //   console.log(this.ready)
    //     console.log('content from the database is loaded', data)
    // })
    // console.log(this.ready)


    // let awareness = this.awareness //=  new Awareness(this.rootDoc)
    // store.commit('y/setAwareness', awareness)
    // awareness.on('change', changes => {
    //   console.log("changes", changes)
    //   awareness.getStates().forEach(state => {
    //     //  console.log(state)
    //     if (state.user) {
    //       console.log('[state.user]',state.user)
    //       this.$store.commit('actor/setUserById', state.user)
    //     }
    //   })
    //   this.$store.commit('actor/setUsersUpdated', Date.now())
    // })


    // this.user = {
    //   name: 'User_RAND_'+Date.now(),
    //   color: '#'+Math.floor(Math.random()*16777215).toString(16),
    //   clientID: awareness.clientID,
    //   //roomId: uuidv4(),
    //   rooms: {}
    // }
    // this.$store.commit('y/setAwareness', awareness)
    // console.log('this.roomId', this.user.roomId)
    // if (this.user.roomId != undefined){
    //   this.roomId = this.user.roomId
    //  this.$connect('milk mounted')
    console.log('milk user', this.user)
    if (this.user != null) this.$connect('milk mounted')
    // }


  },
  methods:{
    open(roomId){
      console.log(roomId)
      let user = this.user
      user.roomId = roomId
      this.$store.commit('actor/setUser', user)
      this.$connect('editor parent')
    }
  },



  watch:{
    // roomAddress(){
    //   this.roomId = this.roomAddress
    //   console.log(this.roomId)
    //   this.$connect('milk watch')
    // }
    user(){
      this.$connect('milk watch user')
    }
  },

  computed: {
    // roomAddress() {
    //   return this.$store.state.actor.roomAddress
    // },
    user() {
      return this.$store.state.actor.user
    },
    rootDoc() {
      return this.$store.state.y.yDoc
    },
    awareness() {
      return this.$store.state.y.awareness
    },
    editor() {
      return this.$store.state.editor.editor
    },
    parent() {
      return this.$store.state.editor.parent
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
