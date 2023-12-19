import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 引入组件
import login from 'views/login'

import system from 'views/system'

import home from 'views/home'

import activity from 'views/activity'

import column from 'views/column'
import science from 'views/science'
import splendidmonent from 'views/splendidmonent'

import user from 'views/user'




const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/system',
    component: system,
    children: [
      {
        path: '/',
        redirect: '/home' // 默认显示主页面
      },
      {
        path: '/home',
        component: home,
        children: [],
      },
      {
        path: '/activity',
        component: activity,
        children: [],
      },
      {
        path: '/column',
        component: column,
        children: [
          {
            path: '',
            redirect: '/science'
          },
          {
            path: '/science',
            component: science
          },
          {
            path: '/splendidmonent',
            component: splendidmonent,
          }
        ],
      },
      {
        path: '/user',
        component: user,
        children: [],
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 挂在导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login')
    return next()
  const tokenStr = window.sessionStorage.getItem('token')
  // 未登录则强制跳转到login界面，下行代码实现登录即可使用
  // if(!tokenStr) return next('/login')
  next()
})

export default router
