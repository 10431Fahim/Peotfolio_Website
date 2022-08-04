import Vue from 'vue'

//import VueRouter from 'vue-router'
import HomePag from '../views/HomePag.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePag',
    component: HomePag
  },
  {
    Path :'/about',
    name: 'AboutPag',
    // route level code-splitting
    // this generates a separate chunk (AboutPag.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    component: () => import(/* webpackChunkName: "AboutPag" */ '../views/AboutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
