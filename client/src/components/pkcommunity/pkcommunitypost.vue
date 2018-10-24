<template>
<div>
  <ul v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
    <li  v-for="(li,idx) in arr" :key="idx">
      <div class="card" >
        <!-- 用户信息 -->
        <div class="msg">
           <div class="msg-l">
               <img class="imgdata" :src="li.clientImage"/> 
           </div>
           <div class="msg-c">
               <p class="nickname">{{li.clientName}}</p>
               <p class="recommend">编辑推荐</p>
           </div>
           <div class="msg-r">
               <span class="attention">+关注</span>
           </div>
        </div>

        <!-- 主图 -->
        <img class="bigimgdata main" :src="li.coverImage"/> 

        <!-- 描述、交流 -->
        <p class="title">{{li.title}}</p>
        <p class="description">{{li.coverSummary}}</p>
        <div class="Keyword">
            <span>经验交流</span>
            <span>晒我做的</span>
            <span>低脂</span>
            <span>下午茶</span>
            <span>烘焙</span>
        </div>

        <!-- 互动 -->
        <div class="interactive">
            <span class="awesome">
                <img src="../../assets/community/j-dz.jpg" >
                <span class="zan">赞</span>
                <span class="zan-num">{{li.collectNum}}</span>
            </span>
            <span class="comment">
                <img src="../../assets/community/j-pl.jpg" >
                <span class="pl">评论</span>
                <span class="li-num">{{li.easyNum}}</span>
            </span>
            <span class="share ">
                <img src="../../assets/community/j-fx.jpg" >
                <span class="fx-gd">分享及更多</span>
            </span>
        </div>

        <!-- 相关配方 -->
        <div class="formula">
            <p class="formula-t">相关配方</p>
            <div>
                <img src="../../assets/community/j-a.jpg">
                <div class="cakename">
                    <p class="formulaname">水果多多蛋糕</p>
                    <p class="formuladie">by 发现好配方</p>
                </div>
                
            </div>
        </div>

        <div class="line"></div>

    </div>
    </li>
  </ul>
</div>
</template>





<script>
export default {
  data() {
    return {
      arr: [],
      list: [],
      num:''
    };
  },
  methods: {
    // 请求数据————————————————————————————————————————
    getContent2() {
      var self = this;
      $.ajax({
        type: "get",
        url: "http://localhost:9999/getContent",
        data: { num: 2 },
        async: true,
        success: function(data) {
          var alldata = JSON.parse(data).data.data;
          for (var i = 0; i < alldata.length; i++) {
            self.arr.push(alldata[i]);

            // 打印数据
            console.log(alldata[i]);
          }
        }
      });
    },
    // 请求数据结束————————————————————————————————————————

    // 滚动加载更多————————————————————————————————————————
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
            console.log(JSON.parse(data).data.data);
            var alldata = JSON.parse(data).data.data;
            for (var i = 0; i < alldata.length; i++) {
              self.arr.push(alldata[i]);
            }
          }
        });

        this.loading = false;
      }, 250);
      this.num++;
    }
    // 滚动加载更多结束————————————————————————————————————————

  },

  // 一打开页面执行这个单文件————————————————————————————————————————
  mounted() {
    this.getContent2();
  }
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: boeder-box;
}

/* __________________用户信息______________ */
.msg {
  width: 100%;
  height: 60px;
  padding-top: 12px;
}
.avatar {
  width: 100%;
  float: left;
}
.msg-l {
  width: 15%;
  float:left;
}
.msg-l img {
  width: 41px;
  height: 41px;
  border-radius:50%;
  margin: 0 5px 0 10px;
}
.msg-c {
  width: 62%;
  font-size: 12px;
  letter-spacing: 1px;
  float: left;
  padding-left: 5px;
}
.nickname {
  color: #333;
  font-size: 13px;
}
.recommend {
  color: lightgray;
}
.msg-r {
  display: inline-block;
  width: 20%;
}
.attention {
  font-size: 12px;
  color: #d90000;
  display: block;
  width: 55px;
  height: 23px;
  border: 1px solid #d90000;
  border-radius: 5px;
  background: #fff;
  float: right;
  text-align: center;
  line-height: 23px;
  margin-top: 8px;
}

/* __________________主图______________ */
.main {
  width: 100%;
  padding: 0px 10px;
}

/* __________________描述、交流______________ */
.title {
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0 0 10px;
}
.Keyword {
  font-size: 12px;
}
.description {
  font-size: 12px;
  padding: 4px 10px 0 10px;
  color: #777;
}
.Keyword {
  font-size: 12px;
  margin: 0 10px;
}
.Keyword span {
  display: inline-block;
  background: #7fcac5;
  color: #fff;
  padding: 3px 5px;
  margin: 20px 5px;
  border-radius: 5px;
  letter-spacing: 1px;
}
.Keyword span:nth-child(1) {
  margin-left: 0;
}
.Keyword span:nth-child(3),
.Keyword span:nth-child(4),
.Keyword span:nth-child(5) {
  background: #eeedeb;
  color: #999997;
}

/* __________________互动______________ */
.interactive {
  height: 35px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  color: #111;
}
.interactive img {
  width: 17px;
}
.awesome {
  display: inline-block;
  width: 33.3%;
  height: 35px;
  border-right: 1px solid #eee;
  text-align: center;
  line-height: 35px;
}
.zan {
  padding: 0 5px 0 10px;
}
.comment {
  display: inline-block;
  width: 33.3%;
  height: 35px;
  border-right: 1px solid #eee;
  text-align: center;
}
.pl {
  padding: 0 5px 0 10px;
}
.share {
  display: inline-block;
  width: 33.3%;
  height: 35px;
  text-align: center;
}
.fx-gd {
  padding: 0 0 0 10px;
}

/* __________________相关配方______________ */
.formula {
  width: 100%;
  height: 90px;
  padding-top: 3px;
}
.formula-t {
  display: inline-block;
  font-size: 12px;
  color: #777;
  margin-left: 10px;
}
.formula img {
  display: inline-block;
  width: 40px;
  margin: 3px 10px;
}
.cakename {
  display: inline-block;
}
.formulaname {
  font-size: 14px;
}
.formuladie {
  font-size: 12px;
  color: #999;
}

.line {
  width: 100%;
  height: 10px;
  background: #ecebe9;
}
</style>
