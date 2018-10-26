<template>
    <div>
        <pkheader></pkheader>
        <pkbanner></pkbanner>
        <pkoption></pkoption>
        <pkshow></pkshow>
        <!-- <pkshows></pkshows> -->
        <pkfooter></pkfooter>
    </div>
         
</template>




<script>
    import pkheader from './home/pkheader.vue'
    import pkbanner from './home/pkbanner.vue'
    import pkoption from './home/pkoption.vue'
    import pkshow from './home/pkshow.vue'
    // import pkshows from './home/pkshows.vue'
    import pkfooter from './pkfooter.vue'





    export default {
        components: {
            pkheader,
            pkbanner,
            pkoption,
            pkshow,
            // pkshows
            pkfooter
        }
    }
</script>




<style scoped>
    
</style>
