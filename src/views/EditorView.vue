<template>
  <b-container fluid>

    <!-- <b-button @click="toggle">Toggle</b-button> -->
    <!-- <b-input v-model="room" placeholder="room" />
    <b-button @click="open">Open</b-button> -->

    <div ref="editor"></div>
    <b-button @click="connect">Connect</b-button>
    <b-button @click="disconnect">Disonnect</b-button>
    status: {{collabManager != null && collabManager.status}} {{ roomAddress }}
  </b-container>
</template>

<script>
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
// import { nord } from '@milkdown/theme-nord';
import { tokyo } from '@milkdown/theme-tokyo';
// import { gfm } from '@milkdown/preset-gfm';
import { commonmark } from '@milkdown/preset-commonmark';
import { collaborative, collabServiceCtx } from '@milkdown/plugin-collaborative';
import { menu } from '@milkdown/plugin-menu';
import { slash } from '@milkdown/plugin-slash';
import { tooltip } from '@milkdown/plugin-tooltip';
import { clipboard } from '@milkdown/plugin-clipboard';
import { cursor } from '@milkdown/plugin-cursor';
import { history } from '@milkdown/plugin-history';


// import { WebsocketProvider } from 'y-websocket';
// import { Doc } from 'yjs';
import { CollabManager } from '@/services/collabManager';


export default {
  name: 'EditorView',
  props: {
    msg: String,
  },
  data(){
    return{
      default: " # Milkdown Collaborative Example --- Now you can play! ",
      room: null,
      collabManager: null
    }
  },
  async mounted() {
    let app = this
    const editor = await Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, this.$refs.editor);
      ctx.set(defaultValueCtx, this.default);
    })
    // .use(nord)
    .use(tokyo)
        // .use(gfm)
    .use(commonmark)
    .use(menu)
    .use(slash)
    .use(tooltip)
    .use(cursor)
    .use(clipboard)

    .use(history)
    .use(collaborative)
    .create();


    editor.action((ctx) => {
      const collabService = ctx.get(collabServiceCtx);
      app.collabManager = new CollabManager({collabService: collabService, store: app.$store});
      app.collabManager.flush();
    });

  },
  methods:{
    connect(){
      this.collabManager.connect();
    },
    disconnect(){
      this.collabManager.disconnect();
    },
    toggle(){
      this.collabManager.toggleRoom();
    },
    open(){
      this.room = this.room.trim()
      if(this.room.length >0){
        this.collabManager.openRoom(this.room);
      }

    }
  },
  watch:{
    roomAddress(){
      console.log(this.roomAddress)
      this.collabManager.openRoom(this.roomAddress);
    }
  },
  computed: {
    // nodes() {
    //   return this.$store.state.network.nodes
    // },
    // links() {
    //   return this.$store.state.network.links
    // },
    roomAddress() {
      return this.$store.state.actor.roomAddress
    },
  }
};

</script>

<style lang="css">
.milkdown-menu {
  position:fixed;
  background-color: rgba(0, 0, 64, .1);
  top:60px;
  right:0;
  left:0;
  /* bottom: 0px; */
  z-index:1
}
/* .milkdown .editor {

  background-color: rgb(100, 100, 130,.9);
   background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-attachment: scroll;
  background-image: none;
  background-size: auto;
  background-origin: padding-box;
  background-clip: border-box;
} */
</style>
