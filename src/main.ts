import { createApp } from 'vue'
import '@/styles/index.scss'
// element css
import 'element-plus/dist/index.css'
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
// svg icons
import 'virtual:svg-icons-register'
// element plus
import ElementPlus from 'element-plus'
// element icons
import * as Icons from '@element-plus/icons-vue'
import App from './App.vue'
// custom directives
import directives from '@/directives/index'
// vue Router
import router from '@/routers'
// pinia store
import pinia from '@/stores'

const app = createApp(App)

app.config.errorHandler = errorHandler

// register the element Icons component
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(ElementPlus).use(directives).use(router).use(pinia).mount('#app')
