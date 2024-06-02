import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/login.vue'
import register from '../views/login/register.vue'
import user from '../views/user/index.vue'
import movieDetail from '../views/movieDetail/index.vue'
import movieDetailIntro from '../views/movieDetail/movieDetailIntro.vue'
import movieDetailPerformer from '../views/movieDetail/movieDetailPerformer.vue'
import movieDetailPicture from '../views/movieDetail/movieDetailPicture.vue'
import movie from '../views/movie/index.vue'
import addMovie from '../views/adminMovie/addMovie.vue'
import test from '../views/test/index.vue'
import order from '../views/order/setOrder.vue'
import orderShow from '../views/order/payOrder.vue'
import addHall from '../views/adminHall/addHall.vue'
import addTheater from '@/views/adminTheater/addTheater.vue'
import admin from '@/views/admin/index.vue'
import showHall from '@/views/adminHall/showHall.vue'
import viewHall from '@/views/adminHall/viewHall.vue'
import showSession from '@/views/adminSession/showSession.vue'
import addSession from '@/views/adminSession/addSession.vue'
import viewSession from '@/views/adminSession/viewSession.vue'
import notFound from '@/views/notFound/index.vue'

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
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        // 关于影厅管理
        {
          path: '/admin/showHall/:id',
          name: 'showHall',
          component: showHall
        },
        {
          path: '/admin/viewHall/:theater_id/:id',
          name: 'viewHall',
          component: viewHall
        },
        {
          path: '/admin/addHall/:theater_id',
          name: 'addHall',
          component: addHall
        },
        // 关于场次管理
        {
          path: '/admin/showSession/:theater_id',
          name: 'showSession',
          component: showSession
        },
        {
          path: '/admin/viewSession/:theater_id/:id',
          name: 'viewSession',
          component: viewSession
        },
        {
          path: '/admin/addSession/:theater_id',
          name: 'addSession',
          component: addSession
        },
        // 关于影片管理
        {
          path: '/admin/addMovie',
          name: 'addMovie',
          component: addMovie
        },
        // 关于影院管理
        {
          path: '/admin/addTheater',
          name: 'addTheater',
          component: addTheater
        }
      ]
    },
    {
      path: '/orderShow',
      name: 'orderShow',
      component: orderShow
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/order',
      name: 'order',
      component: order
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: notFound
    }
  ]
})

export default router
