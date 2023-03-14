<template>
  <div>
  <div ref="editor" class="editor"></div>
  Ariane <ArianeHistory /> modifs
  </div>
</template>

<script>
  import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
  import { nord } from '@milkdown/theme-nord';
  import { commonmark } from '@milkdown/preset-commonmark';
  import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { collab, /*collabServiceCtx*/ } from '@milkdown/plugin-collab';
  
  
  
  export default {
    name: 'MilkEditor',
    components: {
    'ArianeHistory': ()=>import('@/components/ArianeHistory'),
  },
  data(){
    return{
      roomID: null,
      default: "### Welcome to the Noosphere \n1. Choose a room in the top input bar\n 2. click to edit",
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

        let step = {room: this.$store.state.noosphere.room, markdown: markdown}
        this.$store.dispatch('history/push', step)
      });
        })
        .config(nord)
        .use(commonmark)
        .use(collab)
        .use(listener)
        .create();

        this.$store.commit('editor/setEditor', editor)
        let room = this.$store.state.noosphere.room
    console.log('room', room)
    this.$connectMilkdown('milkdown mounted')
    },
    watch:{
    room(){
      console.log(this.room)
      this.$connectMilkdown('milk watch room')
    }
  },

  computed: {
     room() {
      return this.$store.state.noosphere.room
    },
  }
  };
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

</style>