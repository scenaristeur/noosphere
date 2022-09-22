<template>
  <b-modal id="modal-qrscan" title="QR scan" @shown="onShown" ok-only @hidden="onHidden">


    <div class="my-4" id="reader" ref="reader" width="600px"></div>


  </b-modal>
</template>

<!-- @show="resetModal"
@hidden="resetModal"
@shown -->

<script>
import {Html5QrcodeScanner} from "html5-qrcode"

export default {
  name: 'QrModal',
  methods:{
    onShown(){
      console.log('onshown')
      this.scanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
        this.scanner.render(this.onScanSuccess, this.onScanFailure);
      },
      onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        let eq_splitted = decodedText.split('=')
        if(eq_splitted[0] == 'https://scenaristeur.github.io/noosphere/?room'){
          //  this.$emit('roomIdChanged', eq_splitted[1])
          this.openRoom(eq_splitted[1])
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
      openRoom(roomId){
        console.log(roomId, this.scanner)
              let user = this.user
        user.roomId = roomId
        this.$store.commit('actor/setUser', user)

        this.$nextTick(() => {
          this.$bvModal.hide('modal-qrscan')
        })
            this.$openRoom()
      },
      onHidden(){
        console.log('onHidden', this.scanner.html5Qrcode)
        this.scanner.html5Qrcode.isScanning ? this.scanner.html5Qrcode.stop() : ""
        // this.$refs.reader.innerHTML = ""
        // this.$refs.reader.style = ""
        this.scanner = null
      },
      saveQR(){
        console.log('todo', this.QRsrc)
      },

    },
    computed:{
      user(){
        return this.$store.state.actor.user
      },
    }


  }
  </script>
