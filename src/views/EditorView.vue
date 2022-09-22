<template>
  <b-container fluid class="editor-view text-primary ">
    <ToolBar />


    <!-- Editor
    <b-button @click="save">Save</b-button> -->
    <div id="editorjs"  class="text-light"></div>
    <div v-if="user!= null" >room: <b>{{user.roomId}}</b></div>
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
// import ToggleBlock from 'editorjs-toggle-block';
// import LinkAutocomplete from "@editorjs/link-autocomplete"
// import GoogleMap from 'editorjs-googlemap'


//import yService from '@/services/y-service';

export default {
  name: 'EditorView',
  components: {
    'ToolBar': ()=>import('@/views/ToolBar'),
  },
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
    //  yService.log("EditorView created")
    this.editor = new EditorJS({
      /**
      * Id of Element that should contain the Editor
      */
      holder: 'editorjs',
      blocks: [],

      /**
      * Available Tools list.
      * Pass Tool's class or Settings object for each Tool you want to use
      */
      tools: {
        /**
        * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
        */
        //       toggle: {
        //   class: ToggleBlock,
        //   inlineToolbar: true,
        // },

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
            placeholder: 'Enter a header',
            defaultlevel: 3
          },
          shortcut: 'CMD+SHIFT+H'
        },
        table: {
          class: Table,
          inlineToolbar: true,
          shortcut: 'CMD+ALT+T'
        },


        list: {
          class: List,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+L'
        },

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },



        warning: Warning,

        marker: {
          class:  Marker,
          shortcut: 'CMD+SHIFT+M'
        },



        delimiter: Delimiter,
        code: {
          class:  CodeTool,
          shortcut: 'CMD+SHIFT+C'
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+C'
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

        linkTool: LinkTool,
        // link: {
        //   class: LinkAutocomplete,
        //   config: {
        //     endpoint: 'http://localhost:3000/',
        //     queryParam: 'search'
        //   }
        // },

        embed: Embed,

        /**
        * Or pass class directly without any configuration
        */
        image: SimpleImage,
        mermaid: MermaidTool,
      },
      onReady: () => {
        // MermaidTool.config({ 'theme': 'neutral' })
        // this.editor.notifier.show({
        //   message: 'Editor is ready!'
        // });
        if (this.editorData != null){
          this.editor.blocks.render(this.editorData)
        }
      },
      onChange: function(api, event) {
        // blocks api https://editorjs.io/blocks
        console.log('api', api.blocks.getCurrentBlockIndex())
        let currentBlockIndexRef = {} //https://stackoverflow.com/questions/64236633/retrieve-block-and-cursor-position-on-editor-js-after-lose-focus
        currentBlockIndexRef.current= api.blocks.getCurrentBlockIndex() // update ref with the current index
        let editorEvent = {
          block :  api.blocks.getCurrentBlockIndex(),
          event: event
        }
        console.log(api, event)
        console.log('editorEvent', editorEvent, currentBlockIndexRef)
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
    render(){
      console.log('render', this.editorData)
      if (this.editor.blocks != undefined){
        this.editor.blocks.render(this.editorData)
        // this.editor.render()
        console.log("render")
      }
    },
    userEvent(e){
      console.log(e)
      let selection = document.getSelection()
      let userEvent = {
        selection : selection,
        cursorPosition: selection.anchorOffset,
        blockindex: this.editor.blocks.getCurrentBlockIndex()
      }
      console.log('userEvent', userEvent)
    },
    save(){
        this.editor.save().then((outputData) => {
        //  console.log('Article data: ', outputData)

        this.$saveEditor(outputData)
        return outputData
      }).catch((error) => {
        console.log('Saving failed: ', error)
      })
      // .then((data)=>{
      //   console.log('the data', data)
      //     this.$store.commit('editor/setEditorData', data)
      // })
    }
  },
  watch:{
    // editorUpdated(){
    //   console.log('w ed up', this.editorData)
    //   this.render()
    //   this.$forceUpdate()
    // },
    editorData(){
      //  yService.log('watch')
      //  yService.log(this.editorData)
      // if (this.editor.blocks == undefined){
      //   this.editor.blocks = []
      // }
      this.render()

    }
  },
  computed: {
    editorData: {
      cache: false,
      get() {
        return this.$store.state.editor.editorData;
      },
    },
    user() {
      return this.$store.state.actor.user
    },
  }

}
</script>

<style lang="css">
.editor-view {
  /* background-color: white; */
}
.ce-toolbar__actions {
  background-color: gray;
}
.ce-popover__items{
  background-color: #6f42c1;
}
/* .ce-popover__item hover{
color: #e83e8c;
} */

/* .text-green {
color: #3cf281
} */
/* .ce-inline-toolbar__buttons{
background-color: red;
} */
</style>
