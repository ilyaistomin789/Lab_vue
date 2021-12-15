import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/components/Home/Home.vue";
import About from "@/components/About/About.vue";
import Products from "@/components/Products/Products.vue";
import SignIn from "@/components/SignIn/SignIn.vue";
import SignUp from "@/components/SignUp/SignUp.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: () => Home,
  },
  {
    path: "/products",
    component: () => Products,
  },
  {
    path: "/signin",
    component: () => SignIn,
  },
  {
    path: "/about",
    component: () => About,
  },
  {
    path: "/signup",
    component: () => SignUp,
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
