import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Index from './components/Index.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUi)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
const token = localStorage.getItem('token')
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})
export default router
