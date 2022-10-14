<template>
  <b-modal id="modal-pin" title="Pin Data on Web3.storage" size="lg" @shown="populate">

    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-small" >Filename:</label>
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
    <b-button @click="pin" :disabled="token == null">Pin it</b-button>
    <br>

    see <a href="https://web3.storage/docs/" target="_blank"> https://web3.storage/docs/</a> (1GB free)<br>
    <a href="https://web3.storage/tokens/" target="_blank">my web3.storage tokens</a>

    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-small">Token:</label>
      </b-col>
      <b-col sm="10">
        <b-input
        id="input-small"
        v-model="token"
        @input="tokenChanged"
        size="sm"
        placeholder="web3.storage token"
        type="password" />
      </b-col>
    </b-row>



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
      token: null
    }
  },
  async created(){
    this.token = this.$store.state.web3.token
    console.log(this.token)
    // this.$solidRoomList()
    // this.$solidCreateRoom('Room_'+Date.now())
  },
  methods:{
    populate(){
      console.log('populate')
      this.$store.commit('web3/resetPinMessages')
      let now = Date.now()
      //let data = this.$roomToJson(this.user.roomId)

      // let data = this.$store.state.editor.editorData
      // delete data.clientID
      //  data.roomId = this.user.roomId
      //  data.timestamp = now
      //data.creator = this.user.name
      //let prefix = 'noos'
      let separator = '_'
      // this.fileName = prefix+separator+this.user.roomId+separator+Date.now()
      console.log(this.user)
      this.fileName = this.user.roomID+separator+now
      //data.filename = this.fileName

      // this.data = JSON.stringify(data, null, 2)
      this.data = this.$store.state.editor.markdownContent
      console.log(this.data)
      // this.fileName = this.user.roomId
      this.cid = null
    },
    async pin(){
      let data = {content: this.data, parent: this.user.roomID}
      this.cid = await this.$web3Pin({data: JSON.stringify(data), fileName: this.fileName})
    },
    async tokenChanged(){
      localStorage.setItem('noosphere-web3storage-token', this.token);
      await this.$web3list(this.token)
      //console.log("Web3 uploads",uploads)
    },
  },
  watch:{
    web3Token(){
      this.token = this.web3Token
    },
    // fileName(){
    //   this.populate()
    // }
    // token(){
    //   if (this.token!= null){
    //     this.tokenChanged()
    //     // let uploads = this.$web3list(this.token)
    //     // console.log("Web3 uploads",uploads)
    //   }
    // }
  },
  computed: {
    web3Token(){
      return this.$store.state.web3.token
    },
    user() {
      return this.$store.state.noosphere.localUser
    },
    messages(){
      return this.$store.state.web3.pinMessages
    },
    markdownContent(){
      return this.$store.state.editor.markdownContent
    }
  }


}
</script>
