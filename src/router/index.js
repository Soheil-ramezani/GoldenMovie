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
      path:'/ManagementPanel',
      name:'ManagementPanel',
      component:()=> import('../views/ManagePanel/ManagePanel.vue')
    },{
      path:'/LogIn',
      name:'LogIn',
      component:()=>import('../views/login/loginForm.vue')
    },{
      path:'/Film',
      name:'Film',
      component:()=>import('../views/filmPage/FilmPage.vue'),
      props: true, // Enable props
    }
    ,{
      path:'/UserPanel',
      name:'UserPanel',
      component:()=>import('../views/userPanel/UserPanel.vue')
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
