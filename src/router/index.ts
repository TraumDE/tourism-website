import { createRouter, createWebHistory } from 'vue-router'
// import ScubaDivingPage from '@/views/ScubaDivingPage.vue'
// import KayakingPage from '@/views/KayakingPage.vue'
import ExtremeSurfingPage from '@/views/ExtremeSurfingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/extreme-surfing',
    },
    {
      path: '/extreme-surfing',
      name: 'ExtremeSurfing',
      component: ExtremeSurfingPage,
    },
  ],
})

export default router
