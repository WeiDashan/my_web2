import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyTest from '../views/MyTest.vue'
import LoadingDemoBottle from '../views/LoadingDemoBottle.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/myTest',
    name: 'MyTest',
    component: MyTest
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loading',
    name: 'loading',
    component: LoadingDemoBottle
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
