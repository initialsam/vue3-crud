import { createRouter, createWebHistory } from "vue-router";
import BeachList from "../views/beaches/BeachList.vue";
import AddBeach from "../views/beaches/AddBeach.vue";
import EditBeach from "../views/beaches/EditBeach.vue";
import CountView from "../views/CountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BeachList,
    },
    {
      path: "/add",
      name: "add-beach",
      component: AddBeach,
    },
    {
      path: "/edit/:id",
      name: "edit-beach",
      component: EditBeach,
    },
    {
      path: "/CountView",
      name: "CountView",
      component: CountView,
    },
  ],
});

export default router;
