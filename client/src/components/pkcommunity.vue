<template>
    <div>
        <pkcommunityheader></pkcommunityheader>
        <pkcommunityactive></pkcommunityactive>
        <pkcommunitypost></pkcommunitypost>
        <pkfooter></pkfooter>



        
    </div>
</template>


<script>
    import pkcommunityheader from './pkcommunity/pkcommunityheader.vue'
    import pkcommunityactive from './pkcommunity/pkcommunityactive.vue'
    import pkcommunitypost from './pkcommunity/pkcommunitypost.vue'
    import pkfooter from './pkfooter.vue'




    export default {
        components: {
            pkcommunityheader,
            pkcommunityactive,
            pkcommunitypost,
            pkfooter


        }
    }
</script>


<style scoped>

</style>
