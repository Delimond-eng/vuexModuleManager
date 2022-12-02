const routes = [
  {
    path: "/",
    component: () => import("@/view/pages/home.vue"),
    name: "home",
  },
  {
    path: "/features",
    component: () => import("@/view/pages/features.vue"),
    name: "features",
  },
];

export default routes;
