import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);


import Pkfooter from '@/components/pkfooter'
import Pkhome from '@/components/pkhome'
import Pkhomesearch from '@/components/home/pkhomesearch'
import Optionpf from '@/components/home/option/optionpf'
import Optionxz from '@/components/home/option/optionxz'
import Optionzg from '@/components/home/option/optionzg'
import Optionkg from '@/components/home/option/optionkg'


import Pktopic from '@/components/pktopic'
import Pkgoods from '@/components/pkgoods'
import Pkgoodssearch from '@/components/goods/pkgoodssearch'
import Pkcommunity from '@/components/pkcommunity'
import Pkcommunitysearch from '@/components/pkcommunity/pkcommunitysearch'
import Pkmine from '@/components/pkmine'
import Pklogin from '@/components/mine/pklogin'
import Pkreg from '@/components/mine/pkreg'





//路由配置
export default new Router({
  routes: [
    {
        path: '/pkfooter',
        name: 'pkfooter',
        component: Pkfooter
    },
    {
        path: '/',
        name: 'pkhome',
        component: Pkhome,
    },
    {
        path: '/pkhomesearch',
        name: 'pkhomesearch',
        component: Pkhomesearch,
    },
    {
        path: '/optionpf',
        name: 'optionpf',
        component: Optionpf,
    },
    {
        path: '/optionxz',
        name: 'optionxz',
        component: Optionxz,
    },
    {
        path: '/optionzg',
        name: 'optionzg',
        component: Optionzg,
    },
    {
        path: '/optionkg',
        name: 'optionkg',
        component: Optionkg,
    },
    {
        path: '/pktopic',
        name: 'pktopic',
        component: Pktopic
    },
    {
        path: '/pkgoods',
        name: 'pkgoods',
        component: Pkgoods
    },
    {
        path: '/pkgoodssearch',
        name: 'pkgoodssearch',
        component: Pkgoodssearch,
    },
    {
        path: '/pkcommunity',
        name: 'pkcommunity',
        component: Pkcommunity
    },
    {
        path: '/pkcommunitysearch',
        name: 'pkcommunitysearch',
        component: Pkcommunitysearch
    },
    {
        path: '/pkmine',
        name: 'pkmine',
        component: Pkmine,
    },
    {
        path: '/pklogin',
        name: 'pklogin',
        component: Pklogin,
    },
    {
        path: '/pkreg',
        name: 'pkreg',
        component: Pkreg
    },
    

    //嵌套子路由
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index,
    //   redirect:'/fenclass',
    //   children:[
    //     {
    //       path: '/fenclass',
    //       name: 'fenclass',
    //       component: Fenclass
    //     },
        
    //   ]
    // }
    

  ],

  //去掉api的 #
  mode:"history"

})
