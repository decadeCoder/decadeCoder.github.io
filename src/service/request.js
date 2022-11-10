import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import QS from 'qs'

// 创建axios实例
const service = new axios({
  baseURL: 'http:1223.2.2.2',
  timeout: 5000
})

//request拦截器
service.interceptors.request.use(
  (config) => {
    //每次发送请求前判断有没有token和token是否过期了
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = localStorage.getItem('token')
    }
    return config
  },
  (error) => {
    console.log(error)
  }
)
// respone拦截器
service.interceptors.reponse.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Message({
            message: '登录过期，请重新登录',
            type: 'error'
          })
          // 清除token
          localStorage.removeItem('token')
          store.commit('loginSuccess', null)
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break
        // 404请求不存在
        case 404:
          Message({
            message: '网络请求不存在',
            type: 'error'
          })
          break
        // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.response.data.message,
            type: 'error'
          })
      }
      return Promise.reject(error.response)
    }
  }
)

export function get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, { params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
