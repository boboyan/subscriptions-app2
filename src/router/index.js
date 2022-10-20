import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'List',
            component: () => import('../components/ListSubsciptions')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../components/CreateSubscriptions')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/EditSubscriptions')
        }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
