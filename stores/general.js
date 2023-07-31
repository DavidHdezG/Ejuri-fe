import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general',{
    state:() => ({
        isLoading: false,
        isLogged: false,
        pyme: null,
        floreser: null,
        buro: null,
        mutuos: null,
        laboral: null,
        alianzasProveedores: null,
        category: null,
    }),
    actions:{
        async getDocumentTypeData(){
            const { data } = await $axios.get('/documents/type/2')
            this.$state.pyme = data
            const { data: data2 } = await $axios.get('/documents/type/3')
            this.$state.floreser = data2
            const { data: data3 } = await $axios.get('/documents/type/4')
            this.$state.buro = data3
            const { data: data4 } = await $axios.get('/documents/type/5')
            this.$state.mutuos = data4
            const { data: data5 } = await $axios.get('/documents/type/6')
            this.$state.laboral = data5
            const { data: data6 } = await $axios.get('/documents/type/7')
            this.$state.alianzasProveedores = data6
        },
        async getCategoryData(){
            const { data } = await $axios.get('/category')
            this.$state.category = data
        },

        start(){
            this.$state.isLoading = true
        },
        stop(){
            this.$state.isLoading = false
        }

    },
    persist: true,
});
