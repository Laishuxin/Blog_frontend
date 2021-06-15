import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Tag from '@/views/Tag/index.vue'
import Timeline from '@/views/Timeline/index.vue'
import About from '@/views/About/index.vue'
import Login from '@/views/Login/index.vue'
import OffLine from '@/views/OffLine/index.vue'
import NotFound from '@/views/NotFound/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    name: 'root',
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'offLine',
    path: '/offLine',
    component: OffLine,
  },
  {
    name: 'category',
    path: '/category',
    component: Category,
  },
  {
    name: 'tag',
    path: '/tag',
    component: Tag,
  },
  {
    name: 'timeline',
    path: '/timeline',
    component: Timeline,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'notFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function push(path: string, delay = 0) {
  if (router.currentRoute.value.path !== path) {
    if (delay >= 0) setTimeout(() => router.push(path), delay)
    else router.push(path)
  }
}

export default router
