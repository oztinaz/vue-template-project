<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSpotifyAuthorizationStore } from '@/store/authorization'
import { type SpotifyToken } from '@/types/spotify/token'
import CookieUtils from '@/utils/CookieUtils';

const route = useRoute()
const router = useRouter()
const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
const { requestAccessToken } = spotifyAuthorizationStore

onMounted(async () => {
    if (route.query.code) {
        const response: SpotifyToken = await requestAccessToken(route.query.code as string)

        const date = new Date()
        date.setSeconds(date.getSeconds() + response.expires_in)
        CookieUtils.set('X-ACCESS-TOKEN', response.access_token, date)
        CookieUtils.set('X-SCOPE', response.scope, date)

        if (response.refresh_token !== undefined) {
            CookieUtils.set('X-REFRESH-TOKEN', response.refresh_token)
        }

        router.push({
            name: 'home'
        })
    }
    
})
</script>

<template>
</template>

<style scoped></style>
