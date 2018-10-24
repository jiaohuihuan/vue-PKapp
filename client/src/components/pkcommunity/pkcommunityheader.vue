<template>
    <div class="header">
        <span class="search">
            <i class="el-icon-search"></i>
            <input type="text" Placeholder="搜帖子、焙友" />
        </span>
        <span class="post">发帖子</span>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                input21: ''
            }
        }
    }
</script>



<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style:none;
        text-decoration:none;
        box-sizing:boeder-box;
    }
    span{
        height: 50px;
        display:inline-block;
    }
    .search{
        width:75%;
        position:relative;
        margin-left: 4%;
    }
    .search:Placeholder{
        position:absolute;
        top:3px;
        left:112px;
    }
    .el-icon-search{
        font-size: 17px;
        position:absolute;
        top:14px;
        left:5px;
        color:#ccc;
    }
    .post{
        width:21%;
        float:right;
        text-align: center;
        line-height: 50px;
        color:crimson;
        font-size: 14px;
        letter-spacing:1px;
    }
    input{
        width: 100%;
        height: 35px;
        border-radius:5px;
        border:1px solid #F2F2F2;
        background: #F2F2F2;
        margin: 7px 0 0 0;
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
