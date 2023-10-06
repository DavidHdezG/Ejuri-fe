import { defineStore } from "pinia";
import axios from "../plugins/axios";


const $axios = axios().provide.axios;

export const useAdminStore = defineStore("admin", {
    state:() => ({
        userList: null,
        showConfirm:null,
        confirmDelete:null,
        showOverlay:false,
        editingUser:false,
        userIdToEdit:null,
        rolesList:null,
        roleIdToEdit:null,
    }),
    actions:{
        async getUserList(){
            const { data } = await $axios.get("/users");
            this.$state.userList = data;
            return data
        },
        async deleteUser(id){
            const { data } = await $axios.delete(`/users/${id}`);
            return data;
        },
        async editUser(id, name, roles){
            let role=""
            if(roles === "Jurídico"){
                role="1"
            }else if(roles === "Administrador"){
                role="10"
            }
            console.log(role)
            const { data } = await $axios.patch(`/users/edit/${id}`, {name, roles:role});
            return data;
        },
        async createUser(name, email, roles){
            const password = this.generatePassword();
            const { data } = await $axios.post("/users/register-user", {name, email, password, roles});
            return data;
        },
        generatePassword(lenght=8){
            const characters='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
            return Array.from(crypto.getRandomValues(new Uint32Array(lenght))).map((x)=>characters[x%characters.length]).join('')
        },
        async getUser(id){
            const { data } = await $axios.get(`/users/${id}`);
            return data;
        },
        async getRolesList(){
            const { data } = await $axios.get("/roles");
            this.$state.rolesList = data;
            return data;
        },
        async getRole(id){
            const { data } = await $axios.get(`/roles/${id}`);
            return data;
        },
        async createRole(id,name){
            const { data } = await $axios.post("/roles", {id,name});
            return data;
        },
        async editRole(id, name){
            const { data } = await $axios.patch(`/roles/${id}`, {name});
            return data;
        },
        async deleteRole(id){
            const {data }= await $axios.delete(`/roles/${id}`);
            return data;
        }
    },
    persist: false,
});