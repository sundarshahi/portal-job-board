import type { RouteParams, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

export type AppRouteNames = 'jobs' | 'contacts'

export const routes: RouteRecordRaw[] = [
  // {
  //   name: 'jobs',
  //   path: '/',
  //   component: Home,
  // },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function routerPush(
  name: AppRouteNames,
  params?: RouteParams,
): ReturnType<typeof router.push> {
  return params === undefined
    ? router.push({ name })
    : router.push({ name, params })
}
