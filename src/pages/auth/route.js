import { Route } from '@/core/models/Route.js'
import signin from './signin/route.js'

export default new Route({
  name: 'auth',
  path: '/auth',
  component: () => import('./index.vue'),
  children: [signin],
})
