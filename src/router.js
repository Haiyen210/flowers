import { createRouter, createWebHistory } from "vue-router"
const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ( /*webpackChunkName: "home" */ "./view/home"),
    },
    {
        path: "/product",
        name: "Product",
        component: () =>
            import ( /*webpackChunkName: "product" */ "./view/product"),
    },
    {
        path: "/product/:id",
        name: "Detail",
        component: () =>
            import ( /*webpackChunkName: "productDetail" */ "./view/productDetail"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ( /*webpackChunkName: "login" */ "./view/login"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ( /*webpackChunkName: "register" */ "./view/register"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () =>
            import ( /*webpackChunkName: "cart" */ "./view/cart"),
    },
    {
        path: "/checkout",
        name: "CheckOut",
        component: () =>
            import ( /*webpackChunkName: "checkout" */ "./view/checkout"),
    },
    {
        path: "/checkout_success",
        name: "checkout_success",
        component: () =>
            import ( /*webpackChunkName: "checkout_success" */ "./view/checkout_success"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import ( /*webpackChunkName: "contact" */ "./view/contact"),
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;