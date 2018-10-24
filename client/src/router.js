import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);


import Pkfooter from '@/components/pkfooter'
import Pkhome from '@/components/pkhome'
import Pkcommunity from '@/components/pkcommunity'
import Pkgoods from '@/components/pkgoods'
import Pktopic from '@/components/pktopic'
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
        path: '/pkcommunity',
        name: 'pkcommunity',
        component: Pkcommunity
    },
    {
        path: '/pkgoods',
        name: 'pkgoods',
        component: Pkgoods
    },
    {
        path: '/pktopic',
        name: 'pktopic',
        component: Pktopic
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
