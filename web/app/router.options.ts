import type {RouterConfig} from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'product',
            path: '/products/:slug',
            component: () => import('~/pages/archive.vue')
        },
        ..._routes
    ],
}
