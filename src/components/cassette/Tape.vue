<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import Wheel from './Wheel.vue';

const props = defineProps<{
    length: number
}>()

const size = computed((): number => {
    return 125 + props.length * 2
})

const style = computed((): string => {
    return `height: ${size.value}px; width: ${size.value}px; border: ${props.length}px solid rgba(71, 24, 24, 0.856);`
})
</script>

<template>
    <div class="tape" :style="style">
        <Wheel />
    </div>
</template>

<style scoped>
.tape {
    background: transparent;
    border-radius: 100%;
}

.test {
    background: rgba(71, 24, 24, 0.856);
}
</style>

<!-- 225 225 50 -->
<!-- 160 160 20 -->