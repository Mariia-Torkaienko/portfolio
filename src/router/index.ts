import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/portfolio',
      name: '/portfolio',
      component: () => import('../pages/PortfolioPage.vue')
    },
    {
      path: '/contact',
      name: '/contact',
      component: () => import('../pages/ContactMePage.vue')
    }
  ]
})

export default router
