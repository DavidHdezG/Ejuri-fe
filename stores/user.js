
import axios from "../plugins/axios";
import { defineStore } from "pinia";

const $axios = axios().provide.axios;

/**
 * User Store - Save all the data related to the user
 */
export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    name: "",
    email: "",
    role: "",
  }),
  actions: {
    /**
     * Login the user and save the data in the store and in the cookies
     * @param {*} email 
     * @param {*} password 
     * @returns 
     */
    async login(email, password) {
      const data = await $axios.post("/users/signin", {
        email: email,
        password: password,
      });
      console.log(data  )
      if (data.error) {
        return (data.error);
      } else {
        const result = await $axios.get("/users/user");
        this.id = result.data.id;
        this.name = result.data.name;
        this.email = result.data.email;
        this.role = result.data.roles.name;
      }
      /* return navigateTo("/"); */
    },
    /**
     * Logout the user and reset the data in the store and in the cookies
     */
    async logout() {
      await $axios.post("/users/signout");
      this.resetUser();
      navigateTo("/login");
    },
    /**
     * 
     * @returns {Promise} - Returns the list of users
     */
    async getAllUsers() {
      try{
        const res = await $axios.get("/users");
        return res
      }catch(err){
        //console.log(err)
      }
      
    },
    /**
     * 
     * @returns {Promise} - Returns the current user
     */
    async getCurrentUser() {
      return await $axios.get("/users/user");
    },
    /**
     * Change the password of the user
     * @param {*} email
     * @param {*} password
     * @param {*} newPassword
     * @returns User
     */
    async changePassword(email,password,newPassword) {
      const data = await $axios.post("/users/changePassword", {
        password: password,
        newPassword:newPassword
      });
      return data;
    },
    /**
     * Confirm the account of the user with the token
     * @param {*} token 
     * @returns User activated
     */
    async confirmAccount(token){
      const data = await $axios.post(`/users/confirmAccount/${token}`);
      return data;
    },


    /**
     * Reset the user data
     */
    resetUser() {
      this.id = "";
      this.name = "";
      this.email = "";
      this.role = "";
    },
  },
  persist: true,
});
