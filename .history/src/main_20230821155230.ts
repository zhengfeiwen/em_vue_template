import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
