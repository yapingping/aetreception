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
import notdetail from 'views/notdetail'
import actdetail from 'views/actdetail'
import coldetail from 'views/coldetail'



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
        redirect: 'home' // 默认显示主页面
      },
      {
        path: 'home',
        component: home,
        children: [],
      },
      {
        path:'notdetail',
        component:notdetail,
      },
      {
        path: 'activity',
        component: activity,
        children: [],
      },
      {
        path:'actdetail',
        component:actdetail,
      },
      {
        path: 'column',
        component: column,
        children: [
          {
            path: '',
            redirect: 'science'
          },
          {
            path: 'science',
            component: science
          },
          {
            path: 'splendidmonent',
            component: splendidmonent,
          },
          {
            path:'coldetail',
            component:coldetail,
          }
        ],
      },
      {
        path: 'user',
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
// 挂载导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login')
    return next()
  const tokenStr = window.sessionStorage.getItem('token')
  // 未登录则强制跳转到login界面
  if(!tokenStr) return next('/login')
  next()
})

export default router
