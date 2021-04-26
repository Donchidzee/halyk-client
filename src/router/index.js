import Vue from "vue";
import VueRouter from "vue-router";
import mainLayout from "@/views/layouts/main.vue";
import homePage from "@/views/home/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: mainLayout,
    children: [
      {
        path: "",
        name: mainLayout,
        component: homePage,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
