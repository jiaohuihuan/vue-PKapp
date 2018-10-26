<template>
    <div>
        <pkfooter></pkfooter>
        <pkgoodsheader></pkgoodsheader>
        <pkgoodsnav></pkgoodsnav>
        <pkgoodscontent></pkgoodscontent>
        <pkfooter></pkfooter>



    </div>
</template>


<script>
    import pkgoodsheader from './goods/pkgoodsheader.vue'
    import pkgoodsnav from './goods/pkgoodsnav.vue'
    import pkgoodscontent from './goods/pkgoodscontent.vue'
    import pkfooter from './pkfooter.vue'




    export default {
        components: {
            pkgoodsheader,
            pkgoodsnav,
            pkgoodscontent,
            pkfooter

        }
    }
</script>


<style scoped>

</style>
