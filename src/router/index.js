import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import LoginPage from '../views/LoginPage';

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;