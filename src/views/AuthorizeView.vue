<script setup lang="ts">
import { useSpotifyAuthorizationStore } from '@/store/authorization'
import { storeToRefs } from 'pinia';

const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
const { url } = storeToRefs(spotifyAuthorizationStore)
</script>

<template>
  <div id="authorize-view">
    <a :href="url" target="_blank">Authorize</a>
  </div>
</template>

<style scoped></style>
