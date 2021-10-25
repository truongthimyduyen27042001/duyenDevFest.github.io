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
    path: "/userInfo",
    name: "userInfo",
    component: () => import("../views/UserInfo.vue"),
  },
  {
    path: "/document",
    name: "document",
    component: () => import("../views/Document.vue"),
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
    path: "/createContract",
    name: "createContract",
    component: () => import("../views/CreateContract"),
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
