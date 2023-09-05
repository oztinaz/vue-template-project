<script setup lang="ts">
import Errors from "@/components/input/Errors.vue";
import Field from "@/components/input/Field.vue";
import { computed } from "vue";

const props = defineProps<{
  id: string;
  type: string;
  placeholder: string;
  errors: Array<string>;
  setter: Function;
}>();

const id = computed((): string => {
  return props.id;
});

const type = computed((): string => {
  return props.type;
});

const placeholder = computed((): string => {
  return props.placeholder;
});

const errors = computed((): Array<string> => {
  return props.errors;
});

const setter = (e: string) => {
  props.setter(e);
};

const hasErrors = computed((): boolean => {
  return errors.value.length > 0;
});
</script>

<template>
  <div>
    <Field
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :has-errors="hasErrors"
      @setter="setter"
    />
    <Errors :errors="errors" v-if="hasErrors" />
  </div>
</template>

<style scoped></style>
