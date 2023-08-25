import axios from "../plugins/axios";
import { defineStore } from "pinia";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    name: "",
    email: "",
    role: "",
  }),
  actions: {
    async login(email, password) {
      const data = await $axios.post("/users/signin", {
        email: email,
        password: password,
      });
      console.log(data);
      if (data.error) {
        return data.error;
      } else {
        console.log(data);
        const result = await $axios.get("/users/user");
        console.log(result.data.name);
        this.id = result.data.id;
        this.name = result.data.name;
        this.email = result.data.email;
        this.role = result.data.role;
      }
      return navigateTo("/");
    },
    async logout() {
      await $axios.post("/users/signout");
      this.resetUser();
      navigateTo("/login");
    },
    async getAllUsers() {
      try{
        const res = await $axios.get("/users");
        return res
      }catch(err){
        //console.log(err)
      }
      
    },
    async getCurrentUser() {
      return await $axios.get("/users/user");
    },
    async changePassword(password) {
      const data = await $axios.post("/users/changePassword", {
        password: password,
      });
      return data;
    },
    resetUser() {
      this.id = "";
      this.name = "";
      this.email = "";
      this.role = "";
    },
  },
  persist: true,
});
