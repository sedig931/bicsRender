import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/loginView.vue";
import AdminView from "../views/adminView.vue";

const routes = [
  {
    path: "/:id/:verfNumber/:email",
    name: "home",
    component: HomeView,
    props: true,
  },
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
