import axios from "../plugins/axios";
import { defineStore } from "pinia";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    name: "",
    email: "",
    image: "",
  }),
  actions: {
    async login(email, password) {
      const data  = await $axios.post("/users/signin", {
        email: email,
        password: password,
      }); 
      console.log(data);
      if (data.error) {
        return data.error;
      } else {
        console.log(data)
        const result = await $axios.get("/users/user");
        console.log(result.data.name);
        this.id = result.data.id;
        this.name = result.data.name;
        this.email = result.data.email;
        this.image = result.data.image;
      }
      return navigateTo("/");
    },
    async logout() {
      await $axios.post("/users/signout");
      this.resetUser();
      navigateTo("/login");
    },
    resetUser() {
      this.id = "";
      this.name = "";
      this.email = "";
      this.image = "";
    },
  },
  persist: true,
});
