import { IUser } from '@/types/defineUser'
import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store, useStore as baseUserStore } from 'vuex'
import mutations from './mutations'

export interface State {
  user: IUser | null
  isLogin: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()
// TODO(rushui 2021-04-19): state permanent

export const store = createStore<State>({
  state: {
    user: null,
    isLogin: false,
  },
  mutations,
})

export function useStore() {
  return baseUserStore(key)
}
