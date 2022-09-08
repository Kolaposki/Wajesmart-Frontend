import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound404 from "../views/NotFound404.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/books",
        name: "Books",
        component: () =>
            import ( /* webpackChunkName: "AllBooks" */ "../views/AllBooks.vue"),
    },
    {
        path: "/notFound",
        name: "NotFound404",
        component: NotFound404,
    },
];

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL), // removed cuz of django ==> adds the base url to the start of django's own
    routes,
});

// ensures some page are not accessed without being authenticated
router.beforeEach((to, from, next) => {
    // check the route before entering and check if it contains the 'requiresLogin' in its meta
    if (!to.matched.length) {
        next("/notFound");
        return
    }
});

export default router;