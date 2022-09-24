<template>
  <div class="about">
    <h1>This is an config page</h1>
    <div>  {{ services}}</div>
    <!-- <div>
    <b-form-checkbox
    id="checkbox-1"
    v-model="services"
    name="checkbox-1"
    value="web3storage"
    >
  </b-form-checkbox>

  <b-button v-b-toggle.collapse-web3 variant="primary">Web3Storage</b-button>
  <b-collapse id="collapse-web3" class="mt-2">
  <b-card>
  <p class="card-text">Collapse contents Here</p>
  <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
  <b-collapse id="collapse-1-inner" class="mt-2">
  <b-card>Hello!</b-card>
</b-collapse>
</b-card>
</b-collapse>
</div> -->


<div class="accordion" role="tablist">
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle.accordion-web3 variant="info">
        <!-- <b-form-checkbox
        id="checkbox-1"
        v-model="services"
        name="checkbox-1"
        value="web3storage"
        size="lg"
        @click.stop
        > -->
         Web3Storage
      <!-- </b-form-checkbox> -->
    </b-button>

  </b-card-header>
  <b-collapse id="accordion-web3" visible accordion="my-accordion" role="tabpanel">
    <b-card-body>


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

      <!-- <div v-if="uploads != undefined && uploads.length>0">
        <router-link to="/room" class="nav-item mx-2"><b-icon font-scale="1.5" icon="people-fill" aria-hidden="true"></b-icon> my 20 last uploads</router-link>
      </div> -->

        <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        <b-card-text>{{ text }}</b-card-text> -->
      </b-card-body>
    </b-collapse>
  </b-card>

  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle.accordion-solid variant="info">
        <!-- <b-form-checkbox
        id="checkbox-2"
        v-model="services"
        name="checkbox-2"
        value="solid"
        size="lg"
        @click.stop
        >  -->
        Solid
      <!-- </b-form-checkbox> -->
    </b-button>
  </b-card-header>

  <b-collapse id="accordion-solid" accordion="my-accordion" role="tabpanel">
    <b-card-body>
      <b-card-text>
        Where are is the persistannt list of all rooms
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-pod">Pod url:</label>
          </b-col>
          <b-col sm="10">
            <b-input
            id="input-pod"
            v-model="pod_url"
            @input="pod_urlChanged"
            size="sm"
            placeholder="pod url"
            />
          </b-col>
          <a :href="pod_url" target="_blank">open</a>
        </b-row>
        <!--

        <b-row class="my-1">
        <b-col sm="2">
        <label for="input-small">Token:</label>
      </b-col>
      <b-col sm="10">
      <b-input
      v-model="token"
      @input="tokenChanged"
      size="sm"
      placeholder="web3.storage token"
      type="password" />
    </b-col>
  </b-row> -->






</b-card-text>
</b-card-body>
</b-collapse>
</b-card>

<!-- <b-card no-body class="mb-1">
<b-card-header header-tag="header" class="p-1" role="tab">
<b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
</b-card-header>
<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
<b-card-body>
<b-card-text>{{ text }}</b-card-text>
</b-card-body>
</b-collapse>
</b-card> -->
</div>

<!-- (WIP)
Geolocation enabled /disabled<br>
Connectors
<ul>
realtime
<li>y-webrtc</li>
<li>y-websocket</li>
<li>y-indexed</li>
other
<li>Solid</li>
<li>ipfs, gun...</li>
<a href="#">add yours</a>
</ul> -->

</div>
</template>
<script>

export default {
  name: 'ConfigView',
  // components: {
  //   'QrView': ()=>import('@/vie'User_'+Date.now()ws/QrView'),
  //   // 'UserView': ()=>import('@/views/UserView'),
  // },
  data(){
    return{
      // services: [],
      text: "Todo, Work in progress",
      token: null,

    }
  },
  async created(){
    this.token = this.$store.state.web3.token
    this.$solidRoomList()
    this.$solidCreateRoom('Room_'+Date.now())
  },
  methods:{
    async tokenChanged(){
      localStorage.setItem('noosphere-web3storage-token', this.token);
      await this.$web3list(this.token)
      //console.log("Web3 uploads",uploads)
    },
    async pod_urlChanged(){
      console.log('pod_urlChanged', this.pod_url)
      this.$solidRoomList()
    }
  },
  watch:{
    web3Token(){
      this.token = this.web3Token
    },
    // token(){
    //   if (this.token!= null){
    //     this.tokenChanged()
    //     // let uploads = this.$web3list(this.token)
    //     // console.log("Web3 uploads",uploads)
    //   }
    // }
    },
  computed: {
    // services: {
    //   get() {
    //     return this.$store.state.util.services;
    //   },
    //   set(services) {
    //     this.$store.commit('util/updateServices', services)
    //   },
    //
    // },
    pod_url: {
      get() {
        return this.$store.state.util.pod_url;
      },
      set(pod_url) {
        this.$store.commit('util/setPodUrl', pod_url)
      },

    },
    web3Token(){
      return this.$store.state.web3.token
    },
    uploads(){
      return this.$store.state.web3.uploads
    }
  }
}
</script>
