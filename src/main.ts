import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index.ts'
import store from './store/index.ts'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
