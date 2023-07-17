import axios from "axios";

export default defineNuxtPlugin((NuxtApp)=> {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = process.env.API_URL;

    return {
        provide:{
            axios: axios
        }
    }
})