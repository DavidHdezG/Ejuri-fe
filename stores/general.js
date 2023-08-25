import { defineStore } from "pinia";
import { useUserStore } from "./user";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useGeneralStore = defineStore("general", {
  state: () => ({
    
    isLoading: false,
    isLogged: false,
  }),
  actions: {
    
    
    start() {
      this.$state.isLoading = true;
    },
    stop() {
      this.$state.isLoading = false;
    },
  },
  persist: true,
});
