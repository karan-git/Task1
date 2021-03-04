import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/shows/shows.vue";
import SingleMovie from "./components/shows/singleMovie.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home
    },
    {
      path: "/movie/:id",
      component: SingleMovie
    },
]


const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;