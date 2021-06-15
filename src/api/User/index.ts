import { LoginApi } from '@/types/defineApi'
import http from '../http'

export function login<T = any>(user: LoginApi) {
  const result =  http.post<any, T>('/auth/account', {
    ...user
  })
  // console.log('axios result = ')
  // console.log(result)
  return result
}

export function getUserByUsername(username: string) {
  return http.get(`/user/get/${username}`)
}
