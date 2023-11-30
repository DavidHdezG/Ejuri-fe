
import axios from "../plugins/axios";
import { defineStore } from "pinia";

const $axios = axios().provide.axios;

/**
 * Annex Store - Save all the data related to the annex generation tool
 */
export const useAnnexStore = defineStore("annex", {
  state: () => ({
    id: "",
  }),
  actions: {
    async generateAnnex(formData) {
        const res= await $axios
        .post("/annex-generation/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        /* .then((res) => {
          console.log(res.data);

          const blob = new Blob([res.data], { type: res.headers['content-type']});
          link.href = window.URL.createObjectURL(blob);
          link.download = 'nombre-del-archivo.extension'; // Puedes establecer el nombre y la extensión del archivo aquí
    
          document.body.appendChild(link);
          link.click();
    
          document.body.removeChild(link);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }); */
        return res;
    }
  },
  persist: false,
});
