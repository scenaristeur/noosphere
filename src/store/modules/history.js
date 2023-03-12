// import Vue from 'vue'




const state = () => ({
  ipfs: null,
  cid: null
  /*  editor: null,
   markdownContent : null,
   parent: null */
  // editorData: null,
  // editorDataDefault: {
  //   "type" : "paragraph",
  //   "data" : {
  //     "text" : "Click to edit."
  //   }
  // },
  // updates: null
  // graph: null,
  // nodes: [],
  // links: [],
  // highlightNodes: new Set(),
  // highlightLinks: new Set(),
  // currentNode: null
})

const mutations = {
  setIpfs(state, i) {
    state.ipfs = i
  },
  /*
  setMarkdownContent(state,c){
    console.log(c)
    state.markdownContent = c
  },
  setParent(state, p){
    console.log('parent', p)
    state.parent = p
  } */
  // setEditorData(state, ed){
  //   console.log('{setEditorData}', ed)
  //   state.editorData = ed
  //   // state.editorUpdated = Date.now()
  // },
  //
  // setUpdates(state, data){
  //   state.updates = data
  // }
  // setGraph(state, g){
  //   state.graph = g
  // },
  // setCurrentNode(state, n){
  //   console.log(n)
  //   state.currentNode = n
  // }
  // setLinks(state, g){
  //   state.graph = g
  // },


}

const actions = {
  async push(context, step) {
    let ipfs = context.state.ipfs
    console.log("step", ipfs, step)
    if (ipfs != null) {
   /*    const  cid1  = await ipfs.add('Hello world')
      console.info(cid1) */
      const  cid  = await ipfs.add(step.markdown)
      console.info("step cid",step.room, cid)
      cid.step = step
      context.state.cid = cid
    }

  }
  // async pushCommandHistory(context, c){
  //   context.commit('setCommand', c)
  //   context.commit('pushHistory',c)
  //   if(c.type == "triplet"){
  //     let subjectNode = context.state.nodes.find(x => x.name == c.value.subject)
  //     subjectNode == undefined ? subjectNode = await Vue.prototype.$newNode({name: c.value.subject}) : ""
  //     if (c.value.predicate.startsWith('.'))
  //     {
  //       let p = c.value.predicate.slice(1)
  //           let n = await Vue.prototype.$addProp({node: subjectNode, propertie: p, value: c.value.object})
  //             await context.dispatch('saveNode', n)
  //       await context.dispatch('getNodes')
  //     }
  //     else
  //     {
  //       let objectNode = context.state.nodes.find(x => x.id == c.value.object || x.name == c.value.object)
  //       objectNode == undefined ? objectNode = await Vue.prototype.$newNode({name: c.value.object}) : ""
  //       let nodes2save  = await Vue.prototype.$addLink({subject: subjectNode, predicate:c.value.predicate, object:objectNode})
  //       nodes2save.forEach(async function(n) {
  //         await context.dispatch('saveNode', n)
  //       });
  //       await context.dispatch('getNodes') // pose problème de rafraichissement, certainement car on a enlevé __ob & __threeObj
  //     }
  //   }
  // },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
