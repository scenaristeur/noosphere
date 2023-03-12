<template>
  <div>
    <b-modal id="modal-share" @shown="share" ok-only size="lg">
      <template #modal-title>
        <h2>Share</h2>
        <b-button @click="print('fr')" size="sm" variant="info">print french QR</b-button>
        <b-button @click="print('en')" size="sm" variant="info">print eng QR</b-button>
        <b-button @click="download" disabled size="sm" variant="info">download QR</b-button>
      </template>
      <!-- <div  v-if="QRsrc"> -->
      <!-- {{ this.url}}<br> -->
      <!-- <b-button @click="saveQR" disabled size="sm" variant="info">save QR</b-button>

      <b-button @click="saveQR" disabled size="sm" variant="info">copy url</b-button> -->

      <b-alert show>The url of this room has been copied to your clipboard, you can paste it with <b>Ctrl+v</b> in any other app to share it !</b-alert>
      <b-alert show>L'url de cette room a été copié dans votre presse-papier, vous pouvez la copier avec <b>Ctrl+v</b> dans n'importe quelle autre appli pour la partager !</b-alert>


      <div id="printable">
        <!-- Let's talk about <b><u>{{user.roomID}}</u></b> at : <br>
        Discutons de <b><u>{{user.roomID}}</u></b> à l'adresse :
        <hr> -->

        <!-- <hr> -->
        <center>
          <img :src="QRsrc" width="75%" />
          <hr>
          
            <!-- {{this.url}} <br>or<br> -->
            <h3 style="width:100%" >{{encodeURI(this.url)}}</h3>
          <hr>
        </center>


      </div>




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
      this.url = "https://scenaristeur.github.io/noosphere?room="+this.localUser.roomID
      let title = 'Noosphere'
      let text = `[en] Share & grab ideas !\n[fr] Attrape des idées et partage les tiennes !\n\n`

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
      }
      // else {

      // let app = this
      // console.log(this.localUser)

      navigator.clipboard.writeText(this.url).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        //  app.showAlert()
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });

      // }
      await this.generateQR()
    },
    async generateQR(){
      // if (this.QRsrc == null){
      this.url = 'https://scenaristeur.github.io/noosphere/?room='+this.localUser.roomID
      this.QRsrc = await QRCode.toDataURL(encodeURI(this.url), {color: {light: '#98faf5'}})
      // }else{
      //   this.QRsrc = null
      // }

    },
    // countDownChanged(dismissCountDown) {
    //   this.dismissCountDown = dismissCountDown
    // },
    // showAlert() {
    //   this.dismissCountDown = this.dismissSecs
    // },
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
    print(lang)
    {
      let annonce = {fr: "Parlons de :<br>", en: "Let's talk about :<br>"}
      let text = {en: "Share & grab ideas !", fr:"Attrape des idées et partage les tiennes !"}
      let title = "NOOSPHERE"


      let divName = 'printable'
      var mywindow = window.open('', 'PRINT', 'height=400,width=600');

      mywindow.document.write('<html><head><title>' + this.localUser.roomID + '</title>');
      mywindow.document.write('</head><body >');
      mywindow.document.write("<h1>"+title+ "</h1>");
      mywindow.document.write("<h2>"+text[lang]+"</h2>");
      mywindow.document.write(document.getElementById(divName).innerHTML);
      mywindow.document.write("<h2>"+annonce[lang]+" " + this.localUser.roomID  + "</h2>");
      mywindow.document.write('</body></html>');

      //  mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      //mywindow.close();

      //return true;
    }
  },
  computed: {
    localUser() {
      return this.$store.state.noosphere.localUser
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
