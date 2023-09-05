<script setup lang="ts">
import { computed, ref } from "vue";
import AuthCard from "@/components/AuthCard.vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import CookieUtils from "@/utils/CookieUtils";

const router = useRouter();

const authStore = useAuthStore();
const { register } = authStore;

const email = ref("");
const name = ref("");
const password = ref("");
const passwordConfirmation = ref("");

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

const setName = (p: string): void => {
  name.value = p;
};

const nameErrors = computed((): Array<string> => {
  const errors: Array<string> = [];
  if (name.value === "") {
    errors.push("Name can not be empty");
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

const setPasswordConfirmation = (p: string): void => {
  passwordConfirmation.value = p;
};

const passwordConfirmationErrors = computed((): Array<string> => {
  const errors: Array<string> = [];
  if (password.value !== passwordConfirmation.value) {
    errors.push("Password and Password Confirmation does not match");
  }
  return errors;
});

const fields = ref([
  {
    id: "name",
    type: "text",
    placeholder: "Name",
    errors: nameErrors,
    setter: setName,
  },
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
  {
    id: "password-confirmation",
    type: "password",
    placeholder: "Password Confirmation",
    errors: passwordConfirmationErrors,
    setter: setPasswordConfirmation,
  },
]);

const registration = async (): Promise<void> => {
  const data = await register(
    name.value,
    email.value,
    password.value,
    passwordConfirmation.value,
  );
  if (data.status === 201) {
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
  <div id="register-view" class="flex items-center justify-center h-screen">
    <AuthCard
      :submit="registration"
      :fields="fields"
      button-label="Register"
      title="Register"
    >
      <template #paragraph>
        <p>
          You already have an account. Go
          <RouterLink
            :to="{ name: 'login' }"
            class="text-blue-600 font-semibold"
            >Login</RouterLink
          >
        </p>
      </template>
    </AuthCard>
  </div>
</template>

<style scoped></style>
