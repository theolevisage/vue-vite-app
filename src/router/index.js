import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import IncrementView from '../views/IncrementView.vue'
import VForView from '../views/VForView.vue'
import VIfView from '../views/VIfView.vue'
import VModelView from '../views/VModelView.vue'
import LifecycleHookView from '../views/LifecycleHookView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/increment-button', component: IncrementView },
  { path: '/v-for', component: VForView },
  { path: '/v-if', component: VIfView },
  { path: '/v-model', component: VModelView },
  { path: '/lifecycle-hook', component: LifecycleHookView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})