import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "Auth_Layout",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterForm.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "Auth_Layout",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
