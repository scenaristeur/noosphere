<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
  <li class="nav-item active">
  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</li>
<li class="nav-item">
<a class="nav-link disabled" href="#">Disabled</a>
</li>
</ul>
<form class="form-inline my-2 my-lg-0">
<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
</div>
</nav> -->


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <router-link to="/" class="nav-item mx-2"><b-icon font-scale="1.5" icon="house" aria-hidden="true"></b-icon> </router-link>


  <router-link to="/user" class="nav-item mx-2"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon></router-link>
  <router-link to="/editor" class="nav-item mx-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
  <router-link to="/room" class="nav-item mx-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
  <router-link to="##"  class="nav-item mx-2"><b-icon @click="openPinModal" font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></router-link>
  <router-link to="/about" class="nav-item mx-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
  <router-link to="###" class="nav-item mx-2"><b-icon @click="getLocation" font-scale="1.5" icon="geo-alt" aria-hidden="true"></b-icon></router-link>
  <router-link to="/config" class="nav-item mx-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>

</nav>

<!--

<nav class="navbar navbar-dark bg-dark" style="background-color: #e3f2fd;">

<ul class="navbar-nav mr-auto">
<router-link to="/" class="nav-item"><b-icon font-scale="1.5" icon="house" aria-hidden="true"></b-icon> </router-link>
<router-link to="/editor" class="m-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
<router-link to="/user" class="mx-auto"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon></router-link>


<router-link to="/room" class="m-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
<router-link to="/config" class="m-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>
<router-link to="#"  class="m-2"><b-icon @click="share" font-scale="1.5" icon="share" aria-hidden="true"></b-icon></router-link>
<router-link to="##"  class="m-2"><b-icon @click="openPinModal" font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></router-link>
<router-link to="/about" class="m-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
<router-link to="###" class="ml-2"><b-icon @click="getLocation" font-scale="1.5" icon="geo-alt" aria-hidden="true"></b-icon></router-link>
</ul>
</nav> -->

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



<b-modal id="modal-pin" title="Pin Data on Web3.storage">

  see <a href="https://web3.storage/docs/" target="_blank"> https://web3.storage/docs/</a> (1GB free)<br>
  <a href="https://web3.storage/tokens/" target="_blank">your web3.storage tokens</a>
  <b-input v-model="token" @input="tokenChanged" placeholder="web3.storage token" />
  <!-- {{uploads}} -->

  <div v-if="uploads != null && uploads.length> 0">
    Your 20 last uploads :

    <ul>
      <li v-for="u in uploads" :key="u._id">
        <!-- <a href="">{{u.name}}</a> -->
        <b-button class="m-0" size="sm" variant="light" @click="clickUpload(u)">{{u.name}}</b-button>

      </li>
    </ul>


  </div>

  <b-input v-model="fileName" placeholder="filename" />


  <b-form-textarea
  id="textarea"
  v-model="data"
  placeholder="Enter something..."
  rows="3"
  max-rows="6"
  ></b-form-textarea>
  <b-button @click="pin">Pin it</b-button>
  <br>
  {{ messages }}
  <br>
  <span v-if="cid != null">

    saved on ipfs with cid
    <a :href="'https://'+cid+'.ipfs.w3s.link/'" target="_blank">{{cid}}</a>
  </span>

</b-modal>

<b-alert variant="info" show>
  <router-link to="/about" class="m-2">What is Noosphere<b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
  <br><i><small>version: users rooms dialog</small></i>
  {{ location}}
</b-alert>

</div>
</template>


<script>
import { Web3Storage } from 'web3.storage';
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
      fileName: "",
      token: null,
      messages: [],
      cid: null,
      uploads: null,
      location: null
    }
  },

  created(){
    console.log(this.$route)
    this.$coreInit({name: "SuperCore", route: this.$route})
  },
  mounted(){
    let web3Token = localStorage.getItem('noosphere-web3storage-token')
    this.$store.commit('core/setWeb3Token', web3Token)
    console.log('token', web3Token)

  },
  methods:{

    // TODO geolocation
    // https://www.w3schools.com/html/html5_geolocation.asp


    share(){
      let url = "http://scenaristeur.github.io/noosphere?room="+this.user.roomId
      let title = 'Noosphere'
      let text = "\nCheck this idea I want to share in Noosphere !\n\n  "

      if (navigator && navigator.share) {
        let share = {
          title: title,
          text: text,
          url: url,
        }

        // pour partager le QR code
        let filesArray = []
        if (navigator.canShare({ files: filesArray })){
          share.files = filesArray
        }


        window.navigator
        .share(share)
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
      } else {

        let app = this
        console.log(this.user)

        navigator.clipboard.writeText(url).then(function() {
          console.log('Async: Copying to clipboard was successful!');
          app.showAlert()
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });

      }

    },
    openPinModal(){
      let data = this.$store.state.core.editorData
      delete data.clientID
      this.data = JSON.stringify(data, null, 2)
      this.fileName = this.user.roomId
      this.cid = null
      this.$bvModal.show("modal-pin")
    },
    async pin(){
      if( this.token == null || this.token.length == 0){
        alert("you need a web3.storage token, see https://web3.storage/docs/")
        return
      }else {
        localStorage.setItem('noosphere-web3storage-token', this.token);
        console.log(this.token, this.user.roomId, this.data)
        this.file = new File([this.data], this.fileName+'.json')
        console.log(this.file)
        this.messages.push("[pinning]: "+this.fileName)

        this.client = new Web3Storage({ token: this.token });


        const onRootCidReady = rootCid => {
          console.log('-- root cid:', rootCid)
          this.messages.push("[root cid] "+rootCid)
        }
        const onStoredChunk = chunkSize => {
          console.log(`stored chunk of ${chunkSize} bytes`)
          this.messages.push("[stored chunk of] "+chunkSize+' bytes')
        }

        const rootCid = await this.client.put([this.file], {
          name: 'noosphere_'+this.fileName,
          maxRetries: 3,
          onRootCidReady,
          onStoredChunk
        });
        console.log(rootCid)
        this.messages.push("[done]")
        this.cid = rootCid
        this.list()
      }



    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    async list(){

      this.client = new Web3Storage({ token: this.token });
      const uploads = [];
      for await (const item of this.client.list({ maxResults: 20 })) {
        uploads.push(item);
      }
      console.log(uploads)
      console.log("list")
      this.uploads = uploads
    },
    tokenChanged(){
      localStorage.setItem('noosphere-web3storage-token', this.token);
      this.list()
    },
    async clickUpload(u){
      console.log(u)
      this.$bvModal.hide("modal-pin")
      let app = this
      const res = await this.client.get(u.cid); // Web3Response
      if(res.ok != false){
        const files = await res.files(); // Web3File[]
        for (const file of files) {
          console.log(file)
          console.log(`${file.cid} ${file.name} ${file.size}`);
          var fileReader = new FileReader();
          fileReader.onloadstart = function(progressEvent) {
            //resetLog();
            console.log("onloadstart!");
            var msg = "File Name: " + file.name + "<br>" +
            "File Size: " + file.size + "<br>" +
            "File Type: " + file.type;

            console.log(msg, progressEvent);
          }

          fileReader.onload = function(progressEvent) {
            console.log("onload!");

            var stringData = fileReader.result;
            console.log(" ---------------- File Content ----------------: ");
            console.log(stringData, progressEvent);
            app.$loadCid({roomId: file.name.split(".json")[0], cid: file.cid, content: JSON.parse(stringData)})
          }

          fileReader.onloadend = function(progressEvent) {
            console.log("onloadend!");
            // FileReader.EMPTY, FileReader.LOADING, FileReader.DONE
            console.log("readyState = " + fileReader.readyState, progressEvent);
          }

          fileReader.onerror = function(progressEvent) {
            console.log("onerror!", progressEvent);
            console.log("Has Error!");
          }

          // Read file asynchronously.
          fileReader.readAsText(file, "UTF-8"); // fileReader.result -> String.



        }
        // const info = await this.client.status(this.rootCid);
        // console.log(`${info.cid} ${info.dagSize} ${info.created}`);
      }else{
        console.log(res)
      }
    },
    getLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.location = "Geolocation is not supported by this browser.";
        console.log("location", this.location)
      }
    },
    showPosition(position) {
      this.location = "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;
      console.log("location", this.location)
    }
  },
  watch:{
    web3Token(){
      this.token = this.web3Token

    },
    token(){
      if (this.token!= null){
        this.list()
      }
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
