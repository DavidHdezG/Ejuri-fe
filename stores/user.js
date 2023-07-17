import axios from "../plugins/axios";
import { defineStore } from "pinia";

const $axios = axios().provide.axios;

export const useUserStore = defineStore('user',{
    state: () => ({
        id:'',
        name:'',
        email:'',
        image:'',

    }),
    persist: true,

});