import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;
/**
 * Tables Store - Save all the data related to the tables in the app
 */
export const useTablesStore = defineStore("tables", {
  state: () => ({
    confirmDelete: false, // Confirm delete the item
    showConfirm: false, //Show confirm delete dialog
    documentToEdit: {
      id: null,
      type: null,
      category: {
        id: null,
        name: null,
      },
      duplicate: null,
    }, //Information of the document to edit
    overlayEdit: false, //Show overlay edit dialog
    edited: false, // Watcher to know if the document was edited
    overlayQr: false, //Show overlay qr dialog
    creatingDocument: false, //Is creating a new document?
    category: [
      {
        id: null,
        name: null,
        driveId:null
      },
    ], //List of categories
    qrToView: null, //Qr image to view
    documentList: null, //List of documents
    qrhistoricList: null, //List of qr historic
  }),
  actions: {
    /**
     * Get the list of categories
     */
    async getCategoryData() {
      const { data } = await $axios.get("/category");
      this.$state.category = data;
    },
    /**
     * Get the list of documents
     */
    async getDocumentList() {
      const { data } = await $axios.get("/documents");

      this.$state.documentList = data;
    },
    /**
     * Set empty the document to edit
     */
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
    /**
     * Get the info of the document to edit
     * @param {*} id 
     */
    async getDocumentToEdit(id) {
      const { data } = await $axios.get(`/documents/${id}`);

      this.$state.documentToEdit = data;
    },
    /**
     * Get the QR of the historic entry to view
     * @param {*} id 
     */
    async getQrToView(id) {
      const { data } = await $axios.get(`/qrhistoric/${id}`);
      this.$state.qrToView = data.qr;
    },
    /**
     * Get the list of qr historic
     */
    async getQrHistoricData() {
      const { data } = await $axios.get("/qrhistoric");
      this.$state.qrhistoricList = data;
    },
    /**
     * Save the historic of the qr
     * @param {*} data  - Data of the historic
     * @returns Historic
     */
    async saveHistoric(data) {
      return await $axios.post("/qrhistoric", data);
    },

    /**
     * Edit a category and update the list
     * @param {*} id 
     * @param {*} name 
     */
    async editCategory(id, name) {
      await $axios.patch(`/category/${id}`, {
        name: name,
      });
      this.getCategoryData();
    },
    /**
     * Edit a document and update the list
     * @param {*} id 
     * @param {*} name 
     * @param {*} category 
     * @param {*} duplicate 
     */
    async editDocument(id, name, category, duplicate) {
      await $axios.patch(`/documents/${id}`, {
        type: name,
        category: category,
        duplicate: duplicate,
      });
    },
    /**
     * Create a category and update the list
     * @param {*} id 
     * @param {*} name 
     * @param {*} category 
     * @param {*} duplicate 
     * @returns created category
     */
    async saveDocument(id, name, category, duplicate) {
      return await $axios.post("/documents", {
        id: id,
        type: name,
        category: category,
        duplicate: !duplicate ? false : true,
      });
    },
    /**
     * Delete a document
     * @param {*} id 
     * @returns 
     */
    async deleteDocument(id) {
      return await $axios.delete(`/documents/${id}`);
    }
  },
  persist: false,
});
