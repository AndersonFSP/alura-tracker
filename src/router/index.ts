import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { taskRoutes } from '@/router/task/index'
import { projectRoutes} from '@/router/project'

const routes: RouteRecordRaw[] = [  
  projectRoutes,
  taskRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router