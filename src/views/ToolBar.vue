<template>
  <div class="tool-bar">
    <div  v-if="QRsrc">
      <!-- <small>{{ this.url}}</small><br> -->
      <!-- <b-button @click="saveQR" disabled size="sm" variant="info">save QR</b-button>

      <b-button @click="saveQR" disabled size="sm" variant="info">copy url</b-button> -->

      <img :src="QRsrc" width="280px" />
      <b-button @click="QRsrc=null" size="sm" variant="info">Hide QR</b-button>
    </div>
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <b-button-group class="mx-1">
        <!-- <b-button>New</b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button> -->

        <b-button size="sm"><b-icon @click="share" font-scale="1.5" icon="share" aria-hidden="true"></b-icon></b-button>
        <b-button size="sm"><b-icon @click="openPinModal" font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></b-button>
        <b-button size="sm" @click="fork">fork</b-button>

      </b-button-group>
      <!-- <b-dropdown class="mx-1" right text="Addons">
      <b-dropdown-item @click="getLocation">
      <b-button class="nav-item mx-2" >
      <b-icon font-scale="1.5" icon="geo-alt" aria-hidden="true"></b-icon> add location
    </b-button>
  </b-dropdown-item>
  <b-dropdown-item>Wikidata Tags</b-dropdown-item>
  <b-dropdown-item>Item 3</b-dropdown-item>
</b-dropdown>
<b-button-group class="mx-1">
<b-button>Save</b-button>
<b-button>Cancel</b-button>
</b-button-group> -->
</b-button-toolbar>

{{ location}}
<b-alert
id="shareAlert"
:show="dismissCountDown"
dismissible
variant="info"
@dismissed="dismissCountDown=0"
@dismiss-count-down="countDownChanged"
>
<p><b>{{url}}</b> has been copied to your clipboard, you can paste it in any other app to share it {{ dismissCountDown }} ...</p>
<b-progress
variant="warning"
:max="dismissSecs"
:value="dismissCountDown"
height="4px"
></b-progress>
</b-alert>
<Web3Modal />

</div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'ToolBar',
  components: {
    'Web3Modal': ()=>import('@/views/Web3Modal'),
  },
  data(){
    return{
      location: null,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      QRsrc: null,
      url: null
    }
  },
  methods: {
    share(){
      this.url = "http://scenaristeur.github.io/noosphere?room="+this.user.roomId
      let title = 'Noosphere'
      let text = "\nCheck this idea I want to share in Noosphere !\n\n  "

      if (navigator && navigator.share) {
        let share = {
          title: title,
          text: text,
          url: this.url,
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

        navigator.clipboard.writeText(this.url).then(function() {
          console.log('Async: Copying to clipboard was successful!');
          app.showAlert()
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });

      }
      this.generateQR()
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    openPinModal(){
      console.log("open")
      this.$bvModal.show("modal-pin")
    },
    getLocation(){
      console.log('getting location')
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
    },
    async generateQR(){
      if (this.QRsrc == null){
        this.url = 'https://scenaristeur.github.io/noosphere/?room='+this.user.roomId
        this.QRsrc = await QRCode.toDataURL(this.url, {color: {light: '#98faf5'}})
      }else{
        this.QRsrc = null
      }

    },
    fork(){
      alert('not implemented yet, see More menu to help !')
    }
  },
  computed: {
    user() {
      return this.$store.state.core.user
    },
  }


}
</script>

<style lang="css" scoped>
.tool-bar {

}
</style>
