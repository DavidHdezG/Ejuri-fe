
import axios from "../plugins/axios";
import { defineStore } from "pinia";

const $axios = axios().provide.axios;

/**
 * Annex Store - Save all the data related to the annex generation tool
 */
export const useAnnexStore = defineStore("annex", {
  state: () => ({
    id: "",
    annexHistoricList: [],
  }),
  actions: {
    async getAnnexList() {
        const res = await $axios.get("/annex");
        return res.data;
    },
    async generateAnnex(formData) {
        const res= await $axios
        .post("/annex-generation/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        return res.data;
    },
    async getAnnexHistoric(id) {
        const res = await $axios.get(`/pld/historic${id}`);
        return res.data;
    },
    async getAnnexHistoricList(){
        const res = await $axios.get("/pld/historic");
        this.$state.annexHistoricList = res.data;
        return res.data;
    },
    async removeHistoric(id){
        const res = await $axios.delete(`/pld/historic/${id}`);
        await this.getAnnexHistoricList();
        return res.data;
    },
    async saveHistoric(data){
        const res = await $axios.post("/pld/historic", data);
        return res.data;
    }
  },

  persist: false,
});
