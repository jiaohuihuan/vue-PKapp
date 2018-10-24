<template>
    <div class="weui-tabbar" v-if="islogin" >

        <a href="javascript:;"  class="weui-tabbar__item "  :class="{'weui-bar__item_on':status===0}" @click="a(0)" >
            <!-- 点击后跳转的路径 -->
            <router-link to="/" >
                <span style="display: inline-block;position: relative;">
                    <img :src="require('../assets/footer/j-sy.jpg')" alt="" class="weui-tabbar__icon">
                </span>
                <p class="weui-tabbar__label">首页</p>
            </router-link>
        </a>

        <a href="javascript:;"  class="weui-tabbar__item" :class="{'weui-bar__item_on':status===1}" @click="a(1)" >
            <!-- 点击后跳转的路径 -->
            <router-link to="/pktopic" >
                <img :src="require('../assets/footer/j-zt.jpg')" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">专题</p>
            </router-link>
        </a>

        <a href="javascript:;"  class="weui-tabbar__item"  :class="{'weui-bar__item_on':status===2}" @click="a(2)" >
            <!-- 点击后跳转的路径 -->
            <router-link to="/pkgoods" >
                <img :src="require('../assets/footer/j-hh.jpg')" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">好货</p>
            </router-link>
        </a>
    
        <a href="javascript:;"  class="weui-tabbar__item"  :class="{'weui-bar__item_on':status===3}" @click="a(3)">
            <!-- 点击后跳转的路径 -->
            <router-link to="/pkcommunity" >
                <span style="display: inline-block;position: relative;">
                    <img :src="require('../assets/footer/j-sq.jpg')" alt="" class="weui-tabbar__icon">
                </span>
                <p class="weui-tabbar__label">社区</p>
            </router-link>
        </a>
        
        

        <!-- 判断是否登录状态，选择跳转页面 -->
        <a href="javascript:;"  class="weui-tabbar__item " :class="{'weui-bar__item_on':status===4}"  @click="a(4)" >
            <!-- 情况一 -->
            <!-- 登录后，点击跳转到已登录状态 -->
            <template v-if="login">
                <router-link to="/pkmine">
                    <img :src="require('../assets/footer/j-wd.jpg')" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">我的</p>
                </router-link>
            </template>

            <!-- 情况二 -->
            <!-- 登录前，点击跳转到登录页面 -->
            <template v-else-if="!login">
                <router-link to="/pklogin">
                    <img :src="require('../assets/footer/j-wd.jpg')" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">我的</p>
                </router-link>
            </template>
        </a>

    </div>
</template>






<script type="text/javascript">
import $ from "jquery";
window.$ = $;

export default {
  data() {
    return {

      //登录状态判断
      login: false,
      status: 0,
      islogin:true
    };
  },

    mounted(){
       
    },

    methods: {
        a: function(idx) {
        // 方法一
        //获取到idx，点击当前idx添加类
        this.status = idx;

        // 判断是登录页面隐藏pkfooter组件
        // if(this.$route.path == "/pklogin"){
        //     this.islogin=false;
        // }else{
        //     this.islogin=true;
        // }


        // 方法二
        // 获取节点对应的idx，点击当前idx添加类，其他兄弟节点移除类
        //let arridx = $(".weui-tabbar__item").eq(idx);
        // arridx.addClass('weui-bar__item_on').siblings('weui-tabbar__item').removeClass('weui-bar__item_on');

        }
    }
};
</script>



<style scoped>
    .weui-tabbar {
        position: fixed;
        background:#fff;
        bottom: 0;
        left: 0;
        height: 48px;
    }
    .weui-tabbar img {
        width: 25px;
        height: 19px;
    }
    .weui-tabbar__label {
        color: #969696;
    }
    .weui-tabbar__item {
        padding: 6px 0 0 0;
    }
    .weui-bar__item_on{
        color:red;
    }
    
</style>
