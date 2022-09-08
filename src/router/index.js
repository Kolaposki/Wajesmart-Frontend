import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound404 from "../views/NotFound404.vue";
import BookDetail from "../views/BookDetail.vue";
import CreateBook from "../views/CreateBook.vue";
import CreateAuthor from "../views/CreateAuthor.vue";
import UpdateAuthor from "../views/UpdateAuthor.vue";
import AllAuthors from "../views/AllAuthors.vue";
import UpdateBook from "../views/UpdateBook.vue";

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
        path: "/update-book/:book_id",
        name: "UpdateBook",
        component: UpdateBook,
        meta: {
            title: "Book Details",
        },
    },
    {
        path: "/update-author/:author_id",
        name: "UpdateAuthor",
        component: UpdateAuthor,
        meta: {
            title: "Author Details",
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
        path: "/new-author/",
        name: "CreateAuthor",
        component: CreateAuthor,
        meta: {
            title: "Create Author",
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