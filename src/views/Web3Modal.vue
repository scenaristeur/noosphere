<template>
  <div class="web3-modal">
    <!-- web3modal -->
    <b-modal id="modal-pin" title="Pin Data on Web3.storage" size="lg" @shown="populate">



      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Filename:</label>
        </b-col>
        <b-col sm="10">
          <b-input v-model="fileName" size="sm" placeholder="filename" />
          <!-- <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input> -->
        </b-col>
      </b-row>

      Content:
      <b-form-textarea
      id="textarea"
      v-model="data"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      ></b-form-textarea>
      <b-button @click="pin">Pin it</b-button>
      <br>
      <ul>

        <li v-for="m,i of messages" :key=i>{{m}}</li>
      </ul>
      <br>
      <span v-if="cid != null">

        saved on ipfs with cid
        <a :href="'https://'+cid+'.ipfs.w3s.link/'" target="_blank">{{cid}}</a>
      </span>




      <!-- {{uploads}} -->

      <!-- <div v-if="uploads != null && uploads.length> 0">
      Your 20 last uploads :

      <ul>
      <li v-for="u in uploads" :key="u._id">

      <b-button class="m-0" size="sm" @click="clickUpload(u)">{{u.name}}</b-button>

    </li>
  </ul>


</div> -->






</b-modal>
</div>
</template>

<script>
export default {
  name: 'Web3Modal',
  data() {
    return {
      data: null,
      fileName: "",
      // messages: [],
      cid: null,
    }
  },

  methods:{
    populate(){
      console.log('populate')
      this.$store.commit('core/resetPinMessages')
      let data = this.$store.state.core.editorData
      delete data.clientID
      data.roomId = this.user.roomId
      let prefix = 'noos'
      let separator = '_'
      this.fileName = prefix+separator+this.user.roomId+separator+Date.now()
      this.data = JSON.stringify(data, null, 2)

      // this.fileName = this.user.roomId
      this.cid = null
    },
    async pin(){
      this.cid = await this.$web3Pin({data: this.data, fileName: this.fileName})
    },
  },
  computed: {
    user() {
      return this.$store.state.core.user
    },
    messages(){
      return this.$store.state.core.pinMessages
    }
  }


}
</script>

<style lang="css" scoped>
.web3-modal {

}
</style>
