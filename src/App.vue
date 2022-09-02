<template>
  <div id="app">
    <nav>

      <router-link to="/" class="m-2"><b-icon font-scale="1.5" icon="house" aria-hidden="true"></b-icon></router-link>
      <router-link to="/editor" class="m-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
      <router-link to="/user" class="m-2"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon></router-link>
      <router-link to="/room" class="m-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
      <router-link to="/config" class="m-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>
      <router-link to="/about" class="m-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
      <router-link to=""  class="m-2"><b-icon @click="share" font-scale="1.5" icon="share" aria-hidden="true"></b-icon></router-link>
      <router-link to=""  class="m-2"><b-icon @click="openPinModal" font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></router-link>
    </nav>

    <router-view/>
    <!-- user :{{ user }}<br>
    users: {{ users }} -->
    <b-alert
    id="shareAlert"
    :show="dismissCountDown"
    dismissible
    variant="warning"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"
    >
    <p>This room's link has been copied to your clipboard, you can paste it in any other app to share it {{ dismissCountDown }} ...</p>
    <b-progress
    variant="warning"
    :max="dismissSecs"
    :value="dismissCountDown"
    height="4px"
    ></b-progress>
  </b-alert>

  <b-alert variant="success" show>Noosphere 0 - <i><small>menu</small></i></b-alert>

  <b-modal id="modal-pin" title="Pin Data on Web3.storage" @ok="pin">
    <p class="my-4">
      <b-input v-model="web3Token" placeholder="web3token" />
      <b-input v-model="fileName" placeholder="filename" />

      {{data}}



    </p>
  </b-modal>

</div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'App',
  // components: {
  //   'NavBar': ()=>import('@/views/NavBar'),
  //   // 'DataCaching': ()=>import('@/views/experiments/DataCaching'),
  //   // 'LevelgraphJsonld': ()=>import('@/views/experiments/LevelgraphJsonld'),
  // },
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      data: null,
      fileName: ""
    }
  },

  created(){
    this.$coreInit({name: "SuperCore"})
  },
  methods:{
    share(){
      let app = this
      console.log(this.user)
      let text = "http://scenaristeur.github.io/noosphere?room="+this.user.roomId
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        app.showAlert()
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    },
    openPinModal(){
      let data = this.$store.state.core.editorData
      delete data.clientID
      this.data = data
      this.fileName = this.user.roomId

      this.$bvModal.show("modal-pin")
    },
    pin(){
      console.log(this.user.roomId, this.data)
      this.file = new File([this.data], this.user.roomId+'.json')
      console.log(this.file)
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  computed: {
    user() {
      return this.$store.state.core.user
    },
    users() {
      return this.$store.state.core.users
    },
    web3Token(){
      return this.$store.state.core.web3Token
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#shareAlert{
  position: absolute;
  bottom: 0px;
  z-index:10;
}
</style>
