import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main/halyk-main.vue";
import Login from "../views/login/halyk-login.vue";
import AppLayout from "../views/layouts/halyk-app-layout.vue";
import Employees from "../views/employees/halyk-employees.vue";
import Baners from "../views/baners/halyk-baners.vue";
import News from "../views/news/halyk-news.vue";
import Vacancy from "../views/vacancy/halyk-vacancy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: main,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/app",
    component: AppLayout,
    children: [
      {
        path: "employees",
        name: "employees",
        component: Employees,
      },
      {
        path: "baners",
        name: "baners",
        component: Baners,
      },
      {
        path: "news",
        name: "news",
        component: News,
      },
      {
        path: "vacancy",
        name: "vacancy",
        component: Vacancy,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
