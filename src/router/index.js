import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ManagementPanel',
      name: 'ManagementPanel',
      component: () => import('../views/ManagePanel/ManagePanel.vue'),
      beforeEnter: (to, from, next) => {
        // Check if the user is coming from UserPanel
        if (from.name === 'User Panel') {
          next(); // Allow access
        } else {
          next({ name: 'User Panel' }); // Redirect to UserPanel if not coming from there
        }
      }
    }, {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('../views/login/LoginForm.vue')
    }, {
      path: '/Film',
      name: 'Film',
      component: () => import('../views/filmPage/FilmPage.vue'),
      props: true, // Enable props
    }
    , {
      path: '/UserPanel',
      name: 'UserPanel',
      component: () => import('../views/UserPanel/UserPanel.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
