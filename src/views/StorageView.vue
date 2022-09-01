<template>
  <div class="storage-view">
    StorageView Web3.storage<br>
    <input v-model="apiToken" placeholder="api token" /> https://web3.storage/<br>
    <div v-if="apiToken.length > 0">
      PUT : <br>
      <input v-model="name" placeholder="name of pack" /><br>
      <input @change="put" ref="input" id="input" type="file" multiple/>
      GET :<br>
      <input v-model="rootCid" placeholder="cid to get" @input="cidChanged"/><br>
    </div>
    <!-- <b-button @click="put">Put</b-button> -->
  </div>
</template>

<script>
//    https://web3.storage/docs/reference/js-client-library/
import { Web3Storage } from 'web3.storage';

export default {
  name: 'StorageView',
  data(){
    return{
      client: null,
      name: "name",
      apiToken: "Your web3.storage token",
      rootCid: ''
    }
  },
  created(){


    // Construct with token and endpoint
    this.client = new Web3Storage({ token: this.apiToken });
    // Return the names of 10 uploads
    this.list()
  },
  methods:{
    //https://web3.storage/docs/reference/js-client-library/#store-car-files
    // storeDAgJON(){
    //   import { Web3Storage } from 'web3.storage'
    //   import { CarReader, CarWriter } from '@ipld/car'
    //   import { encode } from 'multiformats/block'
    //   import * as json from '@ipld/dag-json'
    //   import { sha256 } from 'multiformats/hashes/sha2'
    //
    //   async function storeDagJSON (jsonObject) {
    //     // encode the json object into an IPLD block
    //     const block = await encode({ value: jsonObject, codec: json, hasher: sha256 })
    //
    //     // create a new CarWriter, with the encoded block as the root
    //     const { writer, out } = CarWriter.create([block.cid])
    //
    //     // add the block to the CAR and close it
    //     writer.put(block)
    //     writer.close()
    //
    //     // create a new CarReader we can hand to Web3.Storage.putCar
    //     const reader = await CarReader.fromIterable(out)
    //
    //     // upload to Web3.Storage using putCar
    //     console.log('uploading car.')
    //     const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })
    //     const cid = await client.putCar(reader, {
    //       name: 'putCar using dag-json',
    //
    //       // include the dag-json codec in the decoders field
    //       decoders: [json]
    //     })
    //     console.log('Stored dag-json data! CID:', cid)
    //   }
    //
    //   storeDagJSON({
    //     hello: 'world'
    //   })
    // },
    async list(){
      const uploads = [];
      for await (const item of this.client.list({ maxResults: 10 })) {
        uploads.push(item);
      }
      console.log(uploads)
    },
    async cidChanged(){
      console.log("get")

      const res = await this.client.get(this.rootCid); // Web3Response
      if(res.ok != false){
        const files = await res.files(); // Web3File[]
        for (const file of files) {
          console.log(file)
          console.log(`${file.cid} ${file.name} ${file.size}`);
        }
        // const info = await this.client.status(this.rootCid);
        // console.log(`${info.cid} ${info.dagSize} ${info.created}`);
      }else{
        console.log(res)
      }
    },
    async put(){
      let fileInput = this.$refs.input
      // console.log(this.files)
      // Pack files into a CAR and send to web3.storage
      const onRootCidReady = rootCid => console.log('-- root cid:', rootCid);
      const onStoredChunk = chunkSize => console.log(`stored chunk of ${chunkSize} bytes`);

      const rootCid = await this.client.put(fileInput.files, {
        name: 'noos pics_'+this.name,
        maxRetries: 3,
        onRootCidReady,
        onStoredChunk
      });
      console.log(rootCid)
    }
  }


}
</script>

<style lang="css" scoped>
.storage-view {

}
</style>
