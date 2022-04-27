import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/gameSetup',
    name: 'gameSetup',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameSetup.vue')
  },
  {
    path: '/playGame',
    name: 'playGame',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlayGame.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
