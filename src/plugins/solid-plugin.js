import {
  //getSolidDataset,
  // getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  //getSolidDatasetWithAcl,
  //getPublicAccess,
  //getAgentAccess,
  //getFile,
  // isRawData,
  // getContentType,
  //saveFileInContainer,
  //getContainedResourceUrlAll,
  //getStringNoLocaleAll,
  // createContainerAt,
  getSourceUrl,
  // deleteFile,
  //removeThing,
  // removeAll,
  //removeStringNoLocale,
  //deleteContainer,
  // addStringNoLocale,
  // setThing,
  // saveSolidDatasetAt,
  //createSolidDataset,
  // createThing,
  // addUrl,
  //buildThing,

  overwriteFile,
  // getStringNoLocale,
  // getThing,
  // getUrlAll,
  // getUrl,
  //addDatetime,
  //  getDatetime,
  //setUrl,
  //setStringNoLocale,
  //setDecimal,
  //setInteger,
  //  getDecimal,
  //getInteger,
  // setDatetime
} from "@inrupt/solid-client";

// import * as jsonld from 'jsonld';
// import { RDF,  } from "@inrupt/vocab-common-rdf";

// import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$solidCreateRoom = async function(roomId){
      let pod_url = store.state.core.pod_url
      console.log(roomId)

      let room = {
        '@context': {
          dct: 'http://purl.org/dc/terms/',
          '@base': pod_url
        },
        '@id': roomId,
        created: Date.now(),
        creator: store.state.core.user.name
      }

      // let room = {
      //   "@context": "http://schema.org/",
      //   "@type": "Person",
      //   "name": "Jane Doe",
      //   "jobTitle": "Professor",
      //   "telephone": "(425) 123-4567",
      //   "url": "http://www.janedoe.com"
      // }
      //
      let path = pod_url+roomId




      const savedFile = await overwriteFile(
        path,
        new Blob([JSON.stringify(room)], { type: "application/ld+json" }),
        { contentType: "application/ld+json"
        //, fetch: sc.fetch
      }
    );
    //  console.log(savedFile)

    console.log(`File saved at ${getSourceUrl(savedFile)}`);
  }



}
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
