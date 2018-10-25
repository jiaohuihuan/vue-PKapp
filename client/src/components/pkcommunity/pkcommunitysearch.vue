<template>
    <div class="header">
        <span class="s1">
            <i class="el-icon-arrow-left" @click="back"></i>
        </span>
        <span class="s2">
            <i class="el-icon-search"></i>
            <input type="text" Placeholder="搜帖子" />
        </span>
        <div class="hot">
            <div class="hot-t">热门搜索</div>
            <ul class="hot-ul">
                <li>烘焙视频</li>
                <li>手工揉面</li>
                <li>新手入门</li>
                <li>翻拌</li>
                <li>黄油打发</li>
                <li>蛋清打发</li>
                <li>常见问题</li>
                <li>全蛋打发</li>
                <li>蛋奶油打发</li>
            </ul>
        </div>
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
    .hot-t{
        width: 100%;
        height: 38px;
        background: #ECEBE9;
        color:#ABAAA8;
        margin-top: 12px;
        line-height: 38px;
        padding-left: 12px;
    }
    .hot-ul{
        width: 94%;
        overflow:hidden;
        margin: 12px 3% 0 3%;
    }
    .hot-ul li{
        float:left;
        background: #EAEAE8;
        padding: 3px 14px;
        border-radius:5px;
        margin: 7px;
        font-size: 12px;
        color:#9A9A98;
    }

</style>
