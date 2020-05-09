import axios from 'axios'
import message from './assets/js/message'
// import store from '@/store/index'

// 基础axios请求地址
let baseURL = 'http://localhost:8082'

axios.defaults.baseURL = baseURL
// post请求时设置为json
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.crossDomain = true
axios.defaults.withCredentials = true
axios.defaults.headers.common['token'] = '' // 设置请求头为 Authorization

axios.interceptors.request.use(function (config) {
  // 每次发送请求之前判断vuex中是否存在token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
  const token = window.localStorage.getItem('token')
  token && (config.headers.token = token)
})

axios.interceptors.response.use((success) => {
  if (success.data.code !== 200 && success.data.code !== 419) {
    // elementUI的弹框
    message.errorMsg(success.data.message)
    return success
  } else {
    return success
  }
}, (error) => {
  message.errorMsg('服务器错误', error.message)
  return null
})

export default{
  axios
}
