<template>
    <div>

        <!-- 点击对应图标跳转到对应页面，跳转到的路由和roueArr数组对应的索引值相等，该图标添加active样式 -->
        <a  v-for ='( img, index) in imgArr' @click="toruter(index)" :key="index" > 
            <img :src="img" srcset="" :class ="{'active':$route.path===roueArr[index]}"> 
        </a> 
    </div>
  
</template>


<script>
export default {
  data() {
    return {

      // 底部导航一一对应的路由
      roueArr:[
        '/',
        '/category',
        '/buy',
        '/cart',
        '/my',

      ],
      imgArr: [
        require("../../assets/iconfontimg/fangzi1.png"),
        require("../../assets/iconfontimg/fenlei1.png"),
        require("../../assets/iconfontimg/zdm1.png"),
        require("../../assets/iconfontimg/shopingcar1.png"),
        require("../../assets/iconfontimg/people1.png"),
        
      ]
    };
  },
  methods:{

    // 循环索引值，在对应的路由跳转页面，跳出循环
    toruter(index){
      switch(index){
        case 0:
        this.$router.push('/');
        break;
         case 1:
        this.$router.push('/category');
        break;
         case 2:
        this.$router.push('/buy');
        break;
         case 3:
        this.$router.push('/cart');
        break;
         case 4:
        this.$router.push('/my');
        break;
      }
    }
  }
}