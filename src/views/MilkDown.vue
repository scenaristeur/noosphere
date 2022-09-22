<template>
<div>
  <div ref="editor"></div>
</div>
</template>

<script>
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { collaborative, collabServiceCtx } from '@milkdown/plugin-collaborative';

import { WebsocketProvider } from 'y-websocket';
import { Doc } from 'yjs';

export default {
    name: 'MilkDown',
    props: {
        msg: String,
    },
    data(){
      return{
        default: '#Header'
      }
    },
    async mounted() {
        const editor = await Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, this.$refs.editor);
                ctx.set(defaultValueCtx, this.default);
            })
            .use(nord)
            .use(commonmark)
            .use(collaborative)
            .create();


            const doc = new Doc();
               const wsProvider = new WebsocketProvider('ws://localhost:1234', 'milkdown', doc);

               editor.action((ctx) => {
                   const collabService = ctx.get(collabServiceCtx);

                   collabService
                       // bind doc and awareness
                       .bindDoc(doc)
                       .setAwareness(wsProvider.awareness)
                       // connect yjs with milkdown
                       .connect();
               });

    },
};

</script>

<style lang="css" scoped>
  . {

  }
</style>
