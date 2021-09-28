import { HOMEPAGE_ROUTE, AUTHENTICATION_ROUTE, PROFILE_ROUTE } from './../constants/constants';
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Authentication from '../views/Authentication.vue'
import Profile from '../views/Profile.vue'

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
  },
  {
    path: PROFILE_ROUTE,
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
