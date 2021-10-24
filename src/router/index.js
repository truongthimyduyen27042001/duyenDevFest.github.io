import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: { layout: "unauth" },
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: { layout: "unauth" },
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
