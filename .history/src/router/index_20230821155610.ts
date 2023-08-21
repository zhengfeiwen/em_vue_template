import {createRouter,createWebHashHistory} from 'vue-router'
const router=createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      name:'default',
      dir
      component:()=>import ('../pages/login/index.vue')
    },
    {
      path:"/login",
      name:'login',
      component:()=>import ('../pages/login/index.vue')
    }
  ]
})

export default router
