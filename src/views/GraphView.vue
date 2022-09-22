<template>

  <div id="graph"  ref="graph">Loading graph...</div>

</template>

<script>
export default {
  name: 'GraphView',
  data(){
    return{
      nodes: [],
      links: []
    }
  },
  mounted(){
    this.$graphInit({domElement: this.$refs.graph})
    this.updateUsers()
    // this.users = this.$store.state.actor.users
  },
  methods:{
    update(){
      if (this.graph != undefined){
        let nodes = this.nodes.map(a => {return {...a}})
        let links = this.links.map(a => {return {...a}})
        this.graph.graphData({nodes: nodes, links: links})
        console.log(this.graph.graphData())
      }
    },
    updateUsers(){
      //  this.links = []
      for (const [clientID, user] of Object.entries(this.users)) {
        console.log('[user]',clientID,user);
        // user
        user.id = user.clientID
        user.group = "user"
        var indexU = this.nodes.findIndex(x => x.id==user.id);
        indexU === -1 ? this.nodes.push(user) : Object.assign(this.nodes[indexU], user)
        //  console.log(this.nodes)
        // rooms
        console.log(user.rooms)
        for (const [id, room] of Object.entries(user.rooms)) {
          room.id = id
          room.name = id
          room.group = "room"
          var indexR = this.nodes.findIndex(x => x.id==room.id);
          indexR === -1 ? this.nodes.push(room) : Object.assign(this.nodes[indexR], room)
          // console.log(this.nodes)
          let link = {source: user.id, target: room.id, group: "visited", label: "visited", color: 'blue'}
          if (room.id == user.roomId){
            link.group = "current"
            link.label = "current"
            link.color = "red"
            console.log('#link',link)
            //  Object.assign(this.nodes[user.roomId], {color: 'red', group: 'occuped'})
          }
          // else{
          //   link.label = "room"
          // }
          //  console.log(link)
          //  console.log('links before', this.links)
          // this.links = this.links.filter(l => {return l.source == link.source && l.target == link.target})
          var indexL = this.links.findIndex(l => l.source == link.source && l.target == link.target);
          indexL === -1 ? this.links.push(link) : Object.assign(this.links[indexL], link)
          // console.log('links after', this.links)
          // this.links.push(link)
        }

      }
      this.update()
    }
  },
  watch:{
    nodes(){
      this.update()
    },
    links(){
      this.update()
    },
    graph(){
      this.update()
    },
    users(){
      this.updateUsers()

    },
    usersUpdateDate(){
      console.log(this.usersUpdateDate)
      this.updateUsers()
      this.$forceUpdate()
    },
    currentNode(){
      console.log(this.currentNode)
      let user = this.$store.state.actor.user
      switch (this.currentNode.group) {
        case "room":

        user.roomId = this.currentNode.id
        this.$store.commit('actor/setUser', user)
        this.$openRoom()
        break;
        case "user":

        break;
        default:
        console.log("i don't know what to do")

      }
    }
  },
  computed: {
    // nodes() {
    //   return this.$store.state.network.nodes
    // },
    // links() {
    //   return this.$store.state.network.links
    // },
    graph() {
      return this.$store.state.network.graph
    },
    users: {
      cache: false,
      get() {
        return this.$store.state.actor.users;
      },
    },
    usersUpdateDate() {
      return this.$store.state.actor.usersUpdated
    },
    uploads() {
      return this.$store.state.web3.uploads
    },
    currentNode(){
      return this.$store.state.network.currentNode
    }
  },

}
</script>

<style lang="css" scoped>
.graph-view {

}
.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>
