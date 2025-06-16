// Composables
import { createRouter, createWebHistory } from "vue-router"; // for local
//import { createRouter, createWebHashHistory } from "vue-router"; // for server

const routes = [
  // {
  //   path: "/",
  //   component: () => import("../views/MainPage.vue"),
  // },

  {
    path: "/",
    name: "Home",
    component: () => import("../views/main.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/main.vue"),
  },
  {
    path: "/doodles",
    name: "Doodles",
    component: () => import("../views/doodles.vue"),
  },
  {
    path: "/qianwen1",
    name: "Qianwen1",
    component: () => import("../views/qianwen1.vue"),
  },

  {
    path: "/qianwen",
    name: "Qianwen",
    component: () => import("../views/qianwen.vue"),
  },
  {
    path: "/wanxiang",
    name: "Wanxiang",
    component: () => import("../views/wanxiang.vue"),
  },
  {
    path: "/live",
    name: "live",
    component: () => import("../views/live.vue"),
  },
  {
    path: "/live/recording",
    name: "recording",
    component: () => import("../views/recording.vue"),
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("../views/discover.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // for local
  //history: createWebHashHistory(process.env.BASE_URL), // for server
  routes,
});

export default router;
