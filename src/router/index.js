// router/index.js

import Layout from '@/components/2-Advance-Concept/4-Router/slote-router/components/Layout.vue';
import Detail from '@/components/2-Advance-Concept/4-Router/slote-router/pages/Detail.vue';
import Home from '@/components/2-Advance-Concept/4-Router/slote-router/pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'detail', name: 'detail', component: Detail },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
