import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routerHistory = createWebHashHistory();

// import HomePage from "./pages/home";


const routers = createRouter({
  history: routerHistory,
  routes: [
    {
    //   path: "/",
    //   name: "home",
    //   component: HomePage,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: AboutPage,
    // },
    // {
    //   path: "/:itemAlias",
    //   name: "itemAlias",
    //   component: Item,
    // },
    // {
    //   path: "/Users",
    //   name: "Employee",
    //   component: Employee,
    // },
    // {
    //   path: "/CheckList",
    //   name: "CheckList",
    //   component: CheckList,
    // },
    // {
    //   path: "/Carousel",
    //   name: "Carousel",
    //   component: Carousel,
    // },
    // {
    //   path: "/:CatchAll(.*)",
    //   name: "404",
    //   component: NotFoundPage,
    },
  ],
});

export default routers;
