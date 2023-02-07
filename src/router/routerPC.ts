export const routerPC = [
  {
    path: "/",
    name: "about",
    component: () => import("@/views/mobile/goodShow/index.vue"),
  },
  {
    path: "/mobile/details",
    name: "details",
    component: () => import("@/views/mobile/details/index.vue"),
  },
];
