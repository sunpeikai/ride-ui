// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import message from './assets/js/message'
import globalObj from './assets/js/globalObj'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// Vue.component('sandman-header', header)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.globalObj_ = globalObj
Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://39.104.80.30:8081'
axios.defaults.baseURL = 'http://localhost:8082'
axios.defaults.withCredentials = true
var errorMap = {
  401: '上传文件为空',
  423: '用户不存在'
}
axios.interceptors.response.use((success) => {
  console.info('错误代码:' + success.data.code + ';错误信息:' + errorMap[success.data.code])
  if (success.data.code !== 200 && success.data.code !== 419) {
    message.errorMsg('错误代码:' + success.data.code, success.data.message) // elementUI的弹框
    return success
  } else {
    return success
  }
}, (error) => {
  message.errorMsg('服务器错误', error.message)
  return null
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
