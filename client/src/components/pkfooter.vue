<template>
    <div class="weui-tabbar"  @click="toruter" >

        <a href="javascript:;"  class="weui-tabbar__item "  :class="{'weui-bar__item_on':$route.path===roueArr[0]}" @click="jump(0)" >
            <!-- 点击后跳转的路径 -->
            <router-link to="/" >
                <span style="display: inline-block;position: relative;">
                    <img :src="require('../assets/footer/j-sy.jpg')" alt="" class="weui-tabbar__icon">
                </span>
                <p class="weui-tabbar__label">首页</p>
            </router-link>
        </a>

        <a href="javascript:;"  class="weui-tabbar__item" :class="{'weui-bar__item_on':$route.path===roueArr[1]}" @click="jump(1)" >
            <!-- 点击后跳转的路径 -->
            <router-link to="/pktopic" >
                <img :src="require('../assets/footer/j-zt.jpg')" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">专题</p>
            </router-link>
        </a>

        <a href="javascript:;"  class="weui-tabbar__item"  :class="{'weui-bar__item_on':$route.path===roueArr[2]}" @click="jump(2)" >
            <!-- 点击后跳转的路径 -->
            <router-link to="/pkgoods" >
                <img :src="require('../assets/footer/j-hh.jpg')" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">好货</p>
            </router-link>
        </a>
    
        <a href="javascript:;"  class="weui-tabbar__item"  :class="{'weui-bar__item_on':$route.path===roueArr[3]}" @click="jump(3)">
            <!-- 点击后跳转的路径 -->
            <router-link to="/pkcommunity" >
                <span style="display: inline-block;position: relative;">
                    <img :src="require('../assets/footer/j-sq.jpg')" alt="" class="weui-tabbar__icon">
                </span>
                <p class="weui-tabbar__label">社区</p>
            </router-link>
        </a>
        
        

        <!-- 判断是否登录状态，选择跳转页面 -->
        <a href="javascript:;"  class="weui-tabbar__item " 
            :class="{'weui-bar__item_on':$route.path===roueArr[4]}"  @click="jump(4)" >
            <!-- 情况一 -->
            <!-- 登录后，点击跳转到已登录状态 -->
            <div v-if="login">
                <router-link to="/pkmine">
                    <img :src="require('../assets/footer/j-wd.jpg')" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">我的</p>
                </router-link>
            </div>

            <!-- 情况二 -->
            <!-- 登录前，点击跳转到登录页面 -->
            <div v-else-if="!login">
                <router-link to="/pklogin">
                    <img :src="require('../assets/footer/j-wd.jpg')" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">我的</p>
                </router-link>
            </div>
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
      roueArr: ["/", "/pktopic", "/pkgoods", "/pkcommunity", "/pkmine"]
    };
  },

    //打开页面就执行
  mounted() {},

  methods: {
    jump: function(idx) {
        console.log(this.$route.path)
        console.log(this.roueArr[idx])

      // 方法一
      //获取到idx，点击当前idx添加类
      this.status = idx;

      // 方法二
      // 获取节点对应的idx，点击当前idx添加类，其他兄弟节点移除类
      //let arridx = $(".weui-tabbar__item").eq(idx);
      // arridx.addClass('weui-bar__item_on').siblings('weui-tabbar__item').removeClass('weui-bar__item_on');
    },

    // 点击选项卡跳转单页面——————————————————————————————
    toruter(index) {
        var index = this.status;
        switch (index) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/pktopic");
          break;
        case 2:
          this.$router.push("/pkgoods");
          break;
        case 3:
          this.$router.push("/pkcommunity");
          break;
        case 4:
          this.$router.push("/pklogin");
          break;
      }
    }
    // 点击选项卡跳转单页面结束——————————————————————————————
  }
};
</script>



<style scoped>
.weui-tabbar {
  position: fixed !important;
  background: #fff;
  bottom: 0 !important;
  left: 0;
  height: 48px;
  z-index: 999999999 !important;
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
.weui-bar__item_on {
  color: red;
}
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color:crimson;
}
</style>
