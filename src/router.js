import { createWebHistory, createRouter } from 'vue-router'
import Home from "./components/2-Advance-Concept/4-Router/pages/Home.vue"
import Detail from "./components/2-Advance-Concept/4-Router/pages/Detail.vue"
import About from './components/2-Advance-Concept/4-Router/pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/detail', component: Detail },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
