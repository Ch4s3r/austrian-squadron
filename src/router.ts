import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/hall-of-fame",
      name: "halloffame",
      component: () =>
        import(/* webpackChunkName: "halloffame" */ "./views/HallOfFame.vue")
    }
  ]
});
