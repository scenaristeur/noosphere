<template>
  <div class="about">
    <h1>This is a share page</h1>
    -{{query}}-query
  </div>
</template>

<script>

export default {
  name: 'ShareView',
  data(){
    return{
      query: null
    }
  },
  created(){
    console.log(this.$route.query)
    this.query = this.$route.query
  }}
  </script>
