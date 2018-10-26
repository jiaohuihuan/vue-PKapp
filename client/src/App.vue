<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>



<script>
  import pkhome from './components/pkhome.vue'
  import pkhomesearch from './components/home/pkhomesearch.vue'
  import optionpf from './components/home/option/optionpf.vue'
  import optionxz from './components/home/option/optionxz.vue'
  import optionzg from './components/home/option/optionzg.vue'
  import optionkg from './components/home/option/optionkg.vue'

  import pktopic from './components/pktopic.vue'
  import pkgoods from './components/pkgoods.vue'
  import pkgoodssearch from './components/goods/pkgoodssearch.vue'
  import pkcommunity from './components/pkcommunity.vue'
  import pkcommunitysearch from './components/pkcommunity/pkcommunitysearch.vue'
  import pkmine from './components/pkmine.vue'





    export default {
      name: 'app',
      components: {
        pkhome,
        pkhomesearch,
        optionpf,
        optionxz,
        optionzg,
        optionkg,

        pktopic,
        pkgoods,
        pkgoodssearch,
        pkcommunity,
        pkcommunitysearch,
        pkmine
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
