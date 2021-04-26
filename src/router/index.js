import Vue from "vue";
import VueRouter from "vue-router";
import mainLayout from "@/views/layouts/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: mainLayout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
