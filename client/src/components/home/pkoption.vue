<template>
    <div class="option">
        <ul>
            <li>
                <img src="../../assets/home/j-zxpf.jpg" >
                <p>智选配方</p>
            </li>
            <li>
                <img src="../../assets/home/j-wxz.jpg" >
                <p>我想做</p>
            </li>
            <li>
                <img src="../../assets/home/j-wzg.jpg" >
                <p>我做过</p>
            </li>
            <li>
                <img src="../../assets/home/j-zjkg.jpg" >
                <p>最近看过</p>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        
    }
</script>


<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .option{
        width:100%;
        height:100px;
    }
    ul,li{
        list-style: none;
    }
    ul{
        height: 100px;
        padding: 30px 14px 0 14px;
        width:100%;
    }
    li{
        width:25%;
        float: left;
        text-align: center;
    }
    img{
        width: 29px;
    }
    p{
        font-size: 13px;
        color:#464646;
    }
</style>

