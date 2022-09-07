<template>
  <b-container fluid class="editor-view">
    room: <b>{{user.roomId}}</b>
    <!-- Editor
    <b-button @click="save">Save</b-button> -->
    <div id="editorjs" ></div>
    <!--  {{editorData}} -->
  </b-container>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from "@editorjs/simple-image"
import Delimiter from "@editorjs/delimiter"
import Checklist from "@editorjs/checklist"
import Quote from "@editorjs/quote"
import CodeTool from "@editorjs/code"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import LinkTool from "@editorjs/link"
import Warning from "@editorjs/warning"
import Marker from "@editorjs/marker"
import InlineCode from "@editorjs/inline-code"
import MermaidTool from "editorjs-mermaid"
// import GoogleMap from 'editorjs-googlemap'


import yService from '@/services/y-service';

export default {
  name: 'EditorView',
  // props: ['editorData'],
  data(){
    return{
      editor: null
    }
  },
  created(){
    let app = this
    let _this = this
    console.log(_this)
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
        // header: {
        //   class: Header,
        //   inlineToolbar: ['link']
        // },
        // list: {
        //   class: List,
        //   inlineToolbar: true
        // },
        /**
        * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
        */
        mermaid: MermaidTool,
        // googleMap: {
        //   class: GoogleMap,
        //   place: 'Bangkok thailand',
        //   config: {
        //     placeholder: 'Place name or lat and long eg: 15.23999,-87.393993',
        //     searchValue: 'Search'
        //   }
        // },
        header: {
          class: Header,
          inlineToolbar: ['marker', 'link'],
          config: {
            placeholder: 'Header'
          },
          shortcut: 'CMD+SHIFT+H'
        },

        /**
        * Or pass class directly without any configuration
        */
        image: SimpleImage,

        list: {
          class: List,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+L'
        },

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
          shortcut: 'CMD+SHIFT+O'
        },

        warning: Warning,

        marker: {
          class:  Marker,
          shortcut: 'CMD+SHIFT+M'
        },

        code: {
          class:  CodeTool,
          shortcut: 'CMD+SHIFT+C'
        },

        delimiter: Delimiter,

        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+C'
        },

        linkTool: LinkTool,

        embed: Embed,

        table: {
          class: Table,
          inlineToolbar: true,
          shortcut: 'CMD+ALT+T'
        },
      },
      onReady: () => {
        MermaidTool.config({ 'theme': 'neutral' })
        this.editor.notifier.show({
          message: 'Editor is ready!'
        });
        if (this.editorData != null){
          this.editor.blocks.render(this.editorData)
        }
      },
      onChange: function(api, event) {
        //console.log('api', api.blocks.getCurrentBlockIndex())
        // currentBlockIndexRef.current= api.blocks.getCurrentBlockIndex() // update ref with the current index
        // let editorEvent = {
        //   block :  api.blocks.getCurrentBlockIndex(),
        //   event: event
        // }
        console.log(api, event)
        // app.$emit('editorEvent', editorEvent)
        app.save()
        // app.userEvent(event)
        // this.save()
        // editor.save().then((data) => {
        //
        //  setEditorData({ ...editorData,data,});
        // })

      },
      // onChange: (api) => {
      //   // this.editor.notifier.show({
      //   //   message: 'Editor has changed!'
      //   // });
      //           console.log('api', api, api.blocks.getCurrentBlockIndex())
      // //  this.save()
      //
      //   // let selection = document.getSelection();
      //   // let cursorPosition = selection.anchorOffset;
      //   // let currentBlockIndex = editor.blocks.getCurrentBlockIndex()
      // }
    })

    //  yService.log(this.editor)


    // this.editor.onReady

  },
  mounted(){
    // if (this.editorData != null){
    //   this.editor.blocks.render(this.editorData)
    // }
    const editorElement = document.getElementById('editorjs') // your "holder" ID
    //
    // editorElement.addEventListener('focusin', (e) => {
    //   // your logic
    //   console.log("focusin",e)
    // })
    // editorElement.addEventListener('focusout', (e) => {
    //   // your logic
    //   console.log("focusout",e)
    //   //  this.save()
    // })
    //
    let app = this
    editorElement.addEventListener('click', (e) => {
      // your logic
      //console.log("click",e)
      app.userEvent(e)
    })

  },
  methods:{
    userEvent(e){
      console.log(e)
      let selection = document.getSelection()
      let userEvent = {
        selection : selection,
        cursorPosition: selection.anchorOffset,
        blockindex: this.editor.blocks.getCurrentBlockIndex()}
        this.$emit('userEvent', userEvent)
      },
      save(){
        this.editor.save().then((outputData) => {
          //  console.log('Article data: ', outputData)
          this.$saveEditor(outputData)
        }).catch((error) => {
          console.log('Saving failed: ', error)
        });
      }
    },
    watch:{
      editorData(){
        //  yService.log('watch')
        yService.log(this.editorData)
        this.editor.blocks.render(this.editorData)
        // this.editor.render()
        console.log("render")
      }
    },
    computed: {
      editorData: {
        cache: false,
        get() {
          return this.$store.state.core.editorData;
        },
      },
      user() {
        return this.$store.state.core.user
      }
    }

  }
  </script>

  <style lang="css" scoped>
  .editor-view {

  }
  </style>
