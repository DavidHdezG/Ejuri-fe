<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { VDataTable } from "vuetify/lib/labs/components.mjs";

const demoData = ref([
  {
    TIPO_DE_CLIENTE: "NUEVO",
    "RFC_(Expe)": "BNO130308HI1",
    "CLIENTE_(One_Pager)": "BANDAS DEL NOROESTE, SA DE CV",
    PRODUCTO: "BI",
    NOTA: "NUEVO",
    MXN: 0,
    USD: 50000,
    GARANTIA: "NA",
    FECHA_DE_APROBACION: "01\/05\/2023",
    MES: "ENERO",
    AÑO: 2023,
    ACTA: 305,
    TRELLO: "https:\/\/trello.com\/c\/Q9lcwtf2\/494-378-bandas-del-noroeste",
    SOLICITUD: 12517,
    ESTATUS: "SIGNED",
    PROMOTOR: "KILAB",
    ESTATUS_EDU: "FIRMADO",
    FECHA_ESTATUS: "01\/19\/2023",
    OBSERVACIONES: "-",
    FECHA_CAMPOS: "01\/13\/2023",
    DIAS_PARA_PRIMERA_REVISION: 4,
    FECHA_PRIMERA_REVISION: "01\/17\/2023",
    FECHA_ULTIMA_REVISION: "01\/17\/2023",
    FECHA_CIERRE_EDU: "01\/18\/2023",
    DIAS_EDU: 13,
    OS_PERSONA_MORAL: true,
    OS_MORAL: "MF INDUSTRIAL",
    QUEDO_OS_PM: true,
    FECHA_DE_ELABORACIÓN_DE_CONTRATO: "01\/19\/2023",
    DIAS_ELABORACIÓN_CONTRATO: 1,
    FECHA_REVISIÓN_CONTRATO: "01\/19\/2023",
    DIAS_VOBO: 0,
    FECHA_DE_FIRMA: "01\/19\/2023",
    DIAS_CONTRATO_FIRMA: 0,
    DIAS_TRANSCURRIDOS_AUT_FIRMA: 14,
    ELABORA_CONTRATO: "CRISTY",
    FOLIO: "BI202301001",
    DRIVE:
      "https:\/\/drive.google.com\/drive\/folders\/1miCw32YX4YJIOpsvmDWTGGv-T8DtxfsK?usp=drive_link",
    FORMA_DE_INSTRUMENTACION: "PRIVADO",
    "FIRMADO_EN:": "DOCUSIGN",
    EVIDENCIA_DE_FIRMA: true,
    RUG: "NA",
    "3WM": true,
    FORMATO_MESA_DE_CONTROL: "NA",
    CONTRATO_RECIBIDO_Y_REGISTRADO: true,
    EXPEDIENTE_COMPLETO: true,
    FECHA_COMPLETO: "02\/17\/2023",
    DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO: 43,
    CONTRATO_DIGITALIZADO:
      "https:\/\/drive.google.com\/file\/d\/1mkwE3Ni_HK6WQZwxlL5gmYyae0cUHT6r\/view?usp=drive_link",
    PAGARE_DIGITALIZADO:
      "https:\/\/drive.google.com\/file\/d\/1VAE_iaC-TwvxcL3l1x5tC-obCzraAi_z\/view?usp=drive_link",
    BOVEDA: true,
    MAPEO: true,
    COMENTARIO_MAPEO: "NA",
    CHECK_LIST: true,
    Drive_Check_List:
      "https:\/\/docs.google.com\/spreadsheets\/d\/1dA0e4y_vBeoWqiOoSdmflsHHEJyzwjtEFVx4tD0NRSM\/edit?usp=sharing",
  },
  {
    TIPO_DE_CLIENTE: "EXISTENTE",
    "RFC_(Expe)": "COUE740630CV5",
    "CLIENTE_(One_Pager)": "EDWIN COSSÍO UGARTE ",
    PRODUCTO: "BI",
    NOTA: "RENOVACIÓN",
    MXN: 4000000,
    USD: 0,
    GARANTIA: "NA",
    FECHA_DE_APROBACION: "01\/18\/2023",
    MES: "ENERO",
    AÑO: 2023,
    ACTA: 307,
    TRELLO: "https:\/\/trello.com\/c\/mZwwKE1L\/506-390-edwin-coss%C3%ADo",
    SOLICITUD: 12573,
    ESTATUS: "SIGNED",
    PROMOTOR: "OSCAR",
    ESTATUS_EDU: "FIRMADO",
    FECHA_ESTATUS: "02\/05\/2023",
    OBSERVACIONES: "-",
    FECHA_CAMPOS: "01\/31\/2023",
    DIAS_PARA_PRIMERA_REVISION: 1,
    FECHA_PRIMERA_REVISION: "02\/01\/2023",
    FECHA_ULTIMA_REVISION: "02\/01\/2023",
    FECHA_CIERRE_EDU: "02\/01\/2023",
    DIAS_EDU: 14,
    OS_PERSONA_MORAL: "NA",
    OS_MORAL: "-",
    QUEDO_OS_PM: "NA",
    FECHA_DE_ELABORACIÓN_DE_CONTRATO: "02\/02\/2023",
    DIAS_ELABORACIÓN_CONTRATO: 1,
    FECHA_REVISIÓN_CONTRATO: "02\/02\/2023",
    DIAS_VOBO: 0,
    FECHA_DE_FIRMA: "02\/05\/2023",
    DIAS_CONTRATO_FIRMA: 3,
    DIAS_TRANSCURRIDOS_AUT_FIRMA: 18,
    ELABORA_CONTRATO: "CRISTY",
    FOLIO: "BI202302001",
    DRIVE:
      "https:\/\/drive.google.com\/drive\/folders\/1gVLXXw_BcshQzikDw97EVwJXnKbmyryP?usp=drive_link",
    FORMA_DE_INSTRUMENTACION: "PRIVADO",
    "FIRMADO_EN:": "FISICO",
    EVIDENCIA_DE_FIRMA: true,
    RUG: "NA",
    "3WM": true,
    FORMATO_MESA_DE_CONTROL: "NA",
    CONTRATO_RECIBIDO_Y_REGISTRADO: true,
    EXPEDIENTE_COMPLETO: true,
    FECHA_COMPLETO: "02\/17\/2023",
    DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO: 30,
    CONTRATO_DIGITALIZADO:
      "https:\/\/drive.google.com\/file\/d\/1hQByHeHHSLyismpuWA6Ub6x-Ogm-_R0K\/view?usp=drive_link",
    PAGARE_DIGITALIZADO:
      "https:\/\/drive.google.com\/file\/d\/1A6TC4JlnV1NBncfxZu_OC4rMMcvJx_uC\/view?usp=drive_link",
    BOVEDA: true,
    MAPEO: true,
    COMENTARIO_MAPEO: "Faltan Fotos y CA Buró de OS",
    CHECK_LIST: true,
    Drive_Check_List:
      "https:\/\/docs.google.com\/spreadsheets\/d\/1J5RaiiUTXRre9xTCywqKDRzKmQYw10c6Z34BWflt6sY\/edit?usp=sharing",
  },
  {
    TIPO_DE_CLIENTE: "NUEVO",
    "CLIENTE_(One_Pager)": "FARM ROCK S DE RL DE CV",
    PRODUCTO: "BI",
    NOTA: "NUEVO",
    MXN: 500000,
    USD: 0,
    FECHA_DE_APROBACION: "01\/19\/2023",
    MES: "ENERO",
    AÑO: 2023,
    ESTATUS: "REJECTED",
    PROMOTOR: "LUIS",
    DIAS_PARA_PRIMERA_REVISION: 0,
    FECHA_CIERRE_EDU: "N\/A",
    DIAS_EDU: "N\/A",
    OS_PERSONA_MORAL: false,
    QUEDO_OS_PM: false,
    FECHA_DE_ELABORACIÓN_DE_CONTRATO: "N\/A",
    DIAS_ELABORACIÓN_CONTRATO: "N\/A",
    FECHA_REVISIÓN_CONTRATO: "N\/A",
    DIAS_VOBO: "N\/A",
    FECHA_DE_FIRMA: "N\/A",
    DIAS_CONTRATO_FIRMA: "N\/A",
    DIAS_TRANSCURRIDOS_AUT_FIRMA: "N\/A",
    ELABORA_CONTRATO: "N\/A",
    FORMA_DE_INSTRUMENTACION: "NA",
    "FIRMADO_EN:": "NA",
    EVIDENCIA_DE_FIRMA: "N\/A",
    RUG: "N\/A",
    "3WM": "N\/A",
    FORMATO_MESA_DE_CONTROL: "N\/A",
    CONTRATO_RECIBIDO_Y_REGISTRADO: "N\/A",
    EXPEDIENTE_COMPLETO: false,
    DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO: -44945,
    BOVEDA: false,
    MAPEO: false,
    CHECK_LIST: false,
  },
  {
    TIPO_DE_CLIENTE: "EXISTENTE",
    "RFC_(Expe)": "BIN180911GFA",
    "CLIENTE_(One_Pager)": "BYC INDUSTRIAS SA DE CV",
    PRODUCTO: "BI",
    NOTA: "MODIFICATORIO",
    MXN: 900000,
    USD: 0,
    GARANTIA: "NA",
    FECHA_DE_APROBACION: "01\/19\/2023",
    MES: "ENERO",
    AÑO: 2023,
    ACTA: 306,
    TRELLO: "https:\/\/trello.com\/c\/5PI7bU7X\/502-386-byc-industrias",
    SOLICITUD: 12557,
    ESTATUS: "SIGNED",
    PROMOTOR: "DENISSE",
    ESTATUS_EDU: "FIRMADO",
    FECHA_ESTATUS: "02\/02\/2023",
    OBSERVACIONES: "-",
    FECHA_CAMPOS: "01\/24\/2023",
    DIAS_PARA_PRIMERA_REVISION: 1,
    FECHA_PRIMERA_REVISION: "01\/25\/2023",
    FECHA_ULTIMA_REVISION: "01\/27\/2023",
    FECHA_CIERRE_EDU: "01\/31\/2023",
    DIAS_EDU: 12,
    OS_PERSONA_MORAL: "NA",
    OS_MORAL: "-",
    QUEDO_OS_PM: "NA",
    FECHA_DE_ELABORACIÓN_DE_CONTRATO: "02\/01\/2023",
    DIAS_ELABORACIÓN_CONTRATO: 1,
    FECHA_REVISIÓN_CONTRATO: "02\/01\/2023",
    DIAS_VOBO: 0,
    FECHA_DE_FIRMA: "02\/02\/2023",
    DIAS_CONTRATO_FIRMA: 1,
    DIAS_TRANSCURRIDOS_AUT_FIRMA: 14,
    ELABORA_CONTRATO: "CRISTY",
    FOLIO: "BI202301002",
    DRIVE:
      "https:\/\/drive.google.com\/drive\/folders\/1I_fTq06queLwbIVTfFfMxYxkm9eI6t8M?usp=drive_link",
    FORMA_DE_INSTRUMENTACION: "PRIVADO",
    "FIRMADO_EN:": "FISICO",
    EVIDENCIA_DE_FIRMA: true,
    RUG: true,
    "3WM": true,
    FORMATO_MESA_DE_CONTROL: "NA",
    CONTRATO_RECIBIDO_Y_REGISTRADO: true,
    EXPEDIENTE_COMPLETO: true,
    FECHA_COMPLETO: "02\/03\/2023",
    DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO: 15,
    CONTRATO_DIGITALIZADO:
      "https:\/\/drive.google.com\/file\/d\/1i41Zp0zdSiJj7YN1BVHYWLyBRN9Z06p1\/view?usp=drive_link",
    PAGARE_DIGITALIZADO:
      "https:\/\/drive.google.com\/file\/d\/1c-dm4Tc0AN8wztG6Wv9KwS2ejwI3yIgd\/view?usp=drive_link",
    BOVEDA: true,
    MAPEO: true,
    COMENTARIO_MAPEO: "NA",
    CHECK_LIST: true,
    Drive_Check_List:
      "https:\/\/docs.google.com\/spreadsheets\/d\/14M516VvzGNajCoszWRlsWQclJEVYRkOJ5GdOxyo6taE\/edit?usp=sharing",
  },
  {
    TIPO_DE_CLIENTE: "NUEVO",
    "RFC_(Expe)": "TIN201015KPA",
    "CLIENTE_(One_Pager)": "TRIFECTO INGENIERÍA, SAPI DE CV",
    PRODUCTO: "BI",
    NOTA: "NUEVO",
    MXN: 500000,
    USD: 0,
    GARANTIA: "NA",
    FECHA_DE_APROBACION: "01\/26\/2023",
    MES: "ENERO",
    AÑO: 2023,
    ACTA: 309,
    TRELLO: "https:\/\/trello.com\/c\/M0zD656S\/474-360-trifecto",
    ESTATUS: "SIGNED",
    PROMOTOR: "DENISSE",
    DIAS_PARA_PRIMERA_REVISION: 0,
    FECHA_CIERRE_EDU: "02\/01\/2023",
    DIAS_EDU: 6,
    OS_PERSONA_MORAL: false,
    QUEDO_OS_PM: false,
    FECHA_DE_ELABORACIÓN_DE_CONTRATO: "02\/03\/2023",
    DIAS_ELABORACIÓN_CONTRATO: 2,
    FECHA_REVISIÓN_CONTRATO: "02\/03\/2023",
    DIAS_VOBO: 0,
    FECHA_DE_FIRMA: "02\/17\/2023",
    DIAS_CONTRATO_FIRMA: 14,
    DIAS_TRANSCURRIDOS_AUT_FIRMA: 22,
    ELABORA_CONTRATO: "CRISTY",
    FOLIO: "BI202302003",
    DRIVE: "BI202302003 MXN",
    FORMA_DE_INSTRUMENTACION: "NA",
    FIRMADO_EN: "NA",
    EVIDENCIA_DE_FIRMA: true,
    RUG: "NA",
    "3WM": true,
    FORMATO_MESA_DE_CONTROL: "NA",
    CONTRATO_RECIBIDO_Y_REGISTRADO: true,
    EXPEDIENTE_COMPLETO: false,
    DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO: -44952,
    BOVEDA: false,
    MAPEO: false,
    CHECK_LIST: false,
  },
]);
const headers = [
  
  [
    
    {
      title: "RFC (Expe)",
      key: "RFC_(Expe)",
    },
    {
      title: "CLIENTE (One Pager)",
      key: "CLIENTE_(One_Pager)",
    },

    {
      title: "PRODUCTO",
      key: "PRODUCTO",
      value: "PRODUCTO",
    },
    {
      title: "NOTA",
      key: "NOTA",
    },
    {
      title: "MXN",
      key: "MXN",
    },
    {
      title: "USD",
      key: "USD",
    },
    {
      title: "GARANTIA",
      key: "GARANTIA",
    },
    {
      title: "FECHA DE APROBACIÓN",
      key: "FECHA_DE_APROBACION",
    },
    {
      title: "MES",
      key: "MES",
    },
    {
      title: "AÑO",
      key: "AÑO",
    },
    {
      title: "ACTA",
      key: "ACTA",
    },
    {
      title: "TRELLO",
      key: "TRELLO",
    },

    {
      title: "SOLICITUD",
      key: "SOLICITUD",
    },
    {
      title: "ESTATUS",
      key: "ESTATUS",
    },
    {
      title: "PROMOTOR",
      key: "PROMOTOR",
    },
    {
      title: "ESTATUS EDU",
      key: "ESTATUS_EDU",
    },
    {
      title: "FECHA ESTATUS",
      key: "FECHA_ESTATUS",
    },
    {
      title: "OBSERVACIONES",
      key: "OBSERVACIONES",
    },
    {
      title: "FECHA CAMPOS",
      key: "FECHA_CAMPOS",
    },
    {
      title: "DIAS PARA PRIMERA REVISION",
      key: "DIAS_PARA_PRIMERA_REVISION",
    },
    {
      title: "FECHA PRIMERA REVISION",
      key: "FECHA_PRIMERA_REVISION",
    },
    {
      title: "FECHA ULTIMA REVISION",
      key: "FECHA_ULTIMA_REVISION",
    },
    {
      title: "FECHA CIERRE EDU",
      key: "FECHA_CIERRE_EDU",
    },
    {
      title: "DIAS EDU",
      key: "DIAS_EDU",
    },
    {
      title: "OS PERSONA MORAL",
      key: "OS_PERSONA_MORAL",
    },
    {
      title: "OS MORAL",
      key: "OS_MORAL",
    },
    {
      title: "QUEDO OS PM",
      key: "QUEDO_OS_PM",
    },
    {
      title: "FECHA DE ELABORACIÓN DE CONTRATO",
      key: "FECHA_DE_ELABORACIÓN_DE_CONTRATO",
    },
    {
      title: "DIAS ELABORACIÓN CONTRATO",
      key: "DIAS_ELABORACIÓN_CONTRATO",
    },
    {
      title: "FECHA REVISIÓN CONTRATO",
      key: "FECHA_REVISIÓN_CONTRATO",
    },
    {
      title: "DIAS VOBO",
      key: "DIAS_VOBO",
    },
    {
      title: "FECHA DE FIRMA",
      key: "FECHA_DE_FIRMA",
    },
    {
      title: "DÍAS CONTRATO FIRMA",
      key: "DIAS_CONTRATO_FIRMA",
    },
    {
      title: "DÍAS TRANSCURRIDOS AUT FIRMA",
      key: "DIAS_TRANSCURRIDOS_AUT_FIRMA",
    },
    {
      title: "ELABORA CONTRATO",
      key: "ELABORA_CONTRATO",
    },
    {
      title: "FOLIO",
      key: "FOLIO",
    },
    {
      title: "DRIVE",
      key: "DRIVE",
    },
    {
      title: "FORMA DE INSTRUMENTACION",
      key: "FORMA_DE_INSTRUMENTACION",
    },
    {
      title: "FIRMADO EN:",
      key: "FIRMADO_EN:",
    },
    {
      title: "EVIDENCIA DE FIRMA",
      key: "EVIDENCIA_DE_FIRMA",
    },
    {
      title: "RUG",
      key: "RUG",
    },
    {
      title: "3WM",
      key: "3WM",
    },
    {
      title: "FORMATO MESA DE CONTROL",
      key: "FORMATO_MESA_DE_CONTROL",
    },
    {
      title: "CONTRATO RECIBIDO Y REGISTRADO",
      key: "CONTRATO_RECIBIDO_Y_REGISTRADO",
    },
    {
      title: "EXPEDIENTE COMPLETO",
      key: "EXPEDIENTE_COMPLETO",
    },
    {
      title: "FECHA COMPLETO",
      key: "FECHA_COMPLETO",
    },
    {
      title: "DIAS TRANSCURRIDOS AUT EXP COMPLETO",
      key: "DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO",
    },
    {
      title: "CONTRATO DIGITALIZADO",
      key: "CONTRATO_DIGITALIZADO",
    },
    {
      title: "PAGARÉ DIGITALIZADO",
      key: "PAGARE_DIGITALIZADO",
    },
    {
      title: "BOVEDA",
      key: "BOVEDA",
    },
    {
      title: "MAPEO",
      key: "MAPEO",
    },
    {
      title: "COMENTARIO MAPEO",
      key: "COMENTARIO_MAPEO",
    },
    {
      title: "CHECK LIST",
      key: "CHECK_LIST",
    },
    {
      title: "Drive Check List",
      key: "Drive_Check_List",
    },
  ],
];
const itemsCreditTrain = ref([
  {
    title: "Notas de Comité",
    disabled: false,
    href: "/credit",
  },
  { title: "Aprobaciones", disabled: false, href: "/credit/approves" },

  { title: "Resumen", disabled: false, href: "/credit/summary" },
]);
const search = ref("");
</script>

<template>
  <MainLayout page-title="Tren de Crédito">
    <div class="flex items-center align-center m-2">
      <v-card flat>
        <template v-slot:text>
          <v-container>
            <v-row>
              <v-col class="flex">
                <v-breadcrumbs :items="itemsCreditTrain" class="mx-auto">
                  <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                  </template>
                </v-breadcrumbs>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="11">
                <v-text-field
                  v-model="search"
                  label="Buscar"
                  prepend-inner-icon="mdi-magnify"
                  single-line
                  variant="outlined"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="1">
                <!-- <v-btn icon @click="dialog = true">
                  <v-icon>mdi-plus</v-icon>
                </v-btn> -->
                <Button>Button</Button>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <v-data-table
          :items="demoData"
          item-key="CLIENTE_(One_Pager)"
          :headers="headers"
          :search="search"
          page-text="{0}-{1} de {2}"
          items-per-page-text="Elementos por página"
          no-data-text="No se encontraron registros"
        >
        </v-data-table>
      </v-card>
    </div>
  </MainLayout>
</template>
