import Vue from 'vue'

const state = () => ({
  user: null,
  awareness: null,
  users: {},
  query: null,
  usersUpdateDate: null,
  yDoc: null,
  yMap: null,
  web3Token: null,
  editorData: null,
  services: [],
  uploads: [],
  pinMessages: [],
  editorDataDefault: {
    // "time" : 1550476186479,
    "blocks" : [
      // {
      //   "type" : "paragraph",
      //   "data" : {
      //     "text" : "You have just opened a new room in the"
      //   }
      // },
      {
        "type" : "header",
        "data" : {
          "text" : "Title",
          "level" : 2
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Click to edit."
        }
      }
    ],
    // "version" : "2.8.1"
  }
})

const mutations = {
  setYdoc(state, d){
    state.yDoc = d
  },
  setYmap(state, m){
    state.yMap = m
  },
  setEditorData(state, ed){
    state.editorData = ed
  },
  setQuery(state, q){
    state.query = q
  },
  setUser(state, u){
    state.user = u
    this.commit('core/updateRoomHistory', u.roomId)
  },
  removeRoomIdFromHistory(state, roomId){
    //  console.log(roomId)
    delete state.user.rooms[roomId]
    // console.log("deleted", state.user.rooms)
  },
  updateRoomHistory(state,roomId){
    if (roomId.length > 0){
      this.commit('core/removeRoomIdFromHistory', roomId)
      state.user.rooms[roomId] = {roomId: roomId, date: Date.now()}
      //  console.log("[history]", state.user.rooms)
      Vue.prototype.$userChanged()
    }
  },
  setAwareness(state, a){
    state.awareness = a
  },
  setUsers(state, u){
    state.users = u
  },
  setUserById(state, u){
    //  console.log('[store setUserById]',u)
    state.users[u.clientID] = u
    //  console.log(state.users)
  },
  setUsersUpdateDate(state, d){
    state.usersUpdateDate = d
  },
  setWeb3Token(state, t){
    state.web3Token = t
  },
  updateServices(state, s){
    state.services = s
  },
  setUploads(state,u){
    state.uploads = u
  },
  resetPinMessages(state){
    state.pinMessages = []
  },
  addPinMessage(state, m){
    state.pinMessages.push(m)
  }

}

const actions = {
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
