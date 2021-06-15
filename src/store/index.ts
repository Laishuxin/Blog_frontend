import { IUser } from '@/types/defineUser'
import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store, useStore as baseUserStore } from 'vuex'
import mutations from './mutations'

export interface NavItem {
  name: string
  path: string
  children?: NavItem[]
}

export type NavList = NavItem[]

export interface State {
  user: IUser | null
  isLogin: boolean
  showAside: boolean
  showSideBar: boolean
  navList: NavList
}

export const key: InjectionKey<Store<State>> = Symbol()
// TODO(rushui 2021-04-19): state permanent

export const store = createStore<State>({
  state: {
    user: null,
    isLogin: false,
    showAside: true,
    showSideBar: false,
    navList: [
      { name: '首页', path: '/home' },
      {
        name: '分类',
        path: '/category',
        children: [
          {
            name: '前端基础',
            path: '/frontend',
            // TODO(rushui 2021-04-29): modify path
            children: [
              { name: 'html', path: '/home' },
              { name: 'css', path: '/home' },
              { name: 'javascript', path: '/home' },
              { name: 'typescript', path: '/home' },
              { name: 'network', path: '/home' },
            ],
          },
          { name: '系列文章', path:'series', children: [] },
        ],
      },
      { name: '标签', path: '/tag' },
      { name: '归档', path: '/timeline' },
      { name: 'about', path: '/about' },
    ],
  },
  mutations,
})

export function useStore() {
  return baseUserStore(key)
}
