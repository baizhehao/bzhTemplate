// The Vue build version to load with the `import` command使用“import”命令加载的Vue构建版本
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.(仅运行时或独立运行时)在webpack.base.conf中设置了别名。
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import axios from './axios/index.js';

Vue.prototype.$api = axios;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
