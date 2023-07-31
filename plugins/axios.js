import axios from "axios";

export default defineNuxtPlugin((NuxtApp)=> {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://ejuri-be.onrender.com';

    return {
        provide:{
            axios: axios
        }
    }
})