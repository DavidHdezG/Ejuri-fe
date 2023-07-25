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
    actions:{
        async login(email,password){
            const {data} = await $axios.post('/users/login',{
                email:email,
                password:password
            });
            const result = await $axios.get('/users/user'); 
            console.log(result.data.name)
            this.id = result.data.id;
            this.name = result.data.name;
            this.email = result.data.email;
            this.image = result.data.image;
            navigateTo('/')
        },
        async logout(){
            await $axios.post('/users/logout');
            this.resetUser();
            navigateTo('/login')
        },
        resetUser(){
            this.id = '';
            this.name = '';
            this.email = '';
            this.image = '';
        }

    },
    persist: true,

});