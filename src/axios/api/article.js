/**
  * article模块接口列表
  */

 import base from '../base'; // 导入接口域名列表
 import axios from '../http'; // 导入http中创建的axios实例

 
 const article = {
     // 新闻列表
     articleList () {
         return axios.get(`${base.sq}/text/get`);
     },
    //  // 新闻详情,演示
    //  articleDetail (id, params) {
    //      return axios.get(`${base.sq}/topic/${id}`, {
    //          params: params
    //      });
    //  },
    // post提交
    textPost (obj) {
        //测试post请求
        console.log(obj)
        return axios.post(`${base.sq}/text/post`,obj);
    }
 }
 
 export default article;
 