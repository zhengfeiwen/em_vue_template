import { createApp } from 'vue'
import './style/index.scss'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import 'vue-global-api' // unplugin-auto-import插件的继承者，解决因为它的自动导入导致的eslint报错
import { FloatButton, FloatButtonGroup } from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'
import 'virtual:svg-icons-register'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
// app.use(antd)
app.use(router)
app.use(FloatButton, FloatButtonGroup)


app.mount('#app')
