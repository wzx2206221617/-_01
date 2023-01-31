export const routerM = [
    {
        path: '/',
        name: 'goodShow',
        component: () => import('@/views/mobile/goodShow/index.vue')
    },
    {
        path: '/mobile/details',
        name: 'details',
        component: () => import('@/views/mobile/details/index.vue')
    },
]
