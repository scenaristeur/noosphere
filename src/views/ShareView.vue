<template>
  <div class="about">
    <h1>This is a share page</h1>


    <b-container fluid>
      <b-row class="my-1" v-for="(value, field) in query" :key="field">
        <b-col sm="3">
          <label :for="`share-field-${field}`"><code>{{ field }}</code>:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
          :id="`share-field-${field}`"
          :placeholder="field"
          :value="value"></b-form-input>
        </b-col>

      </b-row>
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

user {{ user}}
<hr>
test if room exist --> if yes show existing room
append/add to room ? create new room ? replace ?
<hr>
<b-button @click="save" size="sm" variant="info">Create a new Room </b-button>
<b-button @click="save" size="sm" variant="info">Appens to room</b-button>
</b-container>

{{ query }}
<hr>
title: "title",
text: "text",
url: "url"
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
      fields: []
    }
  },
  created(){
    console.log(this.$route.query)
    this.query = this.$route.query
    this.query["more comment"] == undefined ? this.query["more comment"] = '' : ''
  },
  methods: {
    save(){
      console.log("save", this.query)
    }
  },
  computed: {
    user() {
      return this.$store.state.core.user
    }
  }
}

</script>
