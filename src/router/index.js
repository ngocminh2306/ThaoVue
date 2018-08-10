import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import like from "@/components/like";
import Unlike from "@/components/unlike";
import content from "@/components/content";
import FormUser from "@/components/FormUser";
// import Swiper from 'swiper';

Vue.use(Router);
// Vue.use(Swiper);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/like",
      name: "like",
      component: like
    },
    {
      path: "/unlike",
      name: "unlike",
      component: Unlike
    },
    {
      path: "/content",
      name: "content",
      component: content
    },
    {
      path: "/user",
      name: "FormUser",
      component: FormUser
    }
  ]
});
