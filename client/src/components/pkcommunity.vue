<template>
    <div>
        <pkcommunityheader></pkcommunityheader>
        <pkcommunityactive></pkcommunityactive>
        <pkcommunitypost></pkcommunitypost>


        
    </div>
</template>


<script>
    import pkcommunityheader from './pkcommunity/pkcommunityheader.vue'
    import pkcommunityactive from './pkcommunity/pkcommunityactive.vue'
    import pkcommunitypost from './pkcommunity/pkcommunitypost.vue'



    export default {
        components: {
            pkcommunityheader,
            pkcommunityactive,
            pkcommunitypost


        }
    }
</script>


<style scoped>

</style>
