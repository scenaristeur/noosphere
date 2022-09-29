<template>
  <div>
    <b-modal id="modal-share" @shown="share" ok-only>
      <template #modal-title>
        <h2>Share</h2>
        <b-button @click="print" size="sm" variant="info">print QR</b-button>
        <b-button @click="download" disabled size="sm" variant="info">download QR</b-button>
      </template>
      <!-- <div  v-if="QRsrc"> -->
      <!-- {{ this.url}}<br> -->
      <!-- <b-button @click="saveQR" disabled size="sm" variant="info">save QR</b-button>

      <b-button @click="saveQR" disabled size="sm" variant="info">copy url</b-button> -->
      <div id="printable">
        Let's talk about <b><u>{{user.roomId}}</u></b> at : <br>
        Discutons de <b><u>{{user.roomId}}</u></b> à l'adresse :
        <hr>
        {{this.url}}
        <hr>
        <img :src="QRsrc" width="280px" />

      </div>

      <p>
        the url has been copied to your clipboard, you can paste it with Ctrl+v in any other app to share it</p>

        <br>


        <!-- </div> -->



      </b-modal>
      <!-- <b-alert
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
    </b-alert> -->
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
    async share(){
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
      await this.generateQR()
    },
    async generateQR(){
      // if (this.QRsrc == null){
      this.url = 'https://scenaristeur.github.io/noosphere/?room='+this.user.roomId
      this.QRsrc = await QRCode.toDataURL(this.url, {color: {light: '#98faf5'}})
      // }else{
      //   this.QRsrc = null
      // }

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
    print1() {
      let divName = 'printable'
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    },
    print()
    {
      let divName = 'printable'
      var mywindow = window.open('', 'PRINT', 'height=400,width=600');

      mywindow.document.write('<html><head><title>' + this.user.roomId + '</title>');
      mywindow.document.write('</head><body >');
      mywindow.document.write("<h2>Let's talk about" + this.user.roomId  + "</h1>");
      mywindow.document.write(document.getElementById(divName).innerHTML);
      mywindow.document.write('</body></html>');

      //  mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      //mywindow.close();

      //return true;
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
#shareAlert {
  position: fixed;
  bottom: 0px;
}
</style>
