<template lang="">
    <div id="ariane">
        <div v-if="cid != null">
            History<br> 
             cid:
            <a 
            :href="'https://ipfs.io/ipfs/'+ cid.path"
             target="_blank">
             ...{{cid.path.slice(-10)}}
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArianeHistory",
    watch: {
        cid() {
            console.log(this.cid)
            console.log("path: ", this.cid.path, this.cid.step.room)
            //this.path = this.cid.path
        }
    },
    computed: {
        cid() {
            return this.$store.state.history.cid
        },
    }

}
</script>
<style >
#ariane {
    color: white
}
</style>