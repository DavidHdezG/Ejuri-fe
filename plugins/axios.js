import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.withCredentials = true;
  /* axios.defaults.baseURL = "https://ejuri-be.onrender.com"; */
  axios.defaults.baseURL = "http://localhost:3001";
  return {
    provide: {
      axios: axios,
    },
  };
});
