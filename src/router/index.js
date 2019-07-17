import Vue from 'vue';
import Router from 'vue-router';

import text from '@/page/text';//测试页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: text
    }
  ]
})
