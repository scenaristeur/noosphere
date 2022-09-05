<template>
  <b-container fluid class="room-history">

    <b-col lg="6" class="my-1">
      <b-form-group
      label="Filter"
      label-for="filter-input"
      label-cols-sm="3"
      label-align-sm="right"
      label-size="sm"
      class="mb-0"
      >
      <b-input-group size="sm">
        <b-form-input
        id="filter-input"
        v-model="filter"
        type="search"
        placeholder="Find in Room History"
        ></b-form-input>

        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>

  <b-table
  small
  selectable
  sticky-header
  select-mode="single"
  responsive="sm"
  hover
  caption-top
  table-variant="info"
  :filter="filter"
  sort-by.sync="date"
  :fields="fields"
  @row-selected="onRowSelected"
  :items="Object.values(user.rooms)">

  <template #cell(date)="data">
    {{new Date(data.item.date).toLocaleString()}}
  </template>
  <template #cell(delete)="data">
    <!-- {{data}} -->
    <div style="float:right">
      <b-button size="sm" @click="trash(data.item.roomId)" variant="outline-info">
        <b-icon icon="trash" variant="danger" aria-hidden="true"></b-icon>
      </b-button>
    </div>
  </template>

  <!-- <template #cell(roomId)="data">
  # TODO
  _rowVariant when = user.roomId
</template> -->
<!--    @filtered="onFiltered"
filter-included-fields="['roomId']"-->
<template #table-caption>My Room History</template>
</b-table>
</b-container>
</template>

<script>
export default {
  name: 'RoomHistory',
  data(){
    return{
      filter: null,
      fields: [
        {
          key: 'roomId',
          label: 'room',
          sortable: true
        },
        {
          key: 'date',
          label: 'date',
          sortable: true
        },
        {key: 'delete',
        label:'delete',
        headerAbbr: 'delete',
        headerTitle: 'delete from history'
      }
    ],
  }
},
methods: {
  onRowSelected(r){
    if(r[0]!= undefined){
      this.user.roomId = r[0].roomId
      this.$openRoom()
    }
  },
  trash(roomId){
    console.log(roomId)
    this.$store.commit('core/removeRoomIdFromHistory', roomId)
    this.$forceUpdate()
    this.$userChanged()
  }
},
computed: {
  user() {
    return this.$store.state.core.user
  },
}

}
</script>

<style lang="css" scoped>
.room-history {

}
</style>
