import Vue from 'vue'

const state = () => ({
  user: null,
  awareness: null,
  users: {},
  query: null,
  usersUpdateDate: null,
  historyUpdated: null,
  // editorUpdated: null,

  yMap: null,
  editorData: null,
  services: [],

  roomAddress: '',
  pod_url: 'https://noosphere.solidcommunity.net/public/testrooms/',
  editorDataDefault: {
        "type" : "paragraph",
        "data" : {
          "text" : "Click to edit."
        }
      }
})

const mutations = {

  setYmap(state, m){
    state.yMap = m
  },
  setEditorData(state, ed){
    console.log('{setEditorData}', ed)
    state.editorData = ed
    // state.editorUpdated = Date.now()
  },
  setQuery(state, q){
    state.query = q
  },
  setUser(state, u){
    state.user = u
    if (u != null && u.roomId != null){
      this.commit('core/updateRoomHistory', u.roomId)
    }
  },
  removeRoomIdFromHistory(state, roomId){
    //  console.log(roomId)
    delete state.user.rooms[roomId]
    state.historyUpdated = Date.now()
    // console.log("deleted", state.user.rooms)
  },
  updateRoomHistory(state,roomId){
    if (roomId.length > 0){
      this.commit('core/removeRoomIdFromHistory', roomId)
      this.commit('core/setRoomAddress', roomId)
      state.user.rooms[roomId] = {roomId: roomId, date: Date.now()}
      //  console.log("[history]", state.user.rooms)
      Vue.prototype.$userChanged()
      state.historyUpdated = Date.now()
    }
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

  updateServices(state, s){
    state.services = s
  },


  setPodUrl(state, u){
    state.pod_url = u
  },
  setRoomAddress(state, r){
    console.log('roomAddress', r)
    state.roomAddress = r
  },

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
