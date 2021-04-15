import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Tag from '@/views/Tag/index.vue'
import Timeline from '@/views/Timeline/index.vue'
import About from '@/views/About/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/tag',
    component: Tag,
  },
  {
    path: '/timeline',
    component: Timeline,
  },
  {
    path: '/about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
