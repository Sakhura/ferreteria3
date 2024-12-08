import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ConfirmationView from "../views/ConfirmationView.vue";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: ConfirmationView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetailView,
  },
  {
    path: "/:pathMatch(.*)*", // Ruta para manejar 404
    name: "not-found",
    component: { template: "<p>Página no encontrada</p>" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
