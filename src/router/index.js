import {createRouter, createWebHistory,} from "vue-router";

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "welcome",
            component: () => import("@/views/WelcomeView.vue"),
            children: [
                {
                    path: '',
                    name: 'welcome-login',
                    component: () => import('@/views/welcome/LoginPage.vue')
                }
            ],
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/views/HomeView.vue"),
            children: [],
        },
    ],
});
export default Router;