<template>
  <div>
    <ul  v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
      <li  v-for="(li,idx) in arr" :key="idx">
        <div class="show" >
            <div class="top"></div>
            <div class="img-t">
                <div>
                    <img class="imgdata" :src="li.coverImage"/> 
                </div>
            </div>
         
             <div class="content">
                <div class="content-t">
                    <div class="name" >{{li.coverTitle}}</div>
                    <i class="el-icon-star-off like"></i>
                </div>
                <div class="content-c">
                    <div class="material" @click="display(idx)" >缺{{li.easyNum}}种原料
                      <i class="el-icon-arrow-down"></i>
                    </div>
                    <p class="num">{{li.likeNum}}</p>
                </div>
                <ul class="content-b  ingredients">
                      <li>
                        <i class="el-icon-circle-check"></i>
                        <span class="raw">奶油奶酪</span>
                        <span class="weight">125g</span>
                        </li>
                      <li>
                        <i class="el-icon-circle-check"></i>
                        <span class="raw">鸡蛋</span>
                        <span class="weight">3个</span>
                        </li>
                      <li>
                        <i class="el-icon-circle-check"></i>
                        <span class="raw">黄油</span>
                        <span class="weight">30g</span>
                        </li>
                      <li>
                        <i class="el-icon-circle-check"></i>
                        <span class="raw">牛奶</span>
                        <span class="weight">50g</span>
                        </li>
                      <li>
                        <i class="el-icon-circle-check"></i>
                        <span class="raw">低筋面粉</span>
                        <span class="weight">30g</span>
                        </li>
                      <li>
                        <i class="el-icon-circle-check"></i>
                        <span class="raw">细砂糖</span>
                        <span class="weight">80g</span>
                        </li>
                    </ul>
            </div>
          </div>
        <pkshows class="pkshows" v-show="isShow"></pkshows>
      </li>
    </ul>
  </div>
</template>


<script>
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";
Vue.use(InfiniteScroll);

// 单独引进mint-ui组件
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);

// 引进小图单组件
import pkshows from "./pkshows.vue";

export default {
  data() {
    return {
      arr: [],
      list: [],
      num:'',
      isShow:false,
    };
  },
  methods: {

    // 请求数据———————————————————————————————————————————————————
    getContent() {
      var self = this;
      $.ajax({
        type: "get",
        url: "http://localhost:9999/getContent",
        data: { num: 1 },
        async: true,
        success: function(data) {
          // console.log(JSON.parse(data).data.data);
          var alldata = JSON.parse(data).data.data;
          for (var i = 0; i < alldata.length; i++) {
            self.arr.push(alldata[i]);
          }
        }
      });

    },
    // 请求数据结束———————————————————————————————————————————————————


    //点击按钮显示材料—————————————————————————————————————————
    display: function(idx) {
      let content = $(".content-b");
      if (content.eq(idx).css("display") == "none") {
        content.eq(idx).show();
      } else {
        content.eq(idx).hide();
      }
    },
    //点击按钮显示材料结束—————————————————————————————————————————


    // 滚动加载更多—————————————————————————————————————————————
    loadMore() {
      this.loading = true;
      setTimeout(() => {

        //每隔10条数据后发起ajax请求
        var self = this;
        $.ajax({
          type: "get",
          url: "http://localhost:9999/getContent",
          data: { num: self.num },
          async: true,
          success: function(data) {
            var alldata = JSON.parse(data).data.data;
            for (var i = 0; i < alldata.length; i++) {
              self.arr.push(alldata[i]);
            }
          
          }

        });
        
        this.loading = false;
      }, 2500);
        this.num++;
    },
    // 滚动加载更多结束—————————————————————————————————————————————
       
    
    toggle:function(){
      this.isShow = !this.isShow;
    }

      // loadshows:function(){
      //   var a = $('.pkshows')
      //   console.log(a);
      //   $('.pkshows').css("display","block");
      // }

  },


   // 一打开页面执行这个单文件————————————————————————————————————————
  mounted() {
    this.getContent();
  },

   // 引进来的组件————————————————————————————————————————
  components: {
    pkshows
  }
};
</script>




<style scoped>
.show {
  width: 100%;
}
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
.top {
  background: #ecebe9;
  width: 100%;
  height: 8px;
}
.img-t {
  display: flex;
}
.imgdata {
  width: 100%;
  padding: 11px 11px 0 11px;
}
.content-t {
  float: left;
  width: 100%;
  height: 40px;
}
.name {
  padding: 8px 10px 8px 10px;
  float: left;
  font-weight: bold;
}
.like {
  font-size: 30px;
  color: #ddd;
  float: right;
  padding: 10px 20px 0 0;
}
.content-c {
  width: 100%;
  height: 85px;
}
.material {
  width: 133px;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 3px;
  color: #fff;
  background: #aaa;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  float: left;
  text-align: center;
  margin: 5px 0 10px 10px;
}
.num {
  height: 30px;
  font-size: 12px;
  color: #ccc;
  float: right;
  padding: 4px 26px 0 0;
}
.content-b {
  display: none;
  width: 100%;
}
.content-b li {
  border-top: 1px solid #eee;
  font-size: 12px;
  line-height: 35px;
  margin: 0;
  padding: 0;
}
.content-b {
  overflow: hidden;
}
.content-b li .el-icon-circle-check {
  margin-left: 10px;
}
.raw {
  padding-left: 20px;
}
.weight {
  float: right;
  padding-right: 120px;
}
</style>
