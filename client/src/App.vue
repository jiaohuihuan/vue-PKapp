<template>
  <div id="app">
    <router-view></router-view>
    <pkfooter></pkfooter>
  </div>
</template>




<script>
  import pkhome from './components/pkhome.vue'
  import pktopic from './components/pktopic.vue'
  import pkgoods from './components/pkgoods.vue'
  import pkcommunity from './components/pkcommunity.vue'
  import pkmine from './components/pkmine.vue'
  import pkfooter from './components/pkfooter.vue'





    export default {
      name: 'app',
      components: {
        pkhome,
        pktopic,
        pkgoods,
        pkcommunity,
        pkmine,
        pkfooter
      }
    }
</script>




<style>
  body{ margin:0;}
  html,body{
    height:100%;
  }
  #App{
      height:100%;
  }
  *{
    box-sizing:border-box;
  }
  
</style>
