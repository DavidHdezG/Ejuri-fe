<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { VDataTable } from "vuetify/lib/labs/components.mjs";
const demoData = ref([
  {
    TIPO_DE_CLIENTE: "NUEVO",
    RFC_Expe: "BNO130308HI1",
    CLIENTE_One_Pager: "BANDAS DEL NOROESTE, SA DE CV",
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
    FIRMADO_EN: "DOCUSIGN",
    EVIDENCIA_DE_FIRMA: true,
    RUG: "NA",
    threeWM: true,
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
    RFC_Expe: "COUE740630CV5",
    CLIENTE_One_Pager: "EDWIN COSSÍO UGARTE ",
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
    FIRMADO_EN: "FISICO",
    EVIDENCIA_DE_FIRMA: true,
    RUG: "NA",
    threeWM: true,
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
    CLIENTE_One_Pager: "FARM ROCK S DE RL DE CV",
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
    FIRMADO_EN: "NA",
    EVIDENCIA_DE_FIRMA: "N\/A",
    RUG: "N\/A",
    threeWM: "N\/A",
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
    RFC_Expe: "BIN180911GFA",
    CLIENTE_One_Pager: "BYC INDUSTRIAS SA DE CV",
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
    FIRMADO_EN: "FISICO",
    EVIDENCIA_DE_FIRMA: true,
    RUG: true,
    threeWM: true,
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
    RFC_Expe: "TIN201015KPA",
    CLIENTE_One_Pager: "TRIFECTO INGENIERÍA, SAPI DE CV",
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
    threeWM: true,
    FORMATO_MESA_DE_CONTROL: "NA",
    CONTRATO_RECIBIDO_Y_REGISTRADO: true,
    EXPEDIENTE_COMPLETO: false,
    DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO: -44952,
    BOVEDA: false,
    MAPEO: false,
    CHECK_LIST: false,
  },
]);
const headers = ref([
  [
    {
      title: "TIPO DE CLIENTE",
      key: "TIPO_DE_CLIENTE",
    },
    {
      title: "RFC (Expe)",
      key: "RFC_Expe",
    },
    {
      title: "CLIENTE (One Pager)",
      key: "CLIENTE_One_Pager",
    },

    {
      title: "PRODUCTO",
      key: "PRODUCTO",
      value: "PRODUCTO",
      class: "text-orange-400",
    },
    {
      title: "NOTA",
      key: "NOTA",
      class: "text-orange-400",
    },
    {
      title: "MXN",
      key: "MXN",
      class: "text-orange-400",
    },
    {
      title: "USD",
      key: "USD",
      class: "text-orange-400",
    },
    {
      title: "GARANTIA",
      key: "GARANTIA",
      class: "text-orange-400",
    },
    {
      title: "FECHA DE APROBACIÓN",
      key: "FECHA_DE_APROBACION",
      class: "text-orange-400",
    },
    {
      title: "MES",
      key: "MES",
      class: "text-orange-400",
    },
    {
      title: "AÑO",
      key: "AÑO",
      class: "text-orange-400",
    },
    {
      title: "ACTA",
      key: "ACTA",
      class: "text-orange-400",
    },
    {
      title: "TRELLO",
      key: "TRELLO",
      class: "text-orange-400",
    },

    {
      title: "SOLICITUD",
      key: "SOLICITUD",
      class: "text-orange-400",
    },
    {
      title: "ESTATUS",
      key: "ESTATUS",
      class: "text-green-400",
    },
    {
      title: "PROMOTOR",
      class: "text-green-400",
      key: "PROMOTOR",
    },
    {
      title: "ESTATUS EDU",
      class: "text-green-400",
      key: "ESTATUS_EDU",
    },
    {
      title: "FECHA ESTATUS",
      class: "text-green-400",
      key: "FECHA_ESTATUS",
    },
    {
      title: "OBSERVACIONES",
      class: "text-green-400",
      key: "OBSERVACIONES",
    },
    {
      class: "text-green-400",
      title: "FECHA CAMPOS",
      key: "FECHA_CAMPOS",
    },
    {
      title: "DIAS PARA PRIMERA REVISION",
      class: "text-green-400",
      key: "DIAS_PARA_PRIMERA_REVISION",
    },
    {
      title: "FECHA PRIMERA REVISION",
      class: "text-green-400",
      key: "FECHA_PRIMERA_REVISION",
    },
    {
      title: "FECHA ULTIMA REVISION",
      key: "FECHA_ULTIMA_REVISION",
      class: "text-green-400",
    },
    {
      title: "FECHA CIERRE EDU",
      key: "FECHA_CIERRE_EDU",
      class: "text-green-400",
    },
    {
      title: "DIAS EDU",
      class: "text-green-400",
      key: "DIAS_EDU",
    },
    {
      title: "OS PERSONA MORAL",
      class: "text-green-400",
      key: "OS_PERSONA_MORAL",
    },
    {
      title: "OS MORAL",
      class: "text-green-400",
      key: "OS_MORAL",
    },
    {
      title: "QUEDO OS PM",
      class: "text-green-400",
      key: "QUEDO_OS_PM",
    },
    {
      title: "FECHA DE ELABORACIÓN DE CONTRATO",
      key: "FECHA_DE_ELABORACIÓN_DE_CONTRATO",
      class: "text-pink-500",
    },
    {
      title: "DIAS ELABORACIÓN CONTRATO",
      key: "DIAS_ELABORACIÓN_CONTRATO",
      class: "text-pink-500",
    },
    {
      title: "FECHA REVISIÓN CONTRATO",
      key: "FECHA_REVISIÓN_CONTRATO",
      class: "text-pink-500",
    },
    {
      title: "DIAS VOBO",
      key: "DIAS_VOBO",
      class: "text-pink-500",
    },
    {
      title: "FECHA DE FIRMA",
      key: "FECHA_DE_FIRMA",
      class: "text-pink-500",
    },
    {
      title: "DÍAS CONTRATO FIRMA",
      key: "DIAS_CONTRATO_FIRMA",
      class: "text-pink-500",
    },
    {
      title: "DÍAS TRANSCURRIDOS AUT FIRMA",
      key: "DIAS_TRANSCURRIDOS_AUT_FIRMA",
      class: "text-pink-500",
    },
    {
      title: "ELABORA CONTRATO",
      key: "ELABORA_CONTRATO",
      class: "text-pink-500",
    },
    {
      title: "FOLIO",
      key: "FOLIO",
      class: "text-purple-700",
    },
    {
      title: "DRIVE",
      key: "DRIVE",
      class: "text-purple-700",
    },
    {
      title: "FORMA DE INSTRUMENTACION",
      key: "FORMA_DE_INSTRUMENTACION",
      class: "text-purple-700",
    },
    {
      title: "FIRMADO EN:",
      key: "FIRMADO_EN",
      class: "text-purple-700",
    },
    {
      title: "EVIDENCIA DE FIRMA",
      key: "EVIDENCIA_DE_FIRMA",
      class: "text-purple-700",
    },
    {
      title: "RUG",
      key: "RUG",
      class: "text-blue-700",
    },
    {
      title: "3WM",
      key: "threeWM",
      class: "text-blue-700",
    },
    {
      title: "FORMATO MESA DE CONTROL",
      key: "FORMATO_MESA_DE_CONTROL",
      class: "text-blue-700",
    },
    {
      title: "CONTRATO RECIBIDO Y REGISTRADO",
      key: "CONTRATO_RECIBIDO_Y_REGISTRADO",
      class: "text-blue-700",
    },
    {
      title: "EXPEDIENTE COMPLETO",
      key: "EXPEDIENTE_COMPLETO",
      class: "text-pink-300",
    },
    {
      title: "FECHA COMPLETO",
      key: "FECHA_COMPLETO",
      class: "text-pink-300",
    },
    {
      title: "DIAS TRANSCURRIDOS AUT EXP COMPLETO",
      key: "DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO",
      class: "text-pink-300",
    },
    {
      title: "CONTRATO DIGITALIZADO",
      key: "CONTRATO_DIGITALIZADO",
      class: "text-pink-300",
    },
    {
      title: "PAGARÉ DIGITALIZADO",
      key: "PAGARE_DIGITALIZADO",
      class: "text-pink-300",
    },
    {
      title: "BOVEDA",
      key: "BOVEDA",
      class: "text-pink-300",
    },
    {
      title: "MAPEO",
      key: "MAPEO",
      class: "text-pink-300",
    },
    {
      title: "COMENTARIO MAPEO",
      key: "COMENTARIO_MAPEO",
      class: "text-pink-300",
    },
    {
      title: "CHECK LIST",
      key: "CHECK_LIST",
      class: "text-pink-300",
    },
    {
      title: "Drive Check List",
      key: "Drive_Check_List",
      class: "text-pink-300",
    },
  ],
]);
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
const formatCash = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);
};
const statusType = (item) => {
  const statusTypeToColor = {
    SIGNED: "gray",
    REJECTED: "red",
    DECLINED: "gray",
    "ANNUAL REVIEW": "white",
    "CONTRACT READY": "blue",
    "EDU IN PROCESS": "yellow",
    "WITHOUT EDU": "pink",
  };
  return statusTypeToColor[item] || "";
};
</script>

<template>
  <MainLayout page-title="Tren de Crédito">
    <div class="flex items-center align-center m-2">
      <v-card flat>
        <template v-slot:text>
          <v-container>
            <v-row>
              <v-col class="flex">
                <!-- <v-breadcrumbs :items="itemsCreditTrain" class="mx-auto">
                  <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                  </template>
                </v-breadcrumbs> -->
                <CreditBreadcrumbs />
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
                <v-tooltip>
                  <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                      <v-icon>mdi-help</v-icon>
                      <v-overlay
                        activator="parent"
                        location-strategy="connected"
                        scroll-strategy="reposition"
                      >
                        <v-card class="pa-2"> 
                          <!-- <v-card-title class="text-h5">
                            <span class="font-weight-bold">Ayuda</span>
                          </v-card-title> -->
                          <v-card-text>
                            <p>
                              <span class="text-orange-400 font-bold">Aprobación</span> 
                              </p>
                            <p>
                              <span class="text-green-400 font-bold">Mesa de Control 1</span> 
                              </p>
                            <p>
                              <span class="text-pink-500 font-bold">Instrumentación</span> 
                            </p>
                            <p>
                              <span class="text-purple-700 font-bold">Formalización</span> 
                            </p>
                            <p>
                              <span class="text-blue-700 font-bold">Mesa de Control 2</span> 
                            </p>
                            <p>
                              <span class="text-pink-300 font-bold">Guardavalores</span> 
                            </p>
                            
                          </v-card-text>
                        </v-card>
                      </v-overlay>
                    </v-btn>
                  </template>
                  ¿Qué significan los colores en las columnas?
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <v-data-table
          :items="demoData"
          item-key="CLIENTE_One_Pager"
          :headers="headers"
          :search="search"
          page-text="{0}-{1} de {2}"
          items-per-page-text="Elementos por página"
          no-data-text="No se encontraron registros"
        >
          <template
            v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }"
          >
            <tr class="relative left-0">
              <template
                v-for="column in columns"
                :key="column.key"
                class="bg-red-200"
              >
                <td v-if="column.key == 'CLIENTE_One_Pager'" class="fixed">
                  <div class="">
                    <span
                      :class="'font-bold sticky cursor-pointer ' + column.class"
                      @click="() => toggleSort(column)"
                    >
                      {{ column.title }}
                    </span>
                    <template v-if="isSorted(column)">
                      <v-icon :icon="getSortIcon(column)"></v-icon>
                    </template>
                  </div>
                </td>
                <td v-else>
                  <div class="">
                    <span
                      :class="'font-bold cursor-pointer ' + column.class"
                      @click="() => toggleSort(column)"
                    >
                      {{ column.title }}
                    </span>
                    <template v-if="isSorted(column)">
                      <v-icon :icon="getSortIcon(column)"></v-icon>
                    </template>
                  </div>
                </td>
              </template>
            </tr>
          </template>

          <template v-slot:item="{ item }">
            <tr>
              <td>
                {{ item.columns.TIPO_DE_CLIENTE }}
              </td>
              <td>
                {{ item.columns.RFC_Expe }}
              </td>
              <td class="fixed">
                {{ item.columns.CLIENTE_One_Pager }}
              </td>
              <td>
                {{ item.columns.PRODUCTO }}
              </td>
              <td>
                {{ item.columns.NOTA }}
              </td>
              <td>
                {{ formatCash(item.columns.MXN) }}
              </td>
              <td>
                {{ formatCash(item.columns.USD) }}
              </td>
              <td>
                {{ item.columns.GARANTIA }}
              </td>
              <td>
                {{ item.columns.FECHA_DE_APROBACION }}
              </td>
              <td>
                {{ item.columns.MES }}
              </td>
              <td>
                {{ item.columns.AÑO }}
              </td>
              <td>
                {{ item.columns.ACTA }}
              </td>
              <td>
                {{ item.columns.TRELLO }}
              </td>
              <td>
                {{ item.columns.SOLICITUD }}
              </td>
              <td>
                <v-chip
                  :color="statusType(item.columns.ESTATUS)"
                  :text="item.columns.ESTATUS"
                  :variant="
                    item.columns.ESTATUS === 'SIGNED' ? 'outlined' : 'solid'
                  "
                >
                </v-chip>
              </td>
              <td>
                {{ item.columns.PROMOTOR }}
              </td>
              <td>
                {{ item.columns.ESTATUS_EDU }}
              </td>
              <td>
                {{ item.columns.FECHA_ESTATUS }}
              </td>
              <td>
                {{ item.columns.OBSERVACIONES }}
              </td>
              <td>
                {{ item.columns.FECHA_CAMPOS }}
              </td>
              <td>
                {{ item.columns.DIAS_PARA_PRIMERA_REVISION }}
              </td>

              <td>
                {{ item.columns.FECHA_PRIMERA_REVISION }}
              </td>
              <td>
                {{ item.columns.FECHA_ULTIMA_REVISION }}
              </td>
              <td>
                {{ item.columns.FECHA_CIERRE_EDU }}
              </td>
              <td>
                {{ item.columns.DIAS_EDU }}
              </td>
              <td>
                {{ item.columns.OS_PERSONA_MORAL }}
              </td>
              <td>
                {{ item.columns.OS_MORAL }}
              </td>
              <td>
                {{ item.columns.QUEDO_OS_PM }}
              </td>
              <td>
                {{ item.columns.FECHA_DE_ELABORACIÓN_DE_CONTRATO }}
              </td>
              <td>
                {{ item.columns.DIAS_ELABORACIÓN_CONTRATO }}
              </td>
              <td>
                {{ item.columns.FECHA_REVISIÓN_CONTRATO }}
              </td>
              <td>
                {{ item.columns.DIAS_VOBO }}
              </td>
              <td>
                {{ item.columns.FECHA_DE_FIRMA }}
              </td>
              <td>
                {{ item.columns.DIAS_CONTRATO_FIRMA }}
              </td>
              <td>
                {{ item.columns.DIAS_TRANSCURRIDOS_AUT_FIRMA }}
              </td>
              <td>
                {{ item.columns.ELABORA_CONTRATO }}
              </td>
              <td>
                {{ item.columns.FOLIO }}
              </td>
              <td>
                {{ item.columns.DRIVE }}
              </td>
              <td>
                {{ item.columns.FORMA_DE_INSTRUMENTACION }}
              </td>
              <td>
                {{ item.columns.FIRMADO_EN }}
              </td>
              <td>
                {{ item.columns.EVIDENCIA_DE_FIRMA }}
              </td>
              <td>
                {{ item.columns.RUG }}
              </td>
              <td>
                {{ item.columns.threeWM }}
              </td>
              <td>
                {{ item.columns.FORMATO_MESA_DE_CONTROL }}
              </td>
              <td>
                {{ item.columns.CONTRATO_RECIBIDO_Y_REGISTRADO }}
              </td>
              <td>
                {{ item.columns.EXPEDIENTE_COMPLETO }}
              </td>
              <td>
                {{ item.columns.FECHA_COMPLETO }}
              </td>
              <td>
                {{ item.columns.DIAS_TRANSCURRIDOS_AUT_EXP_COMPLETO }}
              </td>
              <td>
                {{ item.columns.CONTRATO_DIGITALIZADO }}
              </td>
              <td>
                {{ item.columns.PAGARE_DIGITALIZADO }}
              </td>
              <td>
                {{ item.columns.BOVEDA }}
              </td>
              <td>
                {{ item.columns.MAPEO }}
              </td>
              <td>
                {{ item.columns.COMENTARIO_MAPEO }}
              </td>
              <td>
                {{ item.columns.CHECK_LIST }}
              </td>
              <td>
                {{ item.columns.Drive_Check_List }}
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </MainLayout>
</template>

<style scoped>
.fixed {
  position: sticky;
  width: 5em;
  left: 0;
  top: auto;
  z-index: 999;
}

td:not(.fixed) {
  z-index: 0;
}
</style>
