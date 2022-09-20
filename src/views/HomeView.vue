<template>
  <div class="home">
    <UsersView />
    <!-- <RoomCard /> -->
    <!-- <EditorView
    @userEvent="onUserEvent"
    @editorEvent="onEditorEvent"
    /> -->
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // 'RoomCard': ()=>import('@/views/RoomCard'),
    'UsersView': ()=>import('@/views/UsersView'),
    // 'EditorView': ()=>import('@/views/EditorView'),

    // 'StorageView': ()=>import('@/views/StorageView'),
  },
  // methods:{
  //   onUserEvent(e){
  //     console.log("userEVent", e)
  //   },
  //   onEditorEvent(e){
  //     console.log("editorEvent",e)
  //   },
  // }

}
</script>
