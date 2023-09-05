<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  id: string;
  type: string;
  placeholder: string;
  hasErrors: boolean;
}>();

const value = ref("");

const id = computed((): string => {
  return props.id;
});

const type = computed((): string => {
  return props.type;
});

const placeholder = computed((): string => {
  return props.placeholder;
});

const hasErrors = computed((): boolean => {
  return props.hasErrors;
});

const cls = computed((): string => {
  return hasErrors.value
    ? "border-2 border-red-300 rounded-md w-full px-2 py-1 shadow-lg"
    : "border-[1px] border-zinc-200 rounded-md w-full px-2 py-1 shadow-lg";
});
</script>

<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :class="cls"
    v-model="value"
    @input="$emit('setter', value)"
    data-test="field"
  />
</template>

<style scoped></style>
