import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, Method, AxiosResponse } from 'axios'
import { encrypt } from './encrypt'
import DOMPurify from 'dompurify'
import store from '@/store/index'
import emitter from '@/utils/event'

type RequestCustomConfig = AxiosRequestConfig & {
  // 是否加密
  isCrypto?: boolean
  // 是否净化排除html标签 防止xss攻击
  isPurify?: boolean
}

const BASE_URL = import.meta.env.VITE_BASE_URL

function createInstance(
  axiosConfig: AxiosRequestConfig,
  customConfig?: RequestCustomConfig
): AxiosInstance {
  const server: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    ...axiosConfig,
    ...customConfig,
    timeout: 60 * 5 * 1000,
    // 跨域请求是否允许携带凭证
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })

  const customOpt = Object.assign(
    {
      isCrypto: false,
      isPurify: true
    },
    customConfig
  )

  server.interceptors.request.use(
    config => {
      if (customOpt.isCrypto) {
        config.data = {
          data: encrypt(JSON.stringify(config.data))
        }
      }
      if (customOpt.isPurify) {
        // 处理post请求参数
        if (config.method == 'post' && config.data) {
          const dataStr = JSON.stringify(config.data)
          config.data = JSON.parse(DOMPurify.sanitize(dataStr))
        }
        // 处理get请求参数
        if (config.method == 'get' && config.params) {
          for (const key in config.params) {
            config.params[key] = DOMPurify.sanitize(String(config.params[key]))
          }
        }
      }
      // 获取当前状态
      const user = store.getState().user
      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  server.interceptors.response.use(
    response => {
      let msg = ''
      if (response && response.data.code != 200) {
        switch (response.data.code) {
          case 401:
            msg = '未授权,请登录'
            emitter.emit('401')
            break
          case 403:
            msg = '拒绝访问'
            break
          default:
            msg = '请求失败'
            break
        }
        console.log(msg, '211111111111111')
      }
      return response
    },
    error => {
      let msg = ''
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            msg = '请求错误'
            break
          case 404:
            msg = `请求地址出错: ${error.response.config.url}`
            break
          case 408:
            msg = '请求超时'
            break
          case 500:
            msg = '服务器内部错误'
            break
          default:
            msg = '请求失败'
            break
        }
        console.log(msg, '211111111111111')
      }
      return Promise.reject(error)
    }
  )

  return server
}

const server = (() => {
  const history: Array<string> = []
  return function (config: AxiosRequestConfig, customConfig: RequestCustomConfig = {}) {
    const { url } = config
    if (history.includes(url!)) {
      return Promise.reject({ msg: '请求已提交' })
    }
    history.push(url!)
    const instance = createInstance(config, customConfig)

    return instance.request(config).finally(() => {
      const idx = history.indexOf(url!)
      idx > -1 && history.splice(idx, 1)
    })
  }
})()

type ApiResponse<T> = {
  code: number
  message: string
  data: T
  token?: string
}

export const request = <T>(
  url: string,
  method: Method = 'get',
  submitData?: object,
  customConfig?: RequestCustomConfig
): Promise<ApiResponse<T>> => {
  return server(
    {
      url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    },
    customConfig
  ).then((response: AxiosResponse<ApiResponse<T>>) => response.data)
}
