<script setup lang="ts"></script>

<template>
    <div class="trapezoid"></div>
</template>

<style scoped>
.trapezoid {
    box-shadow: inset 0 -5em 0 rgba(0, 0, 0, 0.1),
    0 0 0 2px rgba(110, 110, 110, 0.438),
    0.6em 0.3em 1em rgba(46, 46, 46, 0.3);
    border-radius: 5px 5px 0 0;
    transform: perspective(10px) rotateX(1deg);
    height: 50px;
    margin: 0 100px 3px 100px;
}
</style>