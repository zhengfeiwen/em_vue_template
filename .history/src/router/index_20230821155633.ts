import {createRouter,createWebHashHistory} from 'vue-router'
const router=createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      name:'default',
      redirect: '/login',
      meta: { auth: false }
    },
    {
      path:"/login",
      name:'login',
      component:()=>import ('../pages/login/index.vue')
    }
  ]
})

export default router
