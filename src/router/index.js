import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout/Layout.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/404', component: () => import('@/views/404.vue') },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
