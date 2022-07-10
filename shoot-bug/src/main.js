import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/mock/mock_server';  //执行mock_server里的代码

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

const vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
//创建全局事件总线
Vue.prototype.$bus = new Vue()