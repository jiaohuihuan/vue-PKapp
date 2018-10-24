<template>
    <div>
       <pktopicheader></pktopicheader>
        <pktopiccontent></pktopiccontent>
    </div>
</template>


<script>
    import pktopicheader from './topic/pktopicheader.vue'
    import pktopiccontent from './topic/pktopiccontent.vue'

    export default {
        components: {
            pktopicheader,
            pktopiccontent
        }
    }
</script>


<style scoped>
    
</style>
