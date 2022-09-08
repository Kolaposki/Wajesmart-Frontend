import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound404 from "../views/NotFound404.vue";
import BookDetail from "../views/BookDetail.vue";
import CreateBook from "../views/CreateBook.vue";
import AllAuthors from "../views/AllAuthors.vue";

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
        path: "/book/:book_id",
        name: "BookDetail",
        component: BookDetail,
        meta: {
            title: "Book Details",
        },
    },
    {
        path: "/new-book/",
        name: "CreateBook",
        component: CreateBook,
        meta: {
            title: "Create Book",
        },
    },
    {
        path: "/authors/",
        name: "Authors",
        component: AllAuthors,
        meta: {
            title: "Authors",
        },
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

export default router;