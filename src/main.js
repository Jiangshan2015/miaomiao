import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

// <!-- 过滤器 
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

import  Scroller from '@/components/Scroller';
Vue.component('Scroller',Scroller);

import Loading from '@/components/Loading';
Vue.component('Loading',Loading);

//这里就是对组件的绑定
import theConfirm from '@/components/JS'
Vue.prototype.$confirm = theConfirm;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
