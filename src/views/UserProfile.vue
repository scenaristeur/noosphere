<template>
  <b-container class="user-profile text-light">

    <b-card-group columns>
      <b-card
      bg-variant="info" text-variant="white" header="Profile"
      class="text-center mb-2"
      tag="article"
      style="max-width: 20rem;"
      >
      <b-card-title>
        username<b-input v-model="user.name" placeholder="username" />
      </b-card-title>
      <b-card-text>
        prefered color
        <b-input v-model="user.color" type="color" />
        <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
      </b-card-text>

      <b-button @click="save" variant="primary">Save</b-button>
    </b-card>

    <b-card
    bg-variant="info" text-variant="white" header="Identity Manager"
    class="text-center mb-2"
    tag="article"
    style="max-width: 20rem;"
    >
    <!-- <b-card-title>
    username<b-input v-model="user.name" placeholder="username" />
  </b-card-title> -->
  <b-card-text>

    <!-- <div class="mt-3">Selected file: {{ identityFile ? identityFile.name : '' }}</div> -->
    <!-- <b-button variant="outline-primary" size="sm" @click="import">import identity</b-button> -->
    <b-button variant="success text-dark" @click="download"><b-icon v-b-modal.modal-share font-scale="1.5" icon="download" aria-hidden="true"></b-icon>download this identity</b-button>

    <!-- prefered color
    <b-input v-model="user.color" type="color" /> -->
    <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
  </b-card-text>

  <template #footer>




    <b-alert show variant="warning">
      <h4 class="alert-heading">CAN NOT BE UNDONE !</h4>
      <p>
        You will loose your history !
      </p>
      <hr>
      <p class="mb-0">
        Be sur to download the actual identity before !
      </p>
    </b-alert>
    <!-- <b-alert class="text-danger" show>CAN NOT BE UNDONE ! <br>Be sur to downlaod the actual identity before !</b-alert> -->
    <b-form-file
    v-model="identityFile"
    :state="Boolean(identityFile)"
    placeholder="Choose a identity file or drop it here..."
    drop-placeholder="Drop identity file here..."
    ></b-form-file>
    <b-button size="sm" @click="randomUser" variant="outline-warning text-dark"><b-icon v-b-modal.modal-share font-scale="1.5" icon="dice3" aria-hidden="true"></b-icon>random user</b-button>
    <b-button variant="danger text-dark" @click="removeUser" size="sm"><b-icon v-b-modal.modal-share font-scale="1.5" icon="trash" aria-hidden="true"></b-icon>remove from this device</b-button>
  </template>

  <!-- <b-button @click="save" variant="primary">Save</b-button> -->
</b-card>

</b-card-group>

<br>
<!-- <b-button @click="randomUser" variant="outline-info" size="sm">random user</b-button> -->

<br>
{{ user }}
</b-container>
</template>

<script>
export default {
  name: 'UserProfile',
  data(){
    return{
      identityFile: null
    }
  },
  methods:{
    async randomUser(){
      let user = await this.$randomUser()
      console.log(user)
      this.$store.commit('actor/setUser', user)
      // this.$userChanged()
      // this.userChanged()
    },
    save(){
      this.$store.commit('actor/setUser', this.user)
      this.$userChanged()
      this.$router.push('/')
    },
    removeUser(){
      this.$removeUser()
      this.randomUser()
    },
    async upload (file, cb){
      const fileReader = new FileReader()

      await fileReader.addEventListener('load', () => {
        cb(fileReader.result)
      })
      fileReader.readAsText(file, "UTF-8")
      // console.log(result)
      // return result
    },
    populateIdentity(data){
      console.log('populate', data)
      let user = JSON.parse(data)
      this.$store.commit('actor/setUser', user)
      this.$userChanged()
    },
    download(){
      console.log(this.user)
      var contenu = JSON.stringify(this.user, null, 2) //`{"test": "json" }` //this.content
      //console.log("todo: poser la question compresser",contenu)
      //  var format = "json" //this.format;
      //  console.log(contenu, format)
      let suggested = this.user.name //"Brain_"+Date.now()
      var filename = prompt("Choose a name for the exported file :", suggested);
      if (filename == null || filename == "") {
        return;
      }

      let contentType = 'application/json';
      let fileNameToSaveAs = filename + ".json";

      var textFileAsBlob = new Blob([contenu], { type: contentType }
      );
      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      if(navigator.userAgent.indexOf("Chrome") != -1) {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.target="_blank";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
      }
      var event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
      );
      downloadLink.dispatchEvent(event);
      setTimeout(function(){
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadLink);
      }, 1000);
    }
  },
  watch:{
    identityFile(){
      console.log(this.identityFile)
      this.upload(this.identityFile, this.populateIdentity)
    }
  },
  computed:{
    user(){
      return this.$store.state.actor.user
    },
  }


}
</script>

<style lang="css" scoped>
.user-profile {

}
</style>
