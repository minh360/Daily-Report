import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/auth/:id/present',
      name: 'Present',
      component: () => import('../views/PresentView.vue')
    },
    {
      path: '/auth/:id/offDay',
      name: 'OffDay',
      props: route => ({ id: route.params.id }),
      component: () => import('../views/OffDayView.vue')
    },
    {
      path: '/admin',
      name: 'AdminClient',
      component: () => import('../views/AdminView.vue')
    },
  ]
})

export default router
