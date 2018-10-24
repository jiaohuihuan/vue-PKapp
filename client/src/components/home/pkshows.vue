<template>
    <div class="shows">
        <div class="top"></div>
        <ul class="ul">
            <li class="li" v-for="(url,idx) in imgdata" :key="idx">
                <img class="imgdata" :src="url"/> 
                <p>{{namedata[idx]}}</p>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        data() {
            return {
            arr: [],
            imgdata: [],
            namedata:[]
            }
        },
    methods: {
        // 请求数据————————————————————————————————————————
        getContent() {
        var self = this;
        $.ajax({
            type: "get",
            url: "http://localhost:9999/getContent",
            data:{num:1},
            async: true,
            success: function(data) {
            var alldata = JSON.parse(data).data.data;
            for (var i = 0; i < alldata.length-7; i++) {
                // 小图片数据
                self.imgdata.push(alldata[i].coverImage);
                // 小图片title数据
                self.namedata.push(alldata[i].clientName);

                // 打印数据
                // console.log(alldata[i]);
            }

            var content = JSON.parse(data);
            self.arr = content.list;
            }
        });
        },   
    },
    mounted() {
        this.getContent();
    }
};
</script>


<style scoped>
    *{
        box-sizing:border-box;
        list-style:none;
        text-decoration: none;
    }
    .top{
        background: #ECEBE9;
        width:100%;
        height: 8px;
    }
    ul{
        width:100%;
        overflow: hidden;
        padding: 10px 0 10px 0px;
        text-align: center;
    }
    li{
        width: 30%;
        margin: 0 0 0 2.5%; 
        float:left;
    }
    img{
        width: 112px;
        height: 85px;
    }
    p{
        font-size: 12px;
        color:#111;
        padding-top: 2px;
    }
</style>
