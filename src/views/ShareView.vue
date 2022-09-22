<template>
  <div class="about">
    <h3>Share in the Noosphere</h3>


    <b-container fluid>


      <b-row class="my-1" v-for="(value, field) in query" :key="field">
        <b-col sm="3">
          <label :for="`share-field-${field}`"><code>{{ field }}</code>:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
          :id="`share-field-${field}`"
          :placeholder="field"
          :value="value"
          ></b-form-input>
        </b-col>

      </b-row>
      <hr>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="roomId"><code>roomId</code>:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
          id="roomId"
          placeHolder="roomId"
          v-model="roomId"
          @input="changeRoomId"
          ></b-form-input>
        </b-col>

      </b-row>
      <hr>
      <!-- <b-row>
      <b-col sm="3">
      <label :for="`share-field-more-comment`"><code>More comment</code>:</label>
    </b-col>
    <b-col sm="9">
    <b-form-input
    :id="`share-field-more-comment`"
    placeholder="more comment"
    v-model="query.more_comment"></b-form-input>
  </b-col>
</b-row> -->
<hr>



<div v-if="dataTemp!= undefined">
  Room with id {{roomId}} exist ->
  <b-button  @click="append" size="sm" variant="info">Append to room</b-button> or change roomId above.
</div>
<div v-else>
  Room with id {{roomId}} does not exist ->
  <b-button @click="create" size="sm" variant="info">Create a new Room </b-button> or change roomId to append to an existing room.
</div>
</b-container>

<div v-if="dataTemp != undefined">
  <hr><hr>
  Found in room <b>{{roomId}}</b> :<br>{{ dataTemp.blocks}}
</div>
<!-- <hr>
title: "title",
text: "text",
url: "url"

user {{ user}}
<hr>
if yes show existing room
append/add to room ? create new room ? replace ?
<hr>
{{ query }}
<hr> -->
<!-- -{{query}}-query
<div v-for="(value, field) in query" :key="field">
{{field}} :
<b-input :placeholder="field"
:value="value"
/> -->
<!-- </div> -->
<!-- <b-input v-for="(value, field) in query" :key="field" :placeholder="field.name" :value="field.value" /> -->

</div>
</template>

<script>

export default {
  name: 'ShareView',
  data(){
    return{
      query: null,
      fields: [],
      dataTemp: undefined,
      roomId: null
    }
  },
  created(){
    console.log(this.$route.query)
    this.query = this.$route.query
    this.query["more comment"] == undefined ? this.query["more comment"] = '' : ''
    this.roomId = this.$route.query.title
    this.getDataTemp()
  },
  // mounted(){
  //   this.getDataTemp()
  // },
  methods: {
    async getDataTemp(){
      this.dataTemp = await this.$getEditorMap(this.roomId)
      console.log('{dataTemp}',this.dataTemp)
    },
    async append(){

      let newBlocks = [
        {
          "type" : "header",
          "data" : {
            "text" : this.query.title,
            "level" : 2
          }
        },
        {
          "type" : "paragraph",
          "data" : {
            "text" : this.query.text
          }
        },

        {
          "type" : "paragraph",
          "data" : {
            "text" : "<a href='"+this.query.url+"'>"+this.query.url+"</a>"
          }
        },
        {
          "type" : "paragraph",
          "data" : {
            "text" : this.query['more_comment']
          }
        }
      ]
      let dataBlocks = this.dataTemp.blocks.concat(newBlocks);
      this.dataTemp.blocks = dataBlocks
      let data = this.dataTemp

      console.log("append", this.query, data, this.roomId)
      this.user.roomId = this.roomId
      await this.$store.commit('actor/setUser', this.user)

      //await this.$saveMap(this.roomId,data)

      await this.$openRoom()
      this.$store.commit('editor/setEditorData', data)

    },
    async create(){

      let data = {
        // "time" : 1550476186479,
        "blocks" : [
          {
            "type" : "header",
            "data" : {
              "text" : this.query.title,
              "level" : 2
            }
          },
          {
            "type" : "paragraph",
            "data" : {
              "text" : this.query.text
            }
          },

          {
            "type" : "paragraph",
            "data" : {
              "text" : "<a href='"+this.query.url+"'>"+this.query.url+"</a>"
            }
          },
          {
            "type" : "paragraph",
            "data" : {
              "text" : this.query['more_comment']
            }
          }
        ],
        // "version" : "2.8.1"
      }

      console.log("create", this.query, data, this.roomId)
      this.user.roomId = this.roomId
      await this.$store.commit('actor/setUser', this.user)

      //await this.$saveMap(this.rotitle_not_existomId,data)

      await this.$openRoom()
      this.$store.commit('editor/setEditorData', data)


    },
    changeRoomId(){
      this.getDataTemp()
    }
  },
  watch:{
    user(){
      this.getDataTemp()
    }
  },
  computed: {
    user() {
      return this.$store.state.actor.user
    }
  }
}

</script>
