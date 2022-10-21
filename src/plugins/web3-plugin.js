import { Web3Storage } from 'web3.storage';
let client = null

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$web3Init = async function(){
      let web3Token = localStorage.getItem('noosphere-web3storage-token')
      if (web3Token != null){
        await store.commit('web3/setToken', web3Token)
        store.commit('util/spinnerAdd', 'web3list')
        //  let uploads =
        await Vue.prototype.$web3list(web3Token)
        //  console.log("Web3 uploads",uploads)
        store.commit('util/spinnerRemove', 'web3list')
      }
    }


    Vue.prototype.$web3list = async function(token){
      client = new Web3Storage({ token: token });
      const uploads = [];
      for await (const item of client.list({ maxResults: 20 })) {
        uploads.push(item);
      }
      console.log(uploads)
      // console.log("list")
      // this.uploads = uploads
      store.commit('web3/setUploads', uploads)
      return uploads
    }

    Vue.prototype.$web3Pin = async function(options){
      store.commit('web3/resetPinMessages')
      let token = store.state.web3.token
      if( token == null || token.length == 0){
        alert("you need a web3.storage token, see https://web3.storage/docs/")
        opts.router.push('/config')
        return
      }else {
        localStorage.setItem('noosphere-web3storage-token', token);
        //  console.log(token, this.user.roomID, options.data)
        let file = new File([options.data], options.fileName+'.json')
        console.log(file)
        store.commit('web3/addPinMessage', "[pinning]: "+options.fileName)

        client = new Web3Storage({ token: token });


        const onRootCidReady = rootCid => {
          console.log('-- root cid:', rootCid)
          store.commit('web3/addPinMessage', "[root cid] "+rootCid)
        }
        const onStoredChunk = chunkSize => {
          console.log(`stored chunk of ${chunkSize} bytes`)
          store.commit('web3/addPinMessage', "[stored chunk of] "+chunkSize+' bytes')
        }

        const rootCid = await client.put([file], {
          name: options.fileName, //+'_'+Date.now(),
          maxRetries: 3,
          onRootCidReady,
          onStoredChunk
        });
        console.log(rootCid)
        store.commit('web3/addPinMessage', "[done]")

        Vue.prototype.$web3list(token)
        return rootCid
      }



    }

    Vue.prototype.$web3Load = async function(cid){
      Vue.prototype.$spinnerAdd('web3 load')
      console.log(cid)
      // this.$bvModal.hide("modal-pin")
      let app = this
      const res = await client.get(cid); // Web3Response
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
            app.$loadCid({roomID: file.name.split(".json")[0], cid: file.cid, result: JSON.parse(stringData)})
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
    }

    Vue.prototype.$loadCid = async function(data){
      console.log(data)
      //  let user = store.state.actor.user
      //user.roomID = data.roomID
      // let editorData = data.content
      // store.commit('editor/setEditorData', editorData)
      //  store.commit('actor/setUser', user)
      //  await Vue.prototype.$applyUpdate(data.content)
      //  await Vue.prototype.$connect({data: data, origin: 'web3.loadCid'})
      Vue.prototype.$openRoom({id: data.roomID, content: data.result.content})
      Vue.prototype.$spinnerRemove('web3 load')
      console.log('{parent room}',data.result.parent)


    }




  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
