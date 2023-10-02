import { createRouter, createWebHistory } from "vue-router";
import { useSpotifyAuthorizationStore } from "@/store/authorization";
import CookieUtils from '@/utils/CookieUtils'
import type { SpotifyToken } from "@/types/spotify/token";

import AuthorizationView from "@/views/AuthorizationView.vue";
import AuthorizeView from "@/views/AuthorizeView.vue";
import HomeView from "@/views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/authorize",
      name: "authorize",
      component: AuthorizeView,
    },
    {
      path: "/authorization",
      name: "authorization",
      component: AuthorizationView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
  const { refreshToken } = spotifyAuthorizationStore

  if (CookieUtils.get('X-ACCESS-TOKEN') === undefined) {
    if (CookieUtils.get('X-REFRESH-TOKEN') !== undefined) {
      const response: SpotifyToken = await refreshToken(CookieUtils.get('X-REFRESH-TOKEN') as string)

      const date = new Date()
      date.setSeconds(date.getSeconds() + response.expires_in)
      CookieUtils.set('X-ACCESS-TOKEN', response.access_token, date)
      CookieUtils.set('X-SCOPE', response.scope, date)

      if (response.refresh_token == undefined) {
        CookieUtils.set('X-REFRESH-TOKEN', response.refresh_token)
      }
    }
  }

  if (to.name !== 'authorize' && to.name !== 'authorization' && CookieUtils.get('X-ACCESS-TOKEN') === undefined) {
    return {
      name: 'authorize'
    }
  }
})

export default router;
