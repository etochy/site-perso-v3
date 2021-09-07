import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import TravelsPage from '../views/TravelsPage.vue'
import VideoGamesPage from '../views/VideoGamesPage.vue'
import SideProjectsPage from '../views/SideProjectsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/travels',
    name: 'Travels',
    component: TravelsPage
  },
  {
    path: '/video-games',
    name: 'Video-Games',
    component: VideoGamesPage
  },
  {
    path: '/side-projects',
    name: 'Side-Projects',
    component: SideProjectsPage
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/Error404.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
})

export default router
