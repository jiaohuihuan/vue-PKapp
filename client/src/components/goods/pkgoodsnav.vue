<template>
    <div>
        <ul class="goodsnav" >
            <li  v-for="(li,idx) in lis" :key="idx">{{lis[idx]}}</li>
        </ul>
    </div>   
</template>



<script>
export default {
    data(){
        return{
            lis:['全部','入门推荐','DIY套餐','烘焙工具','烘焙原料','烘焙模具','烘焙电器','烘焙包装','厨房用品'],
            startX: 0,
            endX: 0,
            baseMoveX: 0,
            idx: 0
        }
    },
  methods: {
    move:function(idx) {
      let goodsnav = $(".goodsnav");
      let lis = $("li");
    
      


      // console.log(goodsnav);
      // console.log(lis);
    }
  },
  mounted() {
    this.move();
  }
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.goodsnav {
  margin-top: 50px;
  overflow: hidden;
  width: 100%;
  height: 37px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
  line-height: 37px;
  font-size: 13px;
  letter-spacing: 1.5px;
  color: #444;
  white-space: nowrap;
  background: #fff;
  float: left;
}
li {
  display: inline-block;
  white-space: nowrap;
  padding: 0 10px;
}
li:nth-child(1) {
  padding-left: 17px;
}
</style>
