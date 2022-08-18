// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import { v4 as uuidv4 } from 'uuid';
//
// const vocab = "https://scenaristeur.github.io/agent/"

// let calls = 0
// let mainYDoc =  new Y.Doc()
// let rooms =


const state = () => ({
  room: null,
  // rooms: mainYDoc.getMap('rooms')
})

const mutations = {
  setRoom(state, r){
    //  state.rooms == null ? state.rooms = mainYDoc.getMap('noosphere-maps') : ''
    //console.log("rooms", state.rooms)
    state.room = r
    // state.rooms.set(r,state.room)

    // state.room.observeDeep(events => {
    //   events.forEach(event => {
    //     calls++
    //     console.log('calls', calls)
    //     // @ts-ignore
    //     console.log(event.keysChanged.has('deepmap'))
    //     console.log(event.path.length === 1)
    //     console.log(event.path[0] === 'map')
    //     // @ts-ignore
    //     // let dmapid = event.target.get('deepmap')._item.id
    //     // console.log(dmapid)
    //     console.log(event, event)
    //   })
    //   //  this.$forceUpdate();
    // })
    //
    // state.room.set('id', r)
    // state.room.set('name', null)
    // state.room.set('map', new Y.Map())
    // const _map3 = state.room.get('map')
    // _map3.set('deepmap', new Y.Map())
    // state.room.set('stuff one', 'c2')
    // _map3.set('stuff', 'c3')
    // // this.commit('core/addRoom', state.room)


  },

  // addRoom(state, r){
  //   // state.rooms.set(r.id, state.room)
  //   // console.log(state.rooms)
  // }
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
