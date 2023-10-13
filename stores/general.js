import { defineStore } from "pinia";
import axios from "../plugins/axios";
const $axios = axios().provide.axios;

/**
 * General Store - Save all the data related to the general app
 */
export const useGeneralStore = defineStore("general", {
  state: () => ({
    clientList: null, //List of clients in Google Drive
    isLoading: false, //Is loading something?
    isLogged: false,  //Is the user logged?
  }),
  actions: {
    /**
     * Get the list of clients
     * @returns {Promise} - Returns the list of clients
     */
    async getClientData() {
      const { data } = await $axios.get("/client");
      this.$state.clientList = data;
    },
    /**
     * Create a client in Google Drive
     * @param {*} folderName 
     * @param {*} parentFolderId 
     * @returns id of the created client
     */
    async createClient(folderName, parentFolderId) {
      const { data } = await $axios.post("/client", {
        name: folderName,
        id: parentFolderId,
      });
      return data.id;
    },
    /**
     * Set the loading state
     */
    start() {
      this.$state.isLoading = true;
    },
    /**
     * Set the loading state
     */
    stop() {
      this.$state.isLoading = false;
    },
  },
  persist: true,
});
