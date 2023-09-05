<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  disabled: boolean;
  label: string;
  type: "button" | "submit" | "reset" | undefined;
}>();

const disabled = computed((): boolean => {
  return props.disabled;
});

const label = computed((): string => {
  return props.label;
});

const type = computed((): "button" | "submit" | "reset" | undefined => {
  return props.type;
});
</script>

<template>
  <button
    :disabled="disabled"
    :type="type"
    class="border-[1px] border-zinc-200 bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600 rounded-md font-semibold shadow-lg p-1 w-[40%] disabled:opacity-75 disabled:cursor-not-allowed"
    data-test="button-field"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
