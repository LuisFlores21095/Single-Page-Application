import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/store',
    name: 'store',
    component: () => import(/* webpackChunkName: "about" */ '../views/Store.vue')

  },
  {
    path: '/Contact',
    name: 'Contact'
  },
  {
    path: '/About',
    name: 'About'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
