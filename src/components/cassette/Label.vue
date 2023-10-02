<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    label: string
}>()

const label = computed((): string => {
    return props.label
})
</script>

<template>
    <div class="label">
        {{ label }}
    </div>
</template>

<style scoped>
.label {
    background: rgb(240, 240, 240);
    border-radius: 3px;
    padding: 10px;
}
</style>