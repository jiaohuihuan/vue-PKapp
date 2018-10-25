<template>
    <div class="header">
        <span class="s1">
            <img class="order" src="../../assets/goods/j-dd.jpg"/> 
        </span>
        <span class="s2">
            <i class="el-icon-search"></i>
            <input type="text" class="search" @click="search" Placeholder="搜好货" />
        </span>
        <span class="s3">
            <img class="car" src="../../assets/goods/j-gwc.jpg"/> 
        </span>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                input21: ''
            }
        },
        methods:{
            //点击输入款切换路由，切换页面————————————————————————————————————————
            search(){
                this.$router.push({ path: "/pkgoodssearch" });
            }
            //点击输入款切换路由，切换页面结束————————————————————————————————————————
        }
    }
</script>



<style scoped>
    span{
        height: 50px;
        display:inline-block;
    }
   .s1{
        width:15%;
        float:left;
        position:relative;
    }
    .order{
        width: 20px;
        position:relative;
        top: 13px;
        left: 17px;
    }
    .s2{
        width:70%;
        position:relative;
    }
    .s2:Placeholder{
        position:absolute;
        top:3px;
        left:112px;
    }
    .el-icon-search{
        font-size: 17px;
        position:absolute;
        top:15px;
        left:5px;
        color:#ccc;
    }
    .s3{
        width:15%;
        float:right;
    }
    .car{
        width: 20px;
        position:relative;
        top: 13px;
        right: -18px;
    }
    input{
        width: 100%;
        height: 35px;
        border-radius:5px;
        border:1px solid #F2F2F2;
        background: #F2F2F2;
        margin-top: 7px;
        padding-left: 30px;
    }
    input::-webkit-input-placeholder{
        color:#ccc;
    }
    .header{
        height: 50px;
        position:fixed;
        top:0;
        left:0;
        width: 100%;
        border-bottom:1px solid #eee;
        z-index:1000;
        background: #fff;
    }
</style>
