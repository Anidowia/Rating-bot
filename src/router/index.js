import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
     path: '/about',
     name: 'AboutPage',
      component: () =>
      import('@/pages/AboutPage.vue'),
   },
   {
     path: '/',
     name: 'MainPage',
     component: () =>
     import('@/pages/MainPage.vue'),  
   },
   {
    path: '/password',
    name: 'PasswordRetype',
    component: () =>
    import('@/pages/PasswordRetype.vue'),  
  },
  {
    path: '/input',
    name: 'tableIn',
    component: () =>
    import('@/pages/tableIn.vue'),  
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
