<script setup>
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { VDatePicker } from "vuetify/lib/labs/components.mjs";
import MainLayout from "@/layouts/MainLayout.vue";
import { mergeProps } from "vue";
const dataDemo = ref([
  {
    FECHA: "12\/21\/2023",
    UNIDAD: "🌷",
    NOMBRE: "LUZ MARIA TORRES GARCIA",
    TRELLO:
      "https:\/\/trello.com\/c\/Ix4wNgtm\/16-luz-torres-de-bloquera-gomez-farias",
    ONE_PAGER:
      "https:\/\/docs.google.com\/spreadsheets\/d\/1liOxhWW0bCMWJN5LtyNY3Qn551r_eyZZxj8ON-qaXbM\/edit#gid=472568241",
    NEGOCIO:
      "Venta y fabricacion de block de concreto y fabricacion y venta de reja ára manzana También es maestra jubilada.",
    SOCIOS: "NA",
    RL: "NA",
    TIPO_CREDITO: "REFINANCIAMIENTO",
    TIPO_CONTRATO: "PRIVADO",
    MONEDA: "MXN",
    GARANTIA: "FIDEICOMISO",
    ANEXO_DE_GARANTIA: "NA",
    POLIZA: "NA",
    BLUSOR: "NA",
    FONDEO: "R. PROPIOS",
    NOTAS: "-FPS202308001 CREDITO ACTIVO\n-7mo CREDITO MISMAS CONDICIONES ",
    PROPUESTA: "MISMA QUE RESOLUCIÓN",
    SUJETO_A_SUPERVISION: true,
    Column22: false,
    RESOLUCION: "APROBADO",
    RESOLUCION_COMITE:
      "Monto autorizado : $60,000 MXN\nTasa : 69% anual\nVigencia : 10 quincenas\nCon IVA\nSin aval\nSin garantía",
    PROMOTOR: "DDIAZ",
  },
  {
    FECHA: "12\/21\/2023",
    UNIDAD: "🌷",
    NOMBRE: "ISIDRA OLIVAS CHAVIRA",
    TRELLO:
      "https:\/\/trello.com\/c\/Q8fGWuKn\/57-isidra-olivas-de-ferreter%C3%ADa-paquim%C3%A9",
    ONE_PAGER:
      "https:\/\/docs.google.com\/spreadsheets\/d\/1IThFxBsBcfVmPqShdmNZljWYKu_uqp8GJYr7toiPLX8\/edit#gid=1908299801",
    NEGOCIO: "Venta de materiales ferreteros y construccion",
    SOCIOS: "NA",
    RL: "NA",
    TIPO_CREDITO: "REFINANCIAMIENTO",
    TIPO_CONTRATO: "PRIVADO",
    MONEDA: "MXN",
    GARANTIA: "NA",
    ANEXO_DE_GARANTIA: "NA",
    POLIZA: "NA",
    BLUSOR: "NA",
    FONDEO: "R. PROPIOS",
    NOTAS:
      "-SE202312116 y FPS202305004 CREDITOS ACTIVOS \n-SUBE MONTO DE 100 A 150\n-MOP 09 QUE YA SE HABIA VISTO EN OTROS COMITE, EL AVAL TAMBIEN TIENE ATRASOS YA ANTES VISTOS",
    PROPUESTA: "MISMA QUE RESOLUCIÓN",
    SUJETO_A_SUPERVISION: "NA",
    Column22: true,
    RESOLUCION: "APROBADO",
    RESOLUCION_COMITE:
      "Monto autorizado : $150,000 pesos\nTasa : 69% anual\nVigencia : 18 meses\nCon IVA\nAval : Armando Alarcón Ortega\nSin Garantía",
    PROMOTOR: "DDIAZ",
  },
  {
    FECHA: "12\/21\/2023",
    UNIDAD: "🌷",
    NOMBRE: "GABRIELA AGUILAR ARMENDARIZ",
    TRELLO:
      "https:\/\/trello.com\/c\/K0Birp3E\/72-gabriela-aguilar-de-carnitas",
    ONE_PAGER:
      "https:\/\/docs.google.com\/spreadsheets\/d\/1U04VtyT9zeWdHZ1GAaUyqc1a8wPt3_lEKXJ5rVJfHLE\/edit#gid=0",
    NEGOCIO: "VENTA DE CARNITAS DE PUERCO Y TAMALES",
    SOCIOS: "NA",
    RL: "NA",
    TIPO_CREDITO: "REFINANCIAMIENTO",
    TIPO_CONTRATO: "PRIVADO",
    MONEDA: "MXN",
    GARANTIA: "NA",
    ANEXO_DE_GARANTIA: "NA",
    POLIZA: "NA",
    BLUSOR: "NA",
    FONDEO: "R. PROPIOS",
    NOTAS:
      "-FPS202302004 CREDITO ACTIVO \n-SEGUNDO CREDITO\n-SUBE DE 50 A 70 MIL \n-BURÓ CON UNA LINEA VENCIDA DE CELULAR PERO NO ES RELEVANTE",
    PROPUESTA: "MISMA QUE RESOLUCIÓN",
    SUJETO_A_SUPERVISION: false,
    Column22: "NA",
    RESOLUCION: "APROBADO",
    RESOLUCION_COMITE:
      "Monto autorizado : $70,000 pesos\nTasa : 69% anual\nVigencia : 18 meses\nCon IVA\nSin Aval\nSin Garantía",
    PROMOTOR: "DDIAZ",
  },
]);
const headers = [
  {
    title: "IDENTIFICADOR",
    key: "IDENTIFICADOR",
    align: "center",
  },
  {
    title: "FECHA",
    key: "FECHA",
    align: "center",
  },
  {
    title: "UNIDAD",
    key: "UNIDAD",
    align: "center",
  },
  {
    title: "NOMBRE",
    key: "NOMBRE",
    
  },
  {
    title: "TRELLO",
    key: "TRELLO",
    align: "center",
  },
  {
    title: "ONE PAGER",
    key: "ONE_PAGER",
    align: "center",
  },
  {
    title: "NEGOCIO",
    key: "NEGOCIO",
  },
  {
    title: "SOCIOS",
    key: "SOCIOS",
    align: "center",
  },
  {
    title: "RL",
    key: "RL",
    align: "center",
  },
  {
    title: "TIPO CRÉDITO",
    key: "TIPO_CREDITO",
    align: "center",
  },
  {
    title: "TIPO CONTRATO",
    key: "TIPO_CONTRATO",
    align: "center",
  },
  {
    title: "MONEDA",
    key: "MONEDA",
    align: "center",
  },
  {
    title: "GARANTÍA",
    key: "GARANTIA",
    align: "center",
  },
  {
    title: "ANEXO DE GARANTÍA",
    key: "ANEXO_DE_GARANTIA",
    align: "center",
  },
  {
    title: "PÓLIZA",
    key: "POLIZA",
    align: "center",
  },
  {
    title: "BLUSOR",
    key: "BLUSOR",
    align: "center",
  },
  {
    title: "FONDEO",
    key: "FONDEO",
    align: "center",
  },
  {
    title: "NOTAS",
    key: "NOTAS",
  },
  {
    title: "PROPUESTA",
    key: "PROPUESTA",
  },
  {
    title: "SUJETO A SUPERVISION",
    key: "SUJETO_A_SUPERVISION",
    align: "center",
  },
  {
    title: "-",
    key: "Column22",
    align: "center",
  },
  {
    title: "RESOLUCIÓN",
    key: "RESOLUCION",
    align: "center",
  },
  {
    title: "RESOLUCIÓN COMITÉ",
    key: "RESOLUCION_COMITE",
  },
  {
    title: "PROMOTOR",
    key: "PROMOTOR",
    align: "center",
  },
  {
    title: "AUDIO",
    key: "AUDIO",
    align: "center",
  },
  {
    title: "TRANSCRIPCIÓN ",
    key: "TRANSCRIPCIÓN",
  },
];
const search = ref("");
const dialog = ref(false);
const creditType = (item) => {
  const creditTypeToColor = {
    REFINANCIAMIENTO: "blue",
    NUEVO: "green",
    MODIFICATORIO: "yellow",
    REESTRUCTURA: "red",
  };
  return creditTypeToColor[item.columns.TIPO_CREDITO] || "";
};
const contractType = (item) => {
  const contractTypeToColor = {
    PRIVADO: "green",
    RATIFICADO: "blue",
    ESCRITURA: "red",
  };
  return contractTypeToColor[item.columns.TIPO_CONTRATO] || "";
};
const moneyType = (item) => {
  const moneyTypeToColor = {
    MXN: "green",
    MULTIMONEDA: "blue",
    USD: "red",
  };
  return moneyTypeToColor[item.columns.MONEDA] || "";
};
const warrantyType = (item) => {
  const warrantyTypeToColor = {
    HIPOTECARIA: "yellow",
    NA: "gray",
    EXCEPCIÓN: "red",
    PRENDARIA: "green",
    "BACK TO BACK": "brown",
    "HIP Y PREND": "blue",
    FIDEICOMISO: "purple",
  };
  return warrantyTypeToColor[item.columns.GARANTIA] || "";
};
const policyOrBlusorType = (item) => {
  const policyOrBlusorToColor = {
    SI: "yellow",
    NA: "gray",
    NO: "red",
  };
  return policyOrBlusorToColor[item] || "";
};
const fondeoType = (item) => {
  const fondeoTypeToColor = {
    "R. PROPIOS": "yellow",
    "NO ESPECIFICADO": "gray",
    "NO FONDEABLE": "red",
    FIRA: "green",
    BANCOMEXT: "blue",
  };
  return fondeoTypeToColor[item.columns.FONDEO] || "";
};
const booleanOrTextType = (item) => {
  return typeof item === "boolean" ? true : false;
};
const resolutionType = (item) => {
  const resolutionToColor = {
    EN_ESPERA: "yellow",
    APROBADO: "green",
    RECHAZADO: "red",
  };
  return resolutionToColor[item.columns.RESOLUCION] || "";
};
</script>
<template>
  <MainLayout page-title="Tren de Crédito">
    <div class="flex items-center align-center m-2">
      <v-card flat title="Notas de Comité">
        <template v-slot:text>
          <v-container>
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
                <v-btn icon small @click="dialog=true">
                  <v-icon> mdi-plus </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <v-data-table
        density="compact"
          page-text="{0}-{1} de {2}"
          items-per-page-text="Elementos por página"
          no-data-text="No se encontraron registros"
          :items="dataDemo"
          :headers="headers"
          :search="search"
        >
          <template v-slot:item.TRELLO="{ item }">
            <v-btn
              :href="item.columns.TRELLO"
              target="_blank"
              color="transparent"
              icon
              small
            >
              <v-icon> mdi-trello </v-icon>
            </v-btn>
          </template>
          <template v-slot:item.ONE_PAGER="{ item }">
            <v-btn
              :href="item.columns.ONE_PAGER"
              target="_blank"
              color="transparent"
              icon
              small
            >
              <v-icon> mdi-file-document-outline </v-icon>
            </v-btn>
          </template>
          <template v-slot:item.TIPO_CREDITO="{ item }">
            <v-chip :color="creditType(item)" :text="item.columns.TIPO_CREDITO">
            </v-chip>
          </template>
          <template v-slot:item.TIPO_CONTRATO="{ item }">
            <v-chip
              :color="contractType(item)"
              :text="item.columns.TIPO_CONTRATO"
            >
            </v-chip>
          </template>
          <template v-slot:item.MONEDA="{ item }">
            <v-chip :color="moneyType(item)" :text="item.columns.MONEDA">
            </v-chip>
          </template>
          <template v-slot:item.GARANTIA="{ item }">
            <v-chip :color="warrantyType(item)" :text="item.columns.GARANTIA">
            </v-chip>
          </template>
          <template v-slot:item.POLIZA="{ item }">
            <v-chip
              :color="policyOrBlusorType(item)"
              :text="item.columns.POLIZA"
            >
            </v-chip>
          </template>
          <template v-slot:item.BLUSOR="{ item }">
            <v-chip
              :color="policyOrBlusorType(item)"
              :text="item.columns.BLUSOR"
            >
            </v-chip>
          </template>
          <template v-slot:item.FONDEO="{ item }">
            <v-chip :color="fondeoType(item)" :text="item.columns.FONDEO">
            </v-chip>
          </template>
          <template v-slot:item.SUJETO_A_SUPERVISION="{ item }">
            <v-checkbox
              v-if="booleanOrTextType(item.columns.SUJETO_A_SUPERVISION)"
              disabled
              :model-value="item.columns.SUJETO_A_SUPERVISION"
            >
            </v-checkbox>
            <v-chip v-else color="blue" text="NA"> </v-chip>
          </template>
          <template v-slot:item.Column22="{ item }">
            <v-checkbox
              v-if="booleanOrTextType(item.columns.Column22)"
              disabled
              :model-value="item.columns.SUJETO_A_SUPERVISION"
            >
            </v-checkbox>
            <v-chip v-else color="blue" text="NA"> </v-chip>
          </template>
          <template v-slot:item.RESOLUCION="{ item }">
            <v-chip
              :color="resolutionType(item)"
              :text="item.columns.RESOLUCION"
            >
            </v-chip>
          </template>
          <template v-slot:item.AUDIO="{ item }">
            <v-btn
              v-if="item.columns.AUDIO"
              :href="item.columns.AUDIO"
              target="_blank"
              color="transparent"
              icon
              small
            >
              <v-icon> mdi-microphone </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <template>
      <v-row justify-center>
        <v-dialog v-model="dialog" persistent width="1024">
          <v-card>
            <v-card-title class="mt-6">
              <span class="text-h5"> Nuevo Crédito </span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Identificador"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field type="date" label="Fecha"> </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-select
                      chips
                      label="Unidad"
                      :items="['🅿️', '🌷', '🤡']"
                    ></v-select>
                  </v-col>
                  <v-col md="8">
                    <v-text-field label="Nombre"></v-text-field>
                  </v-col>
                  <v-col md="1">
                    <v-dialog width="512">
                      <template v-slot:activator="{ props: menu }">
                        <v-tooltip location="top" text="Enlace a Trello">
                          <template v-slot:activator="{ props: tooltip }">
                            <v-btn
                              v-bind="mergeProps(menu, tooltip)"
                              icon
                              small
                            >
                              <v-icon> mdi-trello </v-icon>
                            </v-btn>
                          </template>
                          Enlace a Trello
                        </v-tooltip>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-text class="mt-4">
                            <v-text-field
                              label="Enlace a Trello"
                            ></v-text-field>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="error"
                              >Cancelar</v-btn
                            >
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="success"
                              >Guardar</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                  <v-col md="1">
                    <v-dialog width="512">
                      <template v-slot:activator="{ props: menu }">
                        <v-tooltip location="top" text="Enlace a Trello">
                          <template v-slot:activator="{ props: tooltip }">
                            <v-btn
                              v-bind="mergeProps(menu, tooltip)"
                              icon
                              small
                            >
                              <v-icon> mdi-google-drive </v-icon>
                            </v-btn>
                          </template>
                          Enlace a One Pager
                        </v-tooltip>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-text class="mt-4">
                            <v-text-field
                              label="Enlace a One Pager"
                            ></v-text-field>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="error"
                              >Cancelar</v-btn
                            >
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="success"
                              >Guardar</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-textarea label="Negocio"></v-textarea>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-textarea label="Socios"></v-textarea>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-textarea label="RL"></v-textarea>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      chips
                      label="Tipo de Crédito"
                      :items="[
                        'REFINANCIAMIENTO',
                        'NUEVO',
                        'MODIFICATORIO',
                        'REESTRUCTURA',
                      ]"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      chips
                      label="Tipo de Contrato"
                      :items="['PRIVADO', 'RATIFICADO', 'ESCRITURA']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      chips
                      label="Moneda"
                      :items="['MXN', 'MULTIMONEDA', 'USD']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      chips
                      label="Garantía"
                      :items="[
                        'HIPOTECARIA',
                        'NA',
                        'EXCEPCIÓN',
                        'PRENDARIA',
                        'BACK TO BACK',
                        'HIP Y PREND',
                        'FIDEICOMISO',
                      ]"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="1">
                    <v-dialog width="512">
                      <template v-slot:activator="{ props: menu }">
                        <v-tooltip location="top" text="Enlace a Trello">
                          <template v-slot:activator="{ props: tooltip }">
                            <v-btn
                              v-bind="mergeProps(menu, tooltip)"
                              icon
                              small
                            >
                              <v-icon> mdi-shield-check-outline </v-icon>
                            </v-btn>
                          </template>
                          Enlace de Anexo de Garantía
                        </v-tooltip>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-text class="mt-4">
                            <v-text-field
                              label="Enlace de Anexo de Garantía"
                            ></v-text-field>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="error"
                              >Cancelar</v-btn
                            >
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="success"
                              >Guardar</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      chips
                      label="Póliza"
                      :items="['Si', 'NA', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      chips
                      label="Blusor"
                      :items="['Si', 'NA', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      chips
                      label="Fondeo"
                      :items="[
                        'R. PROPIOS',
                        'NO ESPECIFICADO',
                        'NO FONDEABLE',
                        'FIRA',
                        'BANCOMEXT',
                      ]"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-textarea label="Notas"></v-textarea>
                  </v-col>
                  <!-- PROPUESTA EXPANSIVE PANEL -->
                  <v-col cols="12" md="12">
                    <v-expansion-panels variant="popout">
                      <v-expansion-panel title="Propuesta">
                        <v-expansion-panel-text>
                          <!-- <v-card> -->
                          <v-container>
                            <v-row>
                              <v-col cols="12" md="3">
                                <v-text-field label="Producto"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="3">
                                <v-text-field label="Monto"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="3">
                                <v-text-field
                                  label="Tasa ordinaria"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="3">
                                <v-text-field label="Vigencia"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-textarea
                                  label="Obligado solidario"
                                ></v-textarea>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-textarea label="Garantías"></v-textarea>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-textarea label="Condicinantes"></v-textarea>
                              </v-col>
                            </v-row>
                          </v-container>
                          <!-- </v-card> -->
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                  <v-col md="3">
                    <v-select
                      chips
                      :items="['SI', 'NO']"
                      label="Sujeto a supervisión"
                    >
                    </v-select>
                  </v-col>
                  <v-col md="2">
                    <v-select chips :items="['NA', 'NO']" label=" "> </v-select>
                  </v-col>
                  <v-col md="7">
                    <v-select
                      chips
                      :items="['EN_ESPERA', 'APROBADO', 'RECHAZADO']"
                      label="Resolución"
                    >
                    </v-select>
                  </v-col>
                  <!-- RESOLUCION COMITË EXPANSIVE PANEL -->
                  <v-col cols="12" md="12">
                    <v-expansion-panels variant="popout">
                      <v-expansion-panel title="Resolución Comité">
                        <v-expansion-panel-text>
                          <!-- <v-card> -->
                          <v-container>
                            <v-row>
                              <v-col cols="12" md="3">
                                <v-text-field label="Producto"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="3">
                                <v-text-field label="Monto"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="3">
                                <v-text-field
                                  label="Tasa ordinaria"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="3">
                                <v-text-field label="Vigencia"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-textarea
                                  label="Obligado solidario"
                                ></v-textarea>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-textarea label="Garantías"></v-textarea>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-textarea label="Condicinantes"></v-textarea>
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-textarea label="Notas"></v-textarea>
                              </v-col>
                            </v-row>
                          </v-container>
                          <!-- </v-card> -->
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>

                  <v-col md="4">
                    <v-select
                      chips
                      :items="[
                        'DDIAZ',
                        'MCENICEROS',
                        'DARELLANO',
                        'KMANRIQUE',
                        'AVENEGAS',
                        'OSALOMON',
                        'RZARATE ',
                        'LTERRAZAS',
                      ]"
                      label="Promotor"
                    >
                    </v-select>
                  </v-col>
                  <v-col md="1">
                    <v-dialog width="512">
                      <template v-slot:activator="{ props: menu }">
                        <v-tooltip location="top" text="Enlace del audio">
                          <template v-slot:activator="{ props: tooltip }">
                            <v-btn
                              v-bind="mergeProps(menu, tooltip)"
                              icon
                              small
                            >
                              <v-icon> mdi-microphone </v-icon>
                            </v-btn>
                          </template>
                          Enlace del audio
                        </v-tooltip>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-text class="mt-4">
                            <v-text-field
                              label="Enlace del audio"
                            ></v-text-field>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="error"
                              >Cancelar</v-btn
                            >
                            <v-btn
                              @click="isActive.value = false"
                              text
                              color="success"
                              >Guardar</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" md="7">
                    <v-textarea label="Transcripción"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions class="mb-4">
              <v-spacer></v-spacer>
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn text color="error" v-bind="props">Cancelar</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card min-width="300">
                    <v-card-title class="text-h5"
                      >Cancelar el crédito</v-card-title
                    >
                    <v-card-text>
                      <p>
                        ¿Estás seguro de que quieres cancelar el nuevo crédito?
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn variant="text" @click="isActive.value = false">
                        Regresar
                      </v-btn>
                      <v-btn
                        color="error"
                        variant="text"
                        @click="
                          dialog = false;
                          isActive = false;
                        "
                      >
                        Cancelar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>

              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn text color="success" v-bind="props">Guardar</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card min-width="300">
                    <v-card-title class="text-h5"
                      >Guardar el crédito</v-card-title
                    >
                    <v-card-text>
                      <p>
                        ¿Estás seguro de que quieres guardar el nuevo crédito?
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn variant="text" @click="isActive.value = false">
                        Regresar
                      </v-btn>
                      <v-btn
                        color="success"
                        variant="text"
                        @click="
                          dialog = false;
                          isActive = false;
                        "
                      >
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </MainLayout>
</template>
