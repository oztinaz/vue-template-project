<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  errors: Array<string>;
}>();

const errors = computed((): Array<string> => {
  return props.errors;
});
</script>

<template>
  <ul class="px-5 pt-5 list-disc">
    <li v-for="error in errors" :key="error" class="text-red-400">
      {{ error }}
    </li>
  </ul>
</template>

<style scoped></style>
