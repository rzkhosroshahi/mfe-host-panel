import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import EccApp from 'ecc/EccApp';
import StorageApp from '../components/Storage/storage';
Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/ecc',
        name: 'ecc',
        component: EccApp,
    },
    {
        path: '/storage',
        name: 'storage',
        component: StorageApp,
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;