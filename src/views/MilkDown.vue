<template>
  <div>
    <b-button @click="connect">Connect</b-button>
    <b-button @click="disconnect">Disonnect</b-button>
    <b-input v-model="room" placeholder="room" />
    <b-button @click="open">Open</b-button>
    status: {{collabManager != null && collabManager.status}}
    <div ref="editor"></div>
  </div>
</template>

<script>
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
// import { commonmark } from '@milkdown/preset-commonmark';
import { collaborative, collabServiceCtx } from '@milkdown/plugin-collaborative';
import { menu } from '@milkdown/plugin-menu';
import { slash } from '@milkdown/plugin-slash';
import { tooltip } from '@milkdown/plugin-tooltip';
import { clipboard } from '@milkdown/plugin-clipboard';
import { cursor } from '@milkdown/plugin-cursor';
import { gfm } from '@milkdown/preset-gfm';

// import { WebsocketProvider } from 'y-websocket';
// import { Doc } from 'yjs';
import { CollabManager } from '@/services/collabManager';
const markdown = `
# Milkdown Collaborative Example

---

Now you can play!
`;

export default {
  name: 'MilkDown',
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
    // let app = this
    const editor = await Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, this.$refs.editor);
      ctx.set(defaultValueCtx, this.default);
    })
    .use(nord)
    // .use(commonmark)
    .use(menu)
    .use(slash)
    .use(tooltip)
    .use(cursor)
    .use(clipboard)
    .use(gfm)
    .use(collaborative)
    .create();


    editor.action((ctx) => {
      const collabService = ctx.get(collabServiceCtx);
      this.collabManager = new CollabManager(collabService);
      this.collabManager.flush(markdown);

      // if (connect$) {
      //     connect$.onclick = () => {
      //         collabManager.connect();
      //     };
      // }
      //
      // if (disconnect$) {
      //     disconnect$.onclick = () => {
      //         collabManager.disconnect();
      //     };
      // }
      //
      // if (apply$ && template$) {
      //     apply$.onclick = () => {
      //         if (template$ instanceof HTMLTextAreaElement) {
      //             collabManager.applyTemplate(template$.value);
      //         }
      //     };
      // }
      //
      // if (toggle$) {
      //     toggle$.onclick = () => {
      //         collabManager.toggleRoom();
      //     };
      // }
    });

    console.log(this.collabManager)
    // const doc = new Doc();
    // const wsProvider = new WebsocketProvider('ws://localhost:1234', 'milkdown', doc);

    // editor.action((ctx) => {
    //   const collabService = ctx.get(collabServiceCtx);
    //   collabService
    //   // bind doc and awareness
    //   .bindDoc(doc)
    //   .setAwareness(wsProvider.awareness)
    //   // connect yjs with milkdown
    //   .connect();
    // });

  },
  methods:{
    connect(){
      this.collabManager.connect();
    },
    disconnect(){
      this.collabManager.disconnect();
    },
    open(){
      this.room = this.room.trim()
      if(this.room.length >0){
          this.collabManager.openRoom(this.room);
      }

    }
  }
};

</script>

<style lang="css" scoped>
. {

}
</style>
