import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/user/login',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/user/register',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/admin/userManage',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;