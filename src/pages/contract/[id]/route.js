import { Route } from '@/core/models/Route'

export default new Route({
  name: 'contracts-id',
  path: '/contracts/:id',
  component: () => import('./index.vue'),
  meta: {
    title: 'contracts-detail.title',
    auth: false,
    permissions: ['ALL'],
  },
})
