import { HOMEPAGE_ROUTE, AUTHENTICATION_ROUTE } from './../constants/constants';
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Authentication from '../views/Authentication.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: HOMEPAGE_ROUTE,
    name: 'Home',
    component: Home
  },
  {
    path: AUTHENTICATION_ROUTE,
    name: 'Authentication',
    component: Authentication
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
