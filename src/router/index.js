import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main/halyk-main.vue";
import Login from "../views/login/halyk-login.vue";
import AppLayout from "../views/layouts/halyk-app-layout.vue";
import Questionnaire from "../views/questionnaire/halyk-questionnaire.vue";
import Employees from "../views/employees/halyk-employees.vue";
import Baners from "../views/baners/halyk-baners.vue";
import News from "../views/news/halyk-news.vue";

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
        path: "questionnaire",
        name: "questionnaire",
        component: Questionnaire,
      },
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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
