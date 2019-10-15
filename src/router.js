import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import About from "@/views/About"
import Contact from "@/views/Contact"
import Products from "@/views/Products"
import Product from "@/views/Product"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/product/:slug",
      name: "product",
      component: Product
    }
  ]
});
