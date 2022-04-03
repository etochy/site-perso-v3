import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import TravelsPage from '../views/TravelsPage.vue'
import VideoGamesPage from '../views/VideoGamesPage.vue'
import SideProjectsPage from '../views/SideProjectsPage.vue'
import AsteroGame from '../views/AsteroGame.vue'
import Photos from '../views/Photos.vue'
import PhotographyPage from '../views/PhotographyPage.vue'
import BoardGamesPage from '../views/BoardGamesPage'

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
    path: '/travels/pictures',
    name: 'Pictures-travels',
    component: Photos
  },
  {
    path: '/photography',
    name: 'Photography',
    component: PhotographyPage
  },
  {
    path: '/photography/pictures',
    name: 'Pictures-photography',
    component: Photos
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
    path: '/video-games/astero-game',
    name: 'Astero-Game',
    component: AsteroGame
  },
  {
    path: '/video-games/board-game',
    name: 'Board-Game',
    component: BoardGamesPage
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
})

export default router
