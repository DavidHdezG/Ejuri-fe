<script setup>
import { mergeProps } from "vue";
const props = defineProps(["item", "newCredit"]);
const { item, newCredit } = toRefs(props);
const newCreditInformation= ref({
    IDENTIFICADOR: '',
    FECHA: '',
    UNIDAD: '',
    NOMBRE: '',
    TRELLO: '',
    ONE_PAGER: '',
    NEGOCIO: '',
    SOCIOS: '',
    RL: '',
    TIPO_CREDITO: '',
    TIPO_CONTRATO: '',
    MONEDA: '',
    GARANTIA: '',
    ANEXO_GARANTIA: '',
    POLIZA: '',
    BLUSOR: '',
    FONDEO: '',
    NOTAS: '',
    PROPUESTA: '',
    SUJETO_A_SUPERVISION: '',
    RESOLUCION: '',
    PROMOTOR: '',
    AUDIO: '',
    TRANSCRIPCION: '',
});
const selectedIdType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.IDENTIFICADOR : item.value.IDENTIFICADOR;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.IDENTIFICADOR=value;
        } else {
            item.value.IDENTIFICADOR=value;
        }
    }
})
const selectedDateType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.FECHA.split('-').reverse().join('-') : item.value.FECHA.split('-').reverse().join('-');
    },
    set:(value)=>{
        value = value.split('-').reverse().join('-');
        if(newCredit.value){
            newCreditInformation.value.FECHA=value;
        } else {
            item.value.FECHA=value;
        }
    }
})
const selectedUnitType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.UNIDAD : item.value.UNIDAD;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.UNIDAD=value;
        } else {
            item.value.UNIDAD=value;
        }
    }
})
const selectedNameType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.NOMBRE : item.value.NOMBRE;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.NOMBRE=value;
        } else {
            item.value.NOMBRE=value;
        }
    }
})
const selectedTrelloType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.TRELLO : item.value.TRELLO;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.TRELLO=value;
        } else {
            item.value.TRELLO=value;
        }
    }
})
const selectedOnePagerType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.ONE_PAGER : item.value.ONE_PAGER;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.ONE_PAGER=value;
        } else {
            item.value.ONE_PAGER=value;
        }
    }
})
const selectedNegocioType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.NEGOCIO : item.value.NEGOCIO;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.NEGOCIO=value;
        } else {
            item.value.NEGOCIO=value;
        }
    }
})
const selectedSociosType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.SOCIOS : item.value.SOCIOS;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.SOCIOS=value;
        } else {
            item.value.SOCIOS=value;
        }
    }
})
const selectedRLType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.RL : item.value.RL;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.RL=value;
        } else {
            item.value.RL=value;
        }
    }
})
const selectedTipoCreditoType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.TIPO_CREDITO : item.value.TIPO_CREDITO;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.TIPO_CREDITO=value;
        } else {
            item.value.TIPO_CREDITO=value;
        }
    }
})
const selectedTipoContratoType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.TIPO_CONTRATO : item.value.TIPO_CONTRATO;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.TIPO_CONTRATO=value;
        } else {
            item.value.TIPO_CONTRATO=value;
        }
    }
})
const selectedMonedaType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.MONEDA : item.value.MONEDA;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.MONEDA=value;
        } else {
            item.value.MONEDA=value;
        }
    }
})
const selectedGarantiaType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.GARANTIA : item.value.GARANTIA;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.GARANTIA=value;
        } else {
            item.value.GARANTIA=value;
        }
    }
})
const selectedAnexoGarantiaType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.ANEXO_GARANTIA : item.value.ANEXO_GARANTIA;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.ANEXO_GARANTIA=value;
        } else {
            item.value.ANEXO_GARANTIA=value;
        }
    }
})
const selectedPolizaType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.POLIZA : item.value.POLIZA;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.POLIZA=value;
        } else {
            item.value.POLIZA=value;
        }
    }
})
const selectedBlusorType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.BLUSOR : item.value.BLUSOR;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.BLUSOR=value;
        } else {
            item.value.BLUSOR=value;
        }
    }
})
const selectedFondeoType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.FONDEO : item.value.FONDEO;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.FONDEO=value;
        } else {
            item.value.FONDEO=value;
        }
    }
})
const selectedNotasType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.NOTAS : item.value.NOTAS;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.NOTAS=value;
        } else {
            item.value.NOTAS=value;
        }
    }
})
const selectedPropuestaType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.PROPUESTA : item.value.PROPUESTA;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.PROPUESTA=value;
        } else {
            item.value.PROPUESTA=value;
        }
    }
})
const selectedSujetoASupervisionType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.SUJETO_A_SUPERVISION : item.value.SUJETO_A_SUPERVISION;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.SUJETO_A_SUPERVISION=value;
        } else {
            item.value.SUJETO_A_SUPERVISION=value;
        }
    }
})
const selectedResolucionType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.RESOLUCION : item.value.RESOLUCION;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.RESOLUCION=value;
        } else {
            item.value.RESOLUCION=value;
        }
    }
})
const selectedPromotorType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.PROMOTOR : item.value.PROMOTOR;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.PROMOTOR=value;
        } else {
            item.value.PROMOTOR=value;
        }
    }
})
const selectedAudioType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.AUDIO : item.value.AUDIO;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.AUDIO=value;
        } else {
            item.value.AUDIO=value;
        }
    }
})
const selectedTranscripcionType=computed({
    get:()=>{
        return newCredit.value ? newCreditInformation.value.TRANSCRIPCION : item.value.TRANSCRIPCION;
    },
    set:(value)=>{
        if(newCredit.value){
            newCreditInformation.value.TRANSCRIPCION=value;
        } else {
            item.value.TRANSCRIPCION=value;
        }
    }
})
</script>

<template>
  <v-container>
    <v-row justify-center>
      <v-dialog :persistent="newCredit ? true : false" width="1024">
        
        <template v-slot:activator="{ props: menu }">
            
          <v-tooltip v-if="newCredit" location="top" text="Nuevo Crédito">
            <template v-slot:activator="{ props: tooltip }">
              <v-btn v-bind="mergeProps(menu, tooltip)" icon small>
                <v-icon> mdi-plus </v-icon>
              </v-btn>
            </template>
          </v-tooltip>
          <v-tooltip v-else location="top" text="Ver información">
            <template v-slot:activator="{ props: tooltip }">
              <v-btn v-bind="mergeProps(menu, tooltip)" variant="text" small>
                {{ item.NOMBRE }}
              </v-btn>
            </template>
          </v-tooltip>
        </template>
        <template v-slot:default="{ isActive: main }"
          >
          <v-card>
            <v-card-title class="mt-6 ml-6">
              <span v-if="newCredit" class="text-h5">Nuevo Crédito </span>
              <span v-else class="text-h5">Información del Crédito </span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Identificador"
                      v-model="selectedIdType"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-if="!newCredit"
                      type="date"
                      label="Fecha"
                      v-model="selectedDateType"
                    >
                    </v-text-field>
                    <!-- <v-text-field
                      v-else
                      type="date"
                      label="Fecha"
                      v-model="date"
                    >
                    </v-text-field> -->
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-select    
                      chips
                      label="Unidad"
                      :items="['🅿️', '🌷', '🤡']"
                      v-model="selectedUnitType"
                    ></v-select>
                  </v-col>
                  <v-col md="8">
                    <v-text-field
                      label="Nombre"
                      v-model="selectedNameType"
                    ></v-text-field>
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
                        </v-tooltip>
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-text class="mt-4">
                            <v-container>
                              <v-row justify-center>
                                <v-col cols="12" md="10">
                                  <v-text-field
                                    clearable
                                    label="Enlace a Trello"
                                    v-model="selectedTrelloType"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="1">
                                  <v-btn
                                    :href="selectedTrelloType"
                                    target="_blank"
                                    variant="text"
                                  >
                                    Ir
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
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
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="10">
                                  <v-text-field
                                    label="Enlace a One Pager"
                                    v-model="selectedOnePagerType"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="1">
                                  <v-btn
                                    :href="selectedOnePagerType"
                                    target="_blank"
                                    variant="text"
                                  >
                                    Ir
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
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
                    <v-textarea
                      label="Negocio"
                      v-model="selectedNegocioType"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-textarea
                      label="Socios"
                        v-model="selectedSociosType"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-textarea
                      label="RL"
                        v-model="selectedRLType"
                    ></v-textarea>
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
                        v-model="selectedTipoCreditoType"
                    ></v-select>
                    
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      chips
                      label="Tipo de Contrato"
                      :items="['PRIVADO', 'RATIFICADO', 'ESCRITURA']"
                        v-model="selectedTipoContratoType"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      chips
                      label="Moneda"
                      :items="['MXN', 'MULTIMONEDA', 'USD']"
                        v-model="selectedMonedaType"
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
                        v-model="selectedGarantiaType"
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
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="10">
                                  <v-text-field
                                    label="Enlace de Anexo de Garantía"
                                    v-model="selectedAnexoGarantiaType"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="1">
                                  <v-btn
                                    :href="selectedAnexoGarantiaType"
                                    target="_blank"
                                    variant="text"
                                  >
                                    Ir
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
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
                        v-model="selectedPolizaType"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      chips
                      label="Blusor"
                      :items="['Si', 'NA', 'No']"
                        v-model="selectedBlusorType"
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
                        v-model="selectedFondeoType"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-textarea
                      label="Notas"
                      v-model="selectedNotasType"
                    ></v-textarea>
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
                                <v-textarea
                                  label="Condicinantes"
                                  v-model="selectedPropuestaType"
                                ></v-textarea>
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
                      v-model="selectedSujetoASupervisionType"
                    >
                    </v-select>
                    
                  </v-col>
                  <v-col md="2">
                    <v-select chips :items="['NA', 'NO']" label=" "> </v-select>
                  </v-col>
                  <v-col md="7">
                    <v-select
                      chips
                      :items="['EN ESPERA', 'APROBADO', 'RECHAZADO']"
                      label="Resolución"
                        v-model="selectedResolucionType"
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
                                <v-textarea
                                  label="Notas"
                                  v-model="selectedResolucionType"
                                ></v-textarea>
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
                        v-model="selectedPromotorType"
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
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="10">
                                  <v-text-field
                                    label="Enlace del audio"
                                    v-model="selectedAudioType"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="1">
                                    <v-btn
                                    :href="selectedAudioType"
                                    variant="text"
                                    small>
                                        Ir
                                    </v-btn>

                                </v-col>
                              </v-row>
                            </v-container>
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
                    <v-textarea label="Transcripción" 
                    v-model="selectedTranscripcionType"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions class="mb-4">
              <v-spacer></v-spacer>
              <v-btn v-if="!newCredit" text color="error" @click="main.value=false">Salir</v-btn>
              <v-dialog v-else width="500">
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
                          main.value = false;
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
                      <p v-if="newCredit">
                        ¿Estás seguro de que quieres guardar el nuevo crédito?
                      </p>
                      <p v-else>
                        ¿Estás seguro de que quieres guardar los cambios?
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
                          main.value = false;
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
        </template>
      </v-dialog>
    </v-row>
  </v-container>
</template>
