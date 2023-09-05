<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import AuthCard from "@/components/AuthCard.vue";
import { useAuthStore } from "@/stores/auth";
import CookieUtils from "@/utils/CookieUtils";

const router = useRouter();

const authStore = useAuthStore();
const { authenticate } = authStore;

const email = ref("");
const password = ref("");

const setEmail = (e: string): void => {
  email.value = e;
};

const emailErrors = computed((): Array<string> => {
  const errors: Array<string> = [];
  if (email.value === "") {
    errors.push("Email can not be empty");
  }
  return errors;
});

const setPassword = (p: string): void => {
  password.value = p;
};

const passwordErrors = computed((): Array<string> => {
  const errors: Array<string> = [];
  if (password.value === "") {
    errors.push("Password can not be empty");
  }
  return errors;
});

const fields = ref([
  {
    id: "email",
    type: "email",
    placeholder: "Email",
    errors: emailErrors,
    setter: setEmail,
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
    errors: passwordErrors,
    setter: setPassword,
  },
]);

const login = async (): Promise<void> => {
  const data = await authenticate(email.value, password.value);
  if (data.status === 200) {
    const date = new Date();
    date.setSeconds(date.getSeconds() + data.data.expiresIn);
    CookieUtils.set("X-ACCESS-TOKEN", data.data.token, date);
    router.push({
      name: "home",
    });
  }
};
</script>

<template>
  <div id="login-view" class="flex items-center justify-center h-screen">
    <AuthCard
      :submit="login"
      :fields="fields"
      button-label="Login"
      title="Login"
    >
      <template #paragraph>
        <p>
          Don't have an account.
          <RouterLink
            :to="{ name: 'register' }"
            class="text-blue-600 font-semibold"
            >Register</RouterLink
          >
          now
        </p>
      </template>
    </AuthCard>
  </div>
</template>

<style scoped></style>
