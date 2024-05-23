import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/index.vue'
import register from '../views/register/index.vue'
import user from '../views/user/index.vue'
import movieDetail from '../views/movieDetail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register/:token',
      name: 'register',
      component: register
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    }
  ]
})

export default router
