import { Route } from '@/core/models/Route'

export default new Route({
  name: 'profile',
  path: '/',
  component: () => import('./index.vue'),
  alias: ['/profile', '/home'],
  meta: {
    title: 'profile.title',
    auth: false,
    permissions: ['ALL'],
  },
})
