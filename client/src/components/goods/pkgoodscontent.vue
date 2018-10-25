<template>
    <div class="goodscontent">
        <ul  v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <li  v-for="(li,idx) in arr" :key="idx">
                <a :href="li.comment_url" >
                    <img :src="li.pic_url" />
                    <p class="description">{{li.raw_title}}</p>
                    <p>
                        <span class="sold">已售</span>
                        <span class="qty">{{li.view_sales}}</span>
                    </p>
                    <p class="allprice">
                        <span class="price">￥{{li.view_price}}</span>
                        <del class="delprice">￥92.00</del>
                    </p>
                </a>
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
      num: ""
    };
  },
  methods: {
    // 请求数据————————————————————————————————————————
    getGoods() {
      var self = this;
      $.ajax({
        type: "get",
        url: "http://localhost:9999/getGoods",
        data: { num: 10 },
        async: true,
        success: function(data) {
        //   由于数据前面为 jsonp255(  后面为 );   拿到数据前用slice方法截取掉多余的
          var databefore = JSON.parse(data.slice(11,-2));
        //   由于数据由对象包含着，利用键值对方法 [] 获取API.CustomizedApi对应的值
          var data = databefore['API.CustomizedApi'];

          var alldata = data.itemlist.auctions;


          for (var i = 0; i < alldata.length; i++) {
            self.arr.push(alldata[i]);

            // 打印数据
            // console.log(alldata);
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
          url: "http://localhost:9999/getGoods",
          data: { num: self.num },
          async: true,
          success: function(data) {

        //   由于数据前面为 jsonp255(  后面为 );   拿到数据前用slice方法截取掉多余的
          var databefore = JSON.parse(data.slice(11,-2));

        //   由于数据由对象包含着，利用键值对方法 [] 获取API.CustomizedApi对应的值
          var data = databefore['API.CustomizedApi'];

            var alldata = data.itemlist.auctions;

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
    this.getGoods();
  }
};
</script>







<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.goodscontent {
  margin-top: 87px;
}
ul {
  width: 100%;
}
li {
  width: 50%;
  float: left;
  border-right: 1px solid #eee;
  height: 300px;
}
li:nth-child(2n) {
  border-right: none;
}
img {
  width: 167px;
  margin: 10px 10px 3px 10px;
}
.description {
  font-size: 12px;
  color: #111;
  padding: 0 0 10px 10px;
}
.sold {
  font-size: 12px;
  color: #aaa;
  padding-left: 10px;
}
.qty {
  font-size: 12px;
  color: #aaa;
  padding-left: 10px;
}
.price {
  font-size: 13px;
  color: #d90000;
  padding-left: 10px;
}
.delprice {
  font-size: 12px;
  color: #aaa;
  text-decoration: line-through;
  padding-left: 18px;
}
</style>
