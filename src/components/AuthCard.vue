<script setup lang="ts">
import { computed } from "vue";
import Button from "@/components/Button.vue";
import Input from "@/components/input/Main.vue";

const props = defineProps<{
  submit: Function;
  fields: Array<{
    id: string;
    type: string;
    placeholder: string;
    errors: Array<string>;
    setter: Function;
  }>;
  buttonLabel: string;
  title: string;
}>();

const fields = computed(
  (): Array<{
    id: string;
    type: string;
    placeholder: string;
    errors: Array<string>;
  }> => {
    return props.fields;
  },
);

const buttonLabel = computed((): string => {
  return props.buttonLabel;
});

const title = computed((): string => {
  return props.title;
});

const disabled = computed((): boolean => {
  for (let i = 0; i < fields.value.length; i++) {
    if (fields.value[i].errors.length > 0) return true;
  }
  return false;
});

const submit = (e: Event): void => {
  e.preventDefault();

  props.submit(e);
};
</script>

<template>
  <form class="w-[20%]" @submit="submit" data-test="auth-card-form">
    <div
      class="border-[1px] border-zinc-200 rounded-md p-5 flex flex-col gap-5 shadow-lg"
    >
      <div
        class="border-b-[1px] font-semibold text-2xl pb-1"
        data-test="auth-card-title"
      >
        {{ title }}
      </div>
      <div v-for="field in fields" :key="field.id">
        <Input
          :id="field.id"
          :type="field.type"
          :placeholder="field.placeholder"
          :errors="field.errors"
          :setter="field.setter"
        />
      </div>
      <div class="flex justify-end">
        <Button type="submit" :label="buttonLabel" :disabled="disabled" />
      </div>
      <div class="flex justify-center text-xs">
        <slot name="paragraph" data-test="paragraph"></slot>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
