import { createRouter, createWebHashHistory } from 'vue-router'
/* Layout */
import layout from '@/layout/index.vue'
const router=createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/home',
      meta: { auth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('../pages/login/index.vue')
    },
    {
      path: '/home',
      component: layout,
      name: 'home',
      redirect: '/home/index',
      children: [
        {
          path: '/home/index',
          name: 'homeIndex',
          component: () => import ('../pages/home/index.vue')
        }
      ]
    }
  ]
})

export default router
