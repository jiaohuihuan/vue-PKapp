<template>
    <div>
        <!-- 头 -->
        <div>
            <div class="dl">
                <i class="el-icon-arrow-left" @click="back"></i>
                <span class="dl-b">登录</span>
            </div>
        </div>
    
       
        <div class="msg">
                <input type="text" class="phone"  placeholder="中国大陆手机号码">
                <input type="password" class="password"  placeholder="登录密码">
            <button class="login" @click="login()">登录</button>
        </div>


        <!-- 注册账号、忘记密码  -->
        <p class="login-b">
          <span class="zhanghzo" @click="reg">注册账号</span>
          <span class="mima">忘记密码</span>
        </p>


        <pkother></pkother>

    </div>
</template>


<script>
// jquery
import $ from "jquery";
window.$ = $;
import pkother from "./pkother.vue";

export default {
  data() {

    return {
     
    };
  },


  methods: {
    //点击 < 返回上一页————————————————————————————————————————
    back: function() {
      history.back(-1);
    },
    //点击 < 返回上一页结束————————————————————————————————————————



    //点击跳转注册页面————————————————————————————————————————
    reg() {
      this.$router.push({ path: "/pkreg" });
    },
    //点击跳转注册页面结束————————————————————————————————————————



    // 填写正确点击登录跳转页面————————————————————————————————————————
    login(){

        var status = [200,304];
        
        let phone = $('.phone');
        let password = $('.password');
        let button = $('.login');

        let _phone = phone.val();
        let _password = password.val();

        // let xhr = new XMLHttpRequest();
            
        // xhr.onload = ()=>{
        //     if(status.indexOf(xhr.status) >= 0){
    
        //         if(xhr.responseText === 'yes'){
        //            console.log(xhr.responseText)
                        
        //             location.href = "/";

        //         }else if(xhr.responseText === 'no'){
        //             alert('手机号或密码不正确')

        //         }
        //     }
        // }
        // xhr.open('post','../../api/pklogin.php',true);

        // 设置请求头，以便后端接收post数据
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        // xhr.send(`phone=${_phone}&password=${_password}`);

        
        
        location.href = "/";
        
        
    }
    // 填写正确点击登录跳转页面结束————————————————————————————————————————

  },


 // 引进来的组件————————————————————————————————————————
  components: {
    pkother
  }
};
</script>




<style scoped>
  *{
        margin: 0;
        padding: 0;
    }
    .dl{
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
    .phone,.password,.login{
        width: 100%;
        height: 38px;
        border:1px solid #ddd;
        border-radius:5px;
        margin-top: 13px;
        font-size: 14px;
    }
    .phone{
        margin-top: 20px;
    }
    .login{
        margin-top: 30px;
        background:#C44A3B;
        color:#fff;
    }
    input::-webkit-input-placeholder{
        color:#ddd;
        font-size: 13px;
        letter-spacing:1px;
        padding-left: 8px;
    }
  

.login-b{
  margin: 8px 17px;
}
.zhanghzo {
  color: #c44a3b;
  font-size: 14px;
  float: left;
}
.mima {
  color: #7c7c7c;
  font-size: 14px;
  float: right;
}
</style>
