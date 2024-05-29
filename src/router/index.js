import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/index.vue'
import register from '../views/register/index.vue'
import user from '../views/user/index.vue'
import movieDetail from '../views/movieDetail/index.vue'
import movieDetailIntro from '../views/movieDetailIntro/index.vue'
import movieDetailPerformer from '../views/movieDetailPerformer/index.vue'
import movieDetailPicture from '../views/movieDetailPicture/index.vue'
import movie from '../views/movie/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movieDetail/111'
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
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail,
      children: [
        // 电影简介
        {
          path: '/movieDetail/:id/introduction',
          name: 'movieDetailIntro',
          component: movieDetailIntro
        },
        {
          path: '/movieDetail/:id/performer',
          name: 'movieDetailPerformer',
          component: movieDetailPerformer
        },
        {
          path: '/movieDetail/:id/picture',
          name: 'movieDetailPicture',
          component: movieDetailPicture
        }
      ]
    }
  ]
})

export default router
