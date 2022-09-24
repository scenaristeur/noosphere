<template>
  <div>
    <b-modal id="modal-share" title="Share" @show="share" ok-only>
      <div  v-if="QRsrc">
        {{ this.url}}<br>
        <!-- <b-button @click="saveQR" disabled size="sm" variant="info">save QR</b-button>

        <b-button @click="saveQR" disabled size="sm" variant="info">copy url</b-button> -->

        <img :src="QRsrc" width="280px" />
        <br>
        <b-button @click="download" disabled size="sm" variant="info">download QR</b-button>
        <b-button @click="print" disabled size="sm" variant="info">print QR</b-button>
      </div>


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
  </b-modal>
</div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'ShareModal',
  data(){
    return{
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      QRsrc: null,
      url: null
    }
  },
  methods:{
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
    async generateQR(){
      if (this.QRsrc == null){
        this.url = 'https://scenaristeur.github.io/noosphere/?room='+this.user.roomId
        this.QRsrc = await QRCode.toDataURL(this.url, {color: {light: '#98faf5'}})
      }else{
        this.QRsrc = null
      }

    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    download(){
      console.log('todo')
    },
    print(){
      console.log('todo')
    }
  },
  computed: {
    user() {
      return this.$store.state.actor.user
    },
  }

}
</script>

<style lang="css" scoped>
.share-modal {

}
</style>
