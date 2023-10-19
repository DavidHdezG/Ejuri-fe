<script setup>
import { storeToRefs } from "pinia";
const { $tablesStore } = useNuxtApp();
const { confirmDelete, showConfirm } = storeToRefs($tablesStore);
const props =defineProps(["string","type"]);
const { string,type } = toRefs(props);
/**
 * Set the confirm option to true to perform an action and hide the confirm dialog
 */
const confirm = () => {
  confirmDelete.value = true;
  showConfirm.value = false;
};
/**
 * Set the confirm option to false to hide the confirm dialog
 */
const cancel = () => {
  showConfirm.value = false;
};
</script>

<template>
  <div class="text-center absolute w-[400px]">
    <v-dialog rounded v-model="showConfirm" width="auto">
      <v-card>
        <v-card-title class="headline">¿Eliminar el {{ type }} {{string}}?</v-card-title>
        <div class="flex items-center justify-evenly py-2">
          <button
            @click="cancel()"
            class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
          >
            Cancelar</button
          ><button
            @click="confirm()"
            class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#DC3545] hover:text-white transition duration-300"
          >
            Eliminar
          </button>
        </div>
      </v-card>
    </v-dialog>
  </div>
  <!--   <v-alert
    v-if="showConfirm"
    variant="tonal"
    type="warning"
    title="¿Estás segur@ de eliminar este documento?"
  >
    <button>Cancelar</button><button>Eliminar</button>
  </v-alert> -->
</template>
