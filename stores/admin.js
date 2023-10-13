import { defineStore } from "pinia";
import axios from "../plugins/axios";


const $axios = axios().provide.axios;

/**
 * Admin Store - Save all the data related to the admin panel or admin users
 */
export const useAdminStore = defineStore("admin", {
    state:() => ({
        userList: null, //List of users
        showConfirm:null, //Show confirm dialog
        confirmDelete:null, //Confirm delete dialog
        showOverlay:false, //Show overlay
        editingUser:false, // Is editing a user or creating a new user?
        userIdToEdit:null, //Id of the user to edit
        rolesList:null, //List of roles
        roleIdToEdit:null, //Id of the role to edit
    }),
    actions:{
        /**
         * Get the list of users
         * @returns {Promise} - Returns the list of users
         */
        async getUserList(){
            const { data } = await $axios.get("/users");
            this.$state.userList = data;
            return data
        },
        /**
         * Delete a user
         * @param {*} id 
         * @returns deleted user
         */
        async deleteUser(id){
            const { data } = await $axios.delete(`/users/${id}`);
            return data;
        },
        /**
         * Edit a user
         * @param {*} id 
         * @param {*} name 
         * @param {*} roles 
         * @returns edited user
         */
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
        /**
         * Create a user with a random password
         * @param {*} name 
         * @param {*} email 
         * @param {*} roles 
         * @returns created user
         */
        async createUser(name, email, roles){
            const password = this.generatePassword();
            const { data } = await $axios.post("/users/register-user", {name, email, password, roles});
            return data;
        },
        /**
         * Generate a random password
         * @param {*} lenght 
         * @returns random password
         */
        generatePassword(lenght=8){
            const characters='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
            return Array.from(crypto.getRandomValues(new Uint32Array(lenght))).map((x)=>characters[x%characters.length]).join('')
        },
        /**
         * Get a user by id
         * @param {*} id 
         * @returns User
         */
        async getUser(id){
            const { data } = await $axios.get(`/users/${id}`);
            return data;
        },
        /**
         * Get the list of roles
         * @returns List of roles
         */
        async getRolesList(){
            const { data } = await $axios.get("/roles");
            this.$state.rolesList = data;
            return data;
        },
        /**
         * Get a role by id
         * @param {*} id 
         * @returns Role
         */
        async getRole(id){
            const { data } = await $axios.get(`/roles/${id}`);
            return data;
        },
        /**
         * Create a role
         * @param {*} id 
         * @param {*} name 
         * @returns created role
         */
        async createRole(id,name){
            const { data } = await $axios.post("/roles", {id,name});
            return data;
        },
        /**
         * Edit a role
         * @param {*} id 
         * @param {*} name 
         * @returns edited role
         */
        async editRole(id, name){
            const { data } = await $axios.patch(`/roles/${id}`, {name});
            return data;
        },
        /**
         * Delete a role
         * @param {*} id 
         * @returns deleted role
         */
        async deleteRole(id){
            const {data }= await $axios.delete(`/roles/${id}`);
            return data;
        }
    },
    persist: false,
});