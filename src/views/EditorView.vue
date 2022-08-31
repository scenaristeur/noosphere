<template>
  <b-container fluid class="editor-view">
    Editor
    <b-button @click="save">Save</b-button>
    <div id="editorjs" ></div>
    --  {{editorData}}--
  </b-container>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import yService from '@/services/y-service';

export default {
  name: 'EditorView',
  props: ['editorData'],
  data(){
    return{
      editor: null
    }
  },
  created(){
    yService.log("EditorView created")
    this.editor = new EditorJS({
      /**
      * Id of Element that should contain the Editor
      */
      holder: 'editorjs',

      /**
      * Available Tools list.
      * Pass Tool's class or Settings object for each Tool you want to use
      */
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        list: {
          class: List,
          inlineToolbar: true
        }
      },
      onReady: () => {
        this.editor.notifier.show({
          message: 'Editor is ready!'
        });
        this.editor.blocks.render(this.editorData)
      },

      onChange: (e) => {
        this.editor.notifier.show({
          message: 'Editor has changed!'
        });
        // this.save()
        console.log(e)
      }
    })

    yService.log(this.editor)
    // this.editor.onReady

  },
  // mounted(){
  //   if (this.editorData != null){
  //     this.editor.blocks.render(this.editorData)
  //   }
  //
  // },
  methods:{
    save(){
      this.editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
        this.$emit('saveEditor', outputData)
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    }
  },
  watch:{
    editorData(){
      yService.log('watch')
      yService.log(this.editorData)
      this.editor.blocks.render(this.editorData)
      // this.editor.render()
      console.log("render")
    }
  }

}
</script>

<style lang="css" scoped>
.editor-view {

}
</style>
