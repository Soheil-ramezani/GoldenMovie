import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
  , {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('../views/login/LoginForm.vue')
    }, {
      path: '/Film',
      name: 'Film',
      component: () => import('../views/filmPage/FilmPage.vue'),
      props: true, // Enable props
    }

    
  ]
})

export default router
