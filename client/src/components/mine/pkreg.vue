<template>
    <div>
        <div class="zc">
                <i class="el-icon-arrow-left" @click="back"></i>
                <span class="zc-b">注册</span>
        </div>
        <div class="msg">
            <div class="phonetop">
                <input type="text" class="phone" v-on:input="watch" placeholder="中国大陆手机号码">
                <span class="phonepro">请输入正确的手机号</span>
            </div>
            <input type="text" class="test" placeholder="验证码"><button class="testbtn">获取验证码</button>
            <div class="nicknametop">
                <input type="text" class="nickname" v-on:input="watch" placeholder="焙刻昵称 (中/英文)">
                <span class="nicknamepro">请输入正确的昵称</span>
            </div>
            <div class="passwordtop">
                <input type="password" class="password" v-on:input="watch" placeholder="登录密码 (6-20)">
                <span class="passwordpro">请输入正确的密码</span>
            </div>
            <button class="registered" @click="change">注册</button>
        </div>
        <p class="bottom">
            <span class="accept">注册即表示接受</span>
            <span class="protocol">焙刻使用协议</span>
        </p>
    </div>
</template>


<script>
    export default {
        data(){
            return{
            
            }
        },
        methods:{
            //点击 < 返回上一页————————————————————————————————————————————————————
            back: function() {
                history.back(-1);
            },
            //点击 < 返回上一页结束————————————————————————————————————————————————————



            // 注册输入信息时监听————————————————————————————————————————————————————
            watch(){
                let phone = $('.phone');
                let nickname = $('.nickname');
                let password = $('.password');

                let phonepro = $('.phonepro');
                let nicknamepro = $('.nicknamepro');
                let passwordpro = $('.passwordpro');

                let _phone = phone.val();
                let _nickname = nickname.val();
                let _password = password.val();

                status:[200,304];
                isok:false;

                let xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        if(status.indexOf(xhr.status) >= 0){
                            // console.log(xhr.responseText);
                            if(xhr.responseText=='no'){
                                alert('手机号已存在');   
                                
                            }
                        }

                    }
                xhr.open('get','../../api/pkcheck_phone.php?phone='+_phone,true);
                xhr.send();


                // 输入时正则判断
                phone.blur(function(){
                    if(!/^1[34578]\d{9}$/.test(_phone)){
                        $('.phonepro').css('color','#a40A2B');
                        return false;
                    }else{
                        $('.phonepro').css('color','#fff');
                    }
                })
                nickname.blur(function(){
                    if(!/^[\u4e00-\u9fa5_a-zA-Z]+$/.test(_nickname)){
                        $('.nicknamepro').css('color','#a40A2B');
                        return false;
                    }else{
                        $('.nicknamepro').css('color','#fff');
                    }
                })

                password.blur(function(){
                    if(!/^\S{6,20}$/.test(_password)){
                        $('.passwordpro').css('color','#a40A2B');
                        return false;
                    }else{
                        $('.passwordpro').css('color','#fff');
                    }
                })

            },
            // 注册输入信息时监听结束————————————————————————————————————————————————————

           
           // 点击注册按钮验证————————————————————————————————————————————————————
            change(){
                //  点击改变按钮样式
                let registered = $('.registered');
                    // console.log(registered)
                registered.mousedown(function(e){
                    registered.css("background" ,"#a40A2B");
                })
                registered.mouseup(function(e){
                    registered.css("background" ,"#C44A3B");
                })

                // console.log("start");


                // 填写资料点击注册
                let _phone = $('.phone').val();
                let _nickname = $('.nickname').val();
                let _password = $('.password').val();
                    
                let status=[200,304];
                isok:false;

                let xhr = new XMLHttpRequest();
                
                xhr.onload = ()=>{
                    // console.log("start0");
                    // console.log(status);

                    if(status.indexOf(xhr.status) >= 0){
                        // console.log(status);
                        var formGroup = phone.parentNode;
                        if(xhr.responseText === 'success'){
                            isok = true;
                            // console.log("成功");

                        }else if(xhr.responseText === 'fail'){
                            isok = false;
                            // console.log("失败");

                        }
                    }
                }
                xhr.open('post','../../api/pkreg.php',true);

                // 设置请求头，以便后端接收post数据
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


                // 验证是否为空
                if(_phone == ''){
                    $('.phonepro').css('color','#a40A2B');
                    return false;
                }
                if(_nickname == ''){
                    // console.log(_nickname)
                    $('.nicknamepro').css('color','#a40A2B');
                    return false;
                }
                if(_password == ''){
                    $('.passwordpro').css('color','#a40A2B');
                    return false;
                }
        


                xhr.send(`phone=${_phone}&nickname=${_nickname}&password=${_password}`);


                alert('注册成功，点击确定跳转页面');

                location.href = "./pklogin";

            }
            // 点击注册按钮验证结束————————————————————————————————————————————————————

        }
    }
</script>


<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .zc{
        height: 50px;
        border-bottom:1px solid #eee;
        text-align: center;
        position:relative;
        padding-top: 12px;
    }
    .el-icon-arrow-left{
        position:absolute;
        top: 14px;
        left: 14px;
        font-size: 20px;
        color:#333;
    }
    .msg{
        margin: 0 15px;
    }
    .phone,.nickname,.password,.registered{
        width: 100%;
        height: 38px;
        border:1px solid #ddd;
        border-radius:5px;
        margin-top: 13px;
        font-size: 14px;
    }
    .phonetop{
        position:relative;
    }
    .phonepro{
        font-size: 12px;
        color:#fff;
        position:absolute;
        top: 30px;
        right: 8px;
    }
    .nicknametop{
        position:relative;
    }
    .nicknamepro{
        font-size: 12px;
        color:#fff;
        position:absolute;
        top: 23px;
        right: 8px;
    }
    .passwordtop{
        position:relative;
    }
    .passwordpro{
        font-size: 12px;
        color:#fff;
        position:absolute;
        top: 23px;
        right: 8px;
    }
    .phone{
        margin-top: 20px;
    }
    .registered{
        margin-top: 30px;
        background:#C44A3B;
        color:#fff;
    }
    .test{
        width: 71%;
        height: 38px;
        border:1px solid #ddd;
        border-radius:5px;
        margin-top: 13px;
    }
    .testbtn{
        width: 26%;
        height: 30px;
        border-radius:5px;
        margin: 13px 0 0 3%;
        font-size: 12px;
        background:#C44A3B;
        border:1px solid #C44A3B;
        color:#fff;
    }
    input::-webkit-input-placeholder{
        color:#ddd;
        font-size: 13px;
        letter-spacing:1px;
        padding-left: 8px;
    }
    .bottom{
        margin:0 auto;
        text-align:center;

        margin-top: 217px;
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
