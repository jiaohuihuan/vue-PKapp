<template>
    <div class="login-bottom">
        <p class="third">使用第三方账号登录</p>
        <div>
            <img src="../../assets/mine/j-wx.jpg" >
            <img src="../../assets/mine/j-qq.jpg" >
            <img src="../../assets/mine/j-wb.jpg" >
        </div>
        <p class="bottom">
            <span class="accept">登录即表示接受</span>
            <span class="protocol">焙刻使用协议</span>
        </p>
    </div>
</template>


<script>
    export default {
        
    }
</script>



<style scoped>
    .login-bottom{
        margin: 134px 50px 0 50px;
        text-align: center;
    }
    .third{
        font-size: 14px;
    }
    img{
        width: 40px;
        height: 40px;
        margin-top: 30px;
        margin-left: 38px;
    }
    img:nth-child(1){
        margin-left: 0;
    }
    .bottom{
        margin-top: 100px;
    }
    .accept{
        color:#848484;
        font-size: 12px;
    }
    .protocol{
        color:#C44A3B;
        font-size: 12px;
    }
</style>
