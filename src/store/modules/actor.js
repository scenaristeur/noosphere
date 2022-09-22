import Vue from 'vue'

const state = () => ({
  user: null,
  users: {},
  usersUpdated: null,
  roomAddress: '',
  historyUpdated: null,
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
    if (u != null && u.roomId != null){
      this.commit('actor/updateRoomHistory', u.roomId)
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
      this.commit('actor/removeRoomIdFromHistory', roomId)
      this.commit('actor/setRoomAddress', roomId)
      state.user.rooms[roomId] = {roomId: roomId, date: Date.now()}
      //  console.log("[history]", state.user.rooms)
      Vue.prototype.$userChanged()
      state.historyUpdated = Date.now()
    }
  },
  setRoomAddress(state, r){
    console.log('roomAddress', r)
    state.roomAddress = r
  },

  setUsers(state, u){
    state.users = u
  },
  setUserById(state, u){
    //  console.log('[store setUserById]',u)
    state.users[u.clientID] = u
    //  console.log(state.users)
  },
  setUsersUpdated(state, d){
    state.usersUpdated = d
  },
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
