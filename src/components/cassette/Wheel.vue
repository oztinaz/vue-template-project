<script setup lang="ts">
import Teeth from './Teeth.vue'
</script>

<template>
    <div class="wheel">
        <Teeth />
    </div>
</template>

<style scoped>
.wheel {
    background: transparent;
    border: 20px solid rgb(231, 231, 231);  
    border-radius: 100%;
    height: 125px;
    width: 125px;
}
</style>