<template>
    <div>
        <pkgoodsheader></pkgoodsheader>
        <pkgoodsnav></pkgoodsnav>
        <pkgoodscontent></pkgoodscontent>


    </div>
</template>


<script>
    import pkgoodsheader from './goods/pkgoodsheader.vue'
    import pkgoodsnav from './goods/pkgoodsnav.vue'
    import pkgoodscontent from './goods/pkgoodscontent.vue'



    export default {
        components: {
            pkgoodsheader,
            pkgoodsnav,
            pkgoodscontent


        }
    }
</script>


<style scoped>

</style>
