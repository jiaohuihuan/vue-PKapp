import Vue from 'vue';
import App from './App';
import router from './router';

//weui框架
import 'weui';

// uielement-ui框架;
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';


// jquery
import $ from 'jquery';
window.$ = $;


// mint-ui框架;
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


Vue.config.productionTip = false


// 实例方法一
new Vue({
  render: h => h(App),
  router
  // store
}).$mount('#app')


// 实例方法二
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })


