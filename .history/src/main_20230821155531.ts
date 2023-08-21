import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'


import 'ant-design-vue/dist/reset.css'
const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(Antd)
app.use(router)


app.mount('#app')
