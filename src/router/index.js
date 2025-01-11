import { createRouter, createWebHistory, } from "vue-router";
import { unauthorized } from "@/net/index.js";

const router = createRouter({
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
                },
                {
                    path: 'register',
                    name: 'welcome-register',
                    component: () => import('@/views/welcome/RegisterPage.vue')
                }
            ],
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/views/HomeIndexView.vue"),
        },
        {
            path: "/article",
            name: "article",
            component: () => import("@/views/ArticleIndexView.vue"),
        },
        {
            path: "/create",
            name: "create",
            component: () => import("@/views/CreateIndexView.vue"),
        },
        {
            path: "/video",
            name: "video",
            component: () => import("@/views/VideoIndexView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue"),
        }
    ],
})
//路由守卫
router.beforeEach((to, from, next) => {
    const isUnauthorized = unauthorized()
    if (to.name.startsWith('welcome-') && !isUnauthorized) {
        next('/home')
    } else if (to.fullPath.startsWith('/home') && isUnauthorized) {
        next('/')
    } else {
        next()
    }
})
export default router;