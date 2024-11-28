import { UserInfo } from '@/store/slice/user'
import { request } from '@/utils/request'
export const getUserInfoRequest = () => {
  return request<UserInfo>('/v1/getinfo', 'GET')
}
// 登录
export const Login_async = (data: any) => {
  return request<string>('/v1/login', 'POST', data)
}
