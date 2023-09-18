import { defineStore } from "pinia";
import { useUserStore } from "./user";
import axios from "../plugins/axios";
const $axios = axios().provide.axios;


export const useGeneralStore = defineStore("general", {
  state: () => ({
    clientList: null,
    isLoading: false,
    isLogged: false,
  }),
  actions: {
    async getClientData() {
      const { data } = await $axios.get("/client");
      this.$state.clientList = data;
    },
    /*     async clientExists(clientId){

    }, */
    async createClient(folderName, parentFolderId) {
      const { data } = await $axios.post("/client", {
        name: folderName,
        id: parentFolderId,
      });
      return data.id;
    },
    start() {
      this.$state.isLoading = true;
    },
    stop() {
      this.$state.isLoading = false;
    },
  },
  persist: true,
});
