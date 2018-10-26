<template>
    <div>
       <pktopicheader></pktopicheader>
        <pktopiccontent></pktopiccontent>
        <pkfooter></pkfooter>
    </div>
</template>


<script>
    import pktopicheader from './topic/pktopicheader.vue'
    import pktopiccontent from './topic/pktopiccontent.vue'
    import pkfooter from './pkfooter.vue'

    export default {
        components: {
            pktopicheader,
            pktopiccontent,
            pkfooter
        }
    }
</script>


<style scoped>
    
</style>
