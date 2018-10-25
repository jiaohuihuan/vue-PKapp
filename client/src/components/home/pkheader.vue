<template>
    <div class="header">
        <span class="s1">
            <i class="el-icon-menu"></i>
        </span>
        <span class="s2">
            <i class="el-icon-search"></i>
            <input type="text" class="search" @click="search" Placeholder="搜配方" />
        </span>
        <span class="s3">
            <i class="el-icon-plus"></i>
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
                this.$router.push({ path: "/pkhomesearch" });
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
    }
    .el-icon-menu,.el-icon-plus{
        color: #AC5345;
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
        top:3px;
        left:-10px;
        color:#ccc;
    }
    .s3{
        width:15%;
        float:right;
    }
    i{
        margin: 0;
        padding: 12px 15px;
        font-size:25px;
        font-weight:normal;
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
