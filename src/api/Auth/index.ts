import { IUser } from '@/types/defineUser'
import http from '../http'

export function validate(token: string): Promise<IUser> {
  return http.post('/auth/validate', {
    token,
  }) as Promise<IUser>
}
