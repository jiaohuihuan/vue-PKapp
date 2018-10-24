<template>
    <div class="banner">
        <div class="block">
            <el-carousel height="170px">
                <el-carousel-item v-for="(item,idx) in imgurl" :key="item">
                    <img class="b-img" :src="imgurl[idx]" >
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>




<script>
    export default {
        data(){
            return{
                imgurl:[require('../../assets/home/j-1.jpg'),require('../../assets/home/j-2.jpg'),require('../../assets/home/j-3.jpg'),require('../../assets/home/j-4.jpg')]
            }
        }
    }
</script>




<style scoped>
    .banner{
        margin-top: 50px;
    }
    .b-img{
        height: 170px;
        width:100% !important;
    }
</style>
