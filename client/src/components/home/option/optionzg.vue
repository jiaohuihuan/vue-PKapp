<template>
    <div>
        <span class="s1">
            <i class="el-icon-arrow-left" @click="back"></i>
        </span>
        <span class="s2">
            <i class="el-icon-search"></i>
            <input type="text" Placeholder="你没做过" />
        </span>
        <p>你没做过,不登录不给做</p>
        <img src="./zg.png">
    </div>
</template>




<script>
export default {
    methods:{
         //点击 < 返回上一页————————————————————————————————————————————————————
        back: function() {
            history.back(-1);
        },
        //点击 < 返回上一页结束————————————————————————————————————————————————————
    }
}
</script>




<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style:none;
        text-decoration:none;
    }
    .s1,.s2{
        height: 50px;
        display:inline-block;
    }
   .s1{
        width:15%;
        float:left;
    }
    .s2{
        width:80%;
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
    p{
        color:chocolate;
        text-align: center;
        margin-top: 120px;
    }
    img{
        width: 100%;
    }
</style>
