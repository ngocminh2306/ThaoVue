import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import Contact from "@/components/Contact";
import News from "@/components/News";
import Form from "@/components/Form";
import FormUser from "@/components/FormUser";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/news",
      name: "News",
      component: News
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    },
    {
      path: "/user",
      name: "FormUser",
      component: FormUser
    }
  ]
});
