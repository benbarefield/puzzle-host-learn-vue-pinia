import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routeConfiguration : RouteRecordRaw[] = [
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeConfiguration,
});

export default router
