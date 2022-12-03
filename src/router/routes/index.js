const routes = [
  {
    path: "/",
    component: () => import("@/views/pages/home.vue"),
    name: "home",
  },
  {
    path: "/features",
    component: () => import("@/views/pages/features.vue"),
    name: "features",
  },
];

export default routes;
