export const routerM = [
  {
    path: "/",
    name: "goodShow",
    component: () => import("@/views/mobile/goodShow/index.vue"),
  },
  {
    path: "/mobile/details",
    name: "details",
    component: () => import("@/views/mobile/details/index.vue"),
  },
  {
    path: "/mobile/searchPage",
    name: "searchPage",
    component: () => import("@/views/mobile/searchPage/index.vue"),
  },
];
