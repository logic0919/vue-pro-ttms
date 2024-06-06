import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/indexPage.vue'
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
import movieSession from '@/views/movieDetail/movieSession.vue'
import viewMovie from '@/views/adminMovie/viewMovie.vue'
import showMovie from '@/views/adminMovie/showMovie.vue'
import notFound from '@/views/notFound/index.vue'
import index from '@/views/index/index.vue'
// import { useUserStore } from '@/stores/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movieDetail/111'
    },
    {
      path: '/index',
      component: index,
      name: 'index'
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
      redirect: '/admin/showHall/1',
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
        {
          path: '/admin/showMovie',
          name: 'showMovie',
          component: showMovie
        },
        {
          path: '/admin/viewMovie/:id',
          name: 'viewMovie',
          component: viewMovie
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
      path: '/order/:session_id',
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
      path: '/movieSession/:id',
      name: 'movieSession',
      component: movieSession
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: notFound
    }
  ]
})
// // 登录禁止权限页面路径数组
// const authUrls = [
//   'user',
//   'showHall',
//   'viewHall',
//   'addHall',
//   'showSession',
//   'viewSession',
//   'addSession',
//   'addTheater',
//   'addMovie',
//   'orderShow'
// ]
// // 管理员禁止权限页面
// const adminUrls = [
//   'showHall',
//   'viewHall',
//   'addHall',
//   'showSession',
//   'viewSession',
//   'addSession',
//   'addTheater',
//   'addMovie'
// ]
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()
//   const id = userStore.id
//   const status = userStore.status
//   //   管理员要求页面
//   if (adminUrls.includes(to.name)) {
//     console.log('进入管理页面')
//     // 登录并且身份是管理员
//     if (!(id && status === 3)) {
//       ElMessage.error('权限不足，无法访问')
//       return
//     }
//   }
//   // 登录要求页面
//   else if (authUrls.includes(to.name)) {
//     console.log('进入登录限制页面')
//     if (!id) {
//       ElMessage.error('请先登录')
//       next('/login')
//       return
//     }
//   }
//   next()
// })

export default router
