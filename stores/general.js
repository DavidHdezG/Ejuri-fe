import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general',{
    state:() => ({
        documentToEdit: {
            id: null,
            type: null,
            category: {
                id: null,
                name: null,
            },
            duplicate: null,
        },
        overlayEdit: false,
        edited: false,
        overlayQr: false,
        qrToView: null,
        isLoading: false,
        isLogged: false,
        pyme: null,
        floreser: null,
        buro: null,
        mutuos: null,
        laboral: null,
        alianzasProveedores: null,
        category: [{
            id: null,
            name: null,
        }],

        documentList: null,
        qrhistoricList: null,
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
            console.log(this.$state.pyme)
        },
        async getCategoryData(){
            const { data } = await $axios.get('/category')
            this.$state.category = data
        },
        async getDocumentList(){
            const { data } = await $axios.get('/documents')
            this.$state.documentList = data
        },
        async getDocumentToEdit(id){
            const { data } = await $axios.get(`/documents/${id}`)
            
            this.$state.documentToEdit = data
            console.log(this.$state.documentToEdit)
        },
        async getQrToView(id){
            const { data } = await $axios.get(`/qrhistoric/${id}`)
            this.$state.qrToView = data.qr
        },
        async getQrHistoricData(){
            const { data } = await $axios.get('/qrhistoric')
            this.$state.qrhistoricList = data
        },
        async saveHistoric (data){
            return await $axios.post('/qrhistoric', data)
            
        },

        async editCategory(id, name){
            await $axios.patch(`/category/${id}`,{
                name: name
            })
            this.getCategoryData()
        },
        async editDocument(id, name, category, duplicate){
            await $axios.patch(`/documents/${id}`,{
                type: name,
                category: category,
                duplicate: duplicate
            })            
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
