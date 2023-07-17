import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general',{
    state:() => ({
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
        async getGeneralData(){
            this.$state.category = ['PYME', 'FLORESER', 'BURO','MUTUOS','LABORAL','ALIANZAS Y PROVEEDORES'];
            this.$state.pyme = ['Contrato', 'Pagaré','Hoja de identificación','Anexos PLD', 'Acuse Pagaré', 'Supervisión y Seguimiento','Caratula de Crédito', ' Generales','Endoso en Garantía','Cancelación de hipoteca','Adendum','Convenio modificatorio',' Carta Buró','Otro (Escribir en comentarios)'];
            this.$state.floreser = ['Contrato','Pagaré','Anexos PLD','Acuse Pagaré','Generales','Endoso en Garantía','Factura','Hoja de identificación','Caratula de Crédito','Carta Buró','Otro (Escribir en comentarios)'];
            this.$state.buro = ['Carta de autorización PM','Carta de autorizaciónPF' ,'Otro (Escribir en comentarios)'];
            this.$state.mutuos = ['Contrato','Adendum Beneficiario','Convenio Modificatorio','Convenio de terminación','Otro (Escribir en comentarios)'];
            this.$state.laboral = ['Contrato sujeto a prueba','Convenio de Confidencialidad','Declaración de nuevo ingreso','Carta de buró','Identificación','Comprobante de domicilio','CSF','NSS','Carta de no antecedentes penales','Otro (Escribir en comentarios)'];
            this.$state.alianzasProveedores = ['Contrato','Convenio de Confidencialidad','Convenio de Terminación','Otro (Escribir en comentarios)'];

        }
    },
    persist: true,
});
