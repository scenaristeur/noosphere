import Vue from 'vue'

const state = () => ({
  user: null,
  users: {},
  usersUpdated: null,
  roomAddress: '',
  historyUpdated: null,
  modalUser : null
  // graph: null,
  // nodes: [],
  // links: [],
  // highlightNodes: new Set(),
  // highlightLinks: new Set(),
  // currentNode: null
})

const mutations = {
  setUser(state, u){
    state.user = u
    if (u != null && u.roomID != null){
      this.commit('actor/updateRoomHistory', u.roomID)
    }
  },
  removeRoomIDFromHistory(state, roomID){
    //  console.log(roomID)
    delete state.user.rooms[roomID]
    state.historyUpdated = Date.now()
    // console.log("deleted", state.user.rooms)
  },
  updateRoomHistory(state,roomID){
    if (roomID.length > 0){
      this.commit('actor/removeRoomIDFromHistory', roomID)
      this.commit('actor/setRoomAddress', roomID)
      state.user.rooms[roomID] = {roomID: roomID, date: Date.now()}
      //  console.log("[history]", state.user.rooms)
      Vue.prototype.$userChanged()
      state.historyUpdated = Date.now()
    }
  },
  setRoomAddress(state, r){
    //  console.log('roomAddress', r)
    state.roomAddress = r
  },

  setUsers(state, u){
    state.users = u
  },
  updateUsersStates(state, states){
    //console.log(states)
    // let clientIDs = Object.keys(states.users)
    // console.log("clientsIDs",clientIDs)
    state.users = states.users
    //this.commit('actor/setUsersUpdated', Date.now())


  },



  setUserByIDOLD(state, u){

    let mustUpdate = state.users[u.clientID] == undefined || state.users[u.clientID].roomID == undefined || state.users[u.clientID].roomID != u.roomID || state.users[u.clientID].name != u.name || state.users[u.clientID].color != u.color


    if (mustUpdate)
    {
      console.log('[store setUserByID]',mustUpdate, state.users[u.clientID], u)
      state.users[u.clientID] = u
      console.log(u.clientID, u.name,  u.roomID)
      this.commit('actor/setUsersUpdated', Date.now())

    }else{
      console.log(".")
    }
  },
  setUsersUpdated(state, d){
    state.usersUpdated = d
  },

  setModalUser(state, u){
    state.modalUser = u
  }
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
