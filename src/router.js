import { createWebHistory, createRouter } from 'vue-router'
import Home from "./components/2-Advance-Concept/4-Router/pages/Home.vue"
import Detail from "./components/2-Advance-Concept/4-Router/pages/Detail.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/detail', component: Detail }
]

const router = createRouter({
  history: createWebHistory(), // ✅ Changed to createWebHistory
  routes,
})

export default router
