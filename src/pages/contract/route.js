import { Route } from '@/core/models/Route'
import list from './list/route'
import detail from './[id]/route'

// The product detail page is not belong (children) to the
// product listing page, this is just good folder organizing
export default new Route({
  name: 'projects',
  path: '/projects',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects.title',
    auth: false,
    permissions: ['ALL'],
  },
  children: [list, detail],
})
