import { RouteRecordRaw } from 'vue-router'

export const projectRoutes: RouteRecordRaw = {
  path: '/projects',
  component: () => import('@/views/Projects.vue'),
  children: [
    {
      path: '',
      name: 'Lista',
      component: () => import('@/views/projects/List.vue'),
    },
    {
      path: 'create',
      name: 'Create project',
      component: () => import('@/views/projects/FormProject.vue')
    },
    {
      path: ':id',
      name: 'Edit project',
      component: () => import('@/views/projects/FormProject.vue'),
      props: true
    }
  ]
}

