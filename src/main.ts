import { createApp } from 'vue'
import App from './App.vue'
import '@/style/main.scss'
// import 'amfe-flexible'
import router from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app')
