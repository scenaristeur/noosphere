<template>
  <div class="qr-view">
    <span v-if="roomId.length !=0">
      <b-button size="sm" variant="info" @click="generateQR">Share</b-button> or
    </span>
    <b-button size="sm" variant="outline-info" @click="toggle_qr_scanner">QR scan</b-button>
    <div id="reader" ref="reader" width="600px"></div>
    <div  v-if="QRsrc">
      <small>{{ this.url}}</small><br>
      <b-button @click="saveQR" disabled size="sm" variant="info">save QR</b-button>

      <b-button @click="saveQR" disabled size="sm" variant="info">copy url</b-button>
      <b-button @click="QRsrc=null" size="sm" variant="info">hide</b-button>
      <img :src="QRsrc" width="280px" /><br>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import {Html5QrcodeScanner} from "html5-qrcode"

export default {
  name: 'QrView',
  props:['roomId'],
  data(){
    return{
      QRsrc: null,
    }
  },
  methods:{
    async generateQR(){
      this.url = 'https://scenaristeur.github.io/noosphere/?room='+this.roomId
      this.QRsrc = await QRCode.toDataURL(this.url, {color: {light: '#98faf5'}})
    },
    toggle_qr_scanner(){
      if(this.$refs.reader.innerHTML == ""){
        this.scanner = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: {width: 250, height: 250} },
          /* verbose= */ false);
          this.scanner.render(this.onScanSuccess, this.onScanFailure);
        }
        else{
          console.log(this.scanner)
          this.scanner = null
          // this.scanner.stop().then(() => {
          //   // QR Code scanning is stopped.
          this.$refs.reader.innerHTML = ""
          this.$refs.reader.style = ""
        }
      },
      onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        let eq_splitted = decodedText.split('=')
        if(eq_splitted[0] == 'https://scenaristeur.github.io/noosphere/?room'){
          this.$emit('roomIdChanged', eq_splitted[1])
        }else{
          console.log("i don't know what to do with", eq_splitted)
        }
      },

      onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
        //this.scanner = error
      },
      saveQR(){
        console.log('todo', this.QRsrc)
      },
    }


  }
  </script>

  <style lang="css" scoped>
  .qr-view {

  }
  </style>
