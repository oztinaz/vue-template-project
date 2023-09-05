import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import CookieUtils from "@/utils/CookieUtils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  const accessToken = CookieUtils.get("X-ACCESS-TOKEN");
  if (
    to.name !== "login" &&
    accessToken === undefined
  ) {
    // TODO: Notification
    return {
      name: "login",
    } as any;
  } else if (
    to.name === "login" &&
    accessToken !== undefined
  ) {
    return {
      name: from.name,
    } as any;
  }
});

export default router;
