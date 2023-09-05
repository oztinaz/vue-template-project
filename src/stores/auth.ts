import axios from "@/lib/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const authenticate = async (
    email: string,
    password: string,
  ): Promise<any> => {
    return await axios.post("/api/v1/auth/authenticate", {
      email: email,
      password: password,
    });
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ): Promise<any> => {
    return await axios.post("/api/v1/auth/register", {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });
  };

  return {
    authenticate,
    register,
  };
});
