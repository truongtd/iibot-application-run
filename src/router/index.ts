import {createRouter,createWebHistory} from 'vue-router';
import Login from '../views/Login.vue';
const routes = [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/error',
      name:'error',
      component:Error

    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router