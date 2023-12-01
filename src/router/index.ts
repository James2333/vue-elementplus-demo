import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginRegister.vue')
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue')
    },
    {
        path: '/resetpassword',
        name: 'resetPassword',
        component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '/404',
        component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
