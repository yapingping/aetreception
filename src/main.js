import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
// 配置element-ui
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
// axios
import axios from 'axios'
axios.defaults.baseURL="http://117.50.163.249:3335",
// 请求拦截器
axios.interceptors.request.use(config=>{
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http=axios

Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
