import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useTablesStore = defineStore("tables", {
  state: () => ({
    confirmDelete: false,
    showConfirm: false,
    documentToEdit: {
      id: null,
      type: null,
      category: {
        id: null,
        name: null,
      },
      duplicate: null,
    },
    overlayEdit: false,
    edited: false,
    overlayQr: false,
    creatingDocument: false,
    category: [
      {
        id: null,
        name: null,
        driveId:null
      },
    ],
    overlayQr: false,
    qrToView: null,
    documentList: null,
    qrhistoricList: null,
  }),
  actions: {
    async getCategoryData() {
      const { data } = await $axios.get("/category");
      this.$state.category = data;
    },
    async getDocumentList() {
      const { data } = await $axios.get("/documents");

      this.$state.documentList = data;
    },
    async emptyDocumentToEdit() {
      this.$state.documentToEdit = {
        id: null,
        type: null,
        category: {
          id: null,
          name: null,
        },
        duplicate: null,
      };
    },
    async getDocumentToEdit(id) {
      const { data } = await $axios.get(`/documents/${id}`);

      this.$state.documentToEdit = data;
    },
    async getQrToView(id) {
      const { data } = await $axios.get(`/qrhistoric/${id}`);
      this.$state.qrToView = data.qr;
    },
    async getQrHistoricData() {
      const { data } = await $axios.get("/qrhistoric");
      this.$state.qrhistoricList = data;
    },
    async saveHistoric(data) {
      return await $axios.post("/qrhistoric", data);
    },

    async editCategory(id, name) {
      await $axios.patch(`/category/${id}`, {
        name: name,
      });
      this.getCategoryData();
    },
    async editDocument(id, name, category, duplicate) {
      await $axios.patch(`/documents/${id}`, {
        type: name,
        category: category,
        duplicate: duplicate,
      });
    },
    async saveDocument(id, name, category, duplicate) {
      return await $axios.post("/documents", {
        id: id,
        type: name,
        category: category,
        duplicate: !duplicate ? false : true,
      });
    },
    async deleteDocument(id) {
      return await $axios.delete(`/documents/${id}`);
    }
  },
  persist: false,
});
