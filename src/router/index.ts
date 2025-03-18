import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterStart from '@/views/examples/counter-example/start.vue'
import CounterEnd from '@/views/examples/counter-example/end.vue'
import ApiStart from '@/views/examples/api-example/start.vue'
import ApiEnd from '@/views/examples/api-example/end.vue'

import NavigationStart from '@/views/examples/navigation-example/start.vue'
import NavigationEnd from '@/views/examples/navigation-example/end.vue'
import UserProfile from '@/views/examples/navigation-example/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/counter/start' },
    { path: '/counter/start', component: CounterStart },
    { path: '/counter/end', component: CounterEnd },
    { path: '/api/start', component: ApiStart },
    { path: '/api/end', component: ApiEnd },

    // Navigation Example
    { path: '/navigation/start', component: NavigationStart },
    {
      path: '/navigation/end',
      component: NavigationEnd,
      children: [
        { path: 'home', component: HomeView },
        { path: 'about', component: () => import('../views/AboutView.vue') },
        { path: 'user/:id', component: UserProfile },
      ],
    },
  ],
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView,
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  // component: () => import('../views/AboutView.vue'),
  //   },
  // ],
})

export default router
