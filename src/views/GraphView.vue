<template>
  <div>
    <div id="graph" width="100px" ref="graph">Loading graph...</div>
    <div>
      {{users}}
      <hr>
      {{uploads}}
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GraphView',
  mounted(){
    this.$graphInit({domElement: this.$refs.graph})
    // this.users = this.$store.state.core.users
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
      // this.links = []
      for (const [clientID, user] of Object.entries(this.users)) {
        console.log('[user]',clientID,user);
        // user
        user.id = user.clientID
        user.group = "user"
        var indexU = this.nodes.findIndex(x => x.id==user.id);
        indexU === -1 ? this.nodes.push(user) : Object.assign(this.nodes[indexU], user)
        console.log(this.nodes)
        // rooms
        for (const [id, room] of Object.entries(user.rooms)) {
          room.id = id
          room.name = id
          var indexR = this.nodes.findIndex(x => x.id==room.id);
          indexR === -1 ? this.nodes.push(room) : Object.assign(this.nodes[indexR], room)
          console.log(this.nodes)
          let link = {source: user.id, target: room.id}
          if (room.id == user.roomId){
            link.group = "current"
            link.label = "current"
            link.color = "red"
            //  Object.assign(this.nodes[user.roomId], {color: 'red', group: 'occuped'})
          }else{
            link.label = "room"
          }
          //  this.links.push(link)
        }




      }
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
    }
  },
  computed: {
    nodes() {
      return this.$store.state.network.nodes
    },
    links() {
      return this.$store.state.network.links
    },
    graph() {
      return this.$store.state.network.graph
    },
    users: {
      cache: false,
      get() {
        return this.$store.state.core.users;
      },
    },
    usersUpdateDate() {
      return this.$store.state.core.usersUpdateDate
    },
    uploads() {
      return this.$store.state.core.uploads
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
