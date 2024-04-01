import { createRouter, createWebHistory } from 'vue-router'
// import { useLoad } from '@/composables/auth'
// import { useCleanInputs } from '@/composables/validationForm'

const allowedRoutes = ['/', '/login', '/forgot-password', '/reset-password']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Specify history mode
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    { path: '/:pathMatch(.*)*', component: () => import('../views/Notfound.vue')},
    { path: '/', component: () => import('../views/Cnpj.vue')},
    { path: '/cnpj', component: () => import('../views/Cnpj.vue')},
    { path: '/cnpj-validar', component: () => import('../views/CnpjValid.vue')},
    { path: '/cpf', component: () => import('../views/Cpf.vue')},
    { path: '/cnh', component: () => import('../views/Cnh.vue')},
  ]
})

export default router
