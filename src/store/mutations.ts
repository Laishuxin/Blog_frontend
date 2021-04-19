import { IUser } from '@/types/defineUser'
import { State } from '.'
import { SET_LOGIN, SET_USER } from './mutation-types'

const mutations = {
  [SET_USER](state: State, payload: IUser) {
    state.user = payload
  },

  [SET_LOGIN](state: State, payload: boolean) {
    state.isLogin = payload
  },
}

export default mutations
