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
axios.defaults.baseURL="http://127.0.0.1:4523/m1/3767406-0-default",
Vue.prototype.$http=axios

Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
