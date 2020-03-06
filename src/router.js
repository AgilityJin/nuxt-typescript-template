import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('~/pages/index.vue').then((m) => m.default || m)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: home
      }
    ]
  })
}