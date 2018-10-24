<template>
    <div>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li  v-for="(li,idx) in arr" :key="idx">
                <div class="theme theme-top" >
                    <img class="imgdata" :src="li.coverImage"/> 
                    <p class="title">{{li.clientSign}}</p>
                    <p class="details">{{li.coverSummary}}</p>
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
      num:29
    };
  },
  methods: {
    // 请求数据————————————————————————————————————————
    getContent1() {
      var self = this;
      $.ajax({
        type: "get",
        url: "http://localhost:9999/getContent",
        data: { num: 29 },
        async: true,
        success: function(data) {
          var alldata = JSON.parse(data).data.data;
          for (var i = 0; i < alldata.length; i++) {
              self.arr.push(alldata[i]);

              // 打印数据
            // console.log(alldata[i]);

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
              // console.log(alldata[i].clientId);
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
    this.getContent1();
  }
};
</script>


<style scoped>
* {
  margin-top: 8px;
  padding: 0;
}
.imgdata {
  width: 100%;
}
.theme {
  padding: 8px 8px 20px 8px;
}
.title {
  font-size: 17px;
  font-weight: bold;
}
.details {
  font-size: 12px;
  color: #ccc;
  padding-top: 5px;
}
</style>
