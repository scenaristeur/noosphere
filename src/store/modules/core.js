
const state = () => ({
  user: null,
  awareness: null,
  users: {},
  query: null,
  rooms: [],
  usersUpdateDate: null,
  yDoc: null,
  yMap: null,
  editorData: null
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
  },
  setAwareness(state, a){
    state.awareness = a
  },
  setUsers(state, u){
    state.users = u
  },
  setUserById(state, u){
    state.users[u.clientID] = u
    console.log(state.users)
  },
  setUsersUpdateDate(state, d){
    state.usersUpdateDate = d
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
