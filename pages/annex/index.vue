<script setup>
import { toast } from "vue-sonner";
import MainLayout from "@/layouts/MainLayout.vue";
import readXlsFile from "read-excel-file";
const { $annexStore } = useNuxtApp();
import { VDataTable } from "vuetify/lib/labs/components.mjs";
definePageMeta({
  middleware: ["auth"],
});
const items = ref([]);
const res = ref([]);

const headers = [
  {
    title: "Anexos a generar",
    key: "annex",
  },
  {
    title: "Cliente al que está relacionado",
    key: "1",
  },
  {
    title:
      "Nombre Completo (apellido paterno materno y nombre(s) sin abreviaturas) o Razón Social",
    key: "5",
  },
  {
    title: "No. de Cliente",
    key: "6",
  },
  {
    title: "CURP",
    key: "21",
  },
  
];
const annex = ref([]);
const annexToGenerate = ref({});
onMounted(async () => {
  annex.value = await $annexStore.getAnnexList();
});

const updateAnnexList = (item, annex) => {
  const temp = [];
  for (let i = 0; i < annex.length; i++) {
    temp.push(annex[i].id);
  }
  annexToGenerate.value[item] = temp;
};

const uploadExcel = async () => {
  items.value = [];
  const input = document.getElementById("annex");
  await readXlsFile(input.files[0]).then((rows) => {
    items.value = rows.slice(1, rows.length);
  });
  for (let i = 0; i < items.value.length; i++) {
    annexToGenerate.value[items.value[i][5]] = [];
  }
};

const generateAnnex = async () => {
  let empty = true;
  for (const key in annexToGenerate.value) {
    empty = empty && annexToGenerate.value[key].length == 0;
  }

  if (empty) {
    toast.error("No se han seleccionado anexos");
    return;
  }

  const file = document.getElementById("annex");
  const formData = new FormData();
  formData.append("file", file.files[0]);
  formData.append("annex", JSON.stringify(annexToGenerate.value));
  toast.promise($annexStore.generateAnnex(formData), {
    loading: "Generando anexos...",
    success: (data) => {
      res.value = data;
      return "Anexos generados";
    },
    error: "Error al subir archivos",
  });
};

const cleanRes = () => {
  res.value = [];
};
const itemProps = (item) => {
  return {
    title: item.name.replace(/^ANEXO\s*/i, ""),
  };
};
</script>

<template>
  <MainLayout page-title="Anexos PLD">
    <div class="flex flex-col items-center justify-center w-full align-center">
      <!-- <input type="file" name="annex" id="annex" @change="uploadExcel()"> -->
      <div class="flex flex-col items-center align-center space-y-4 w-full">
        <div class="flex justify-start w-full px-4 pt-4">
          <NuxtLink to="/annex/historic">
            <v-btn rounded color="secondary"> Histórico </v-btn>
          </NuxtLink>
        </div>
        <h2 class="mt-4">Archivo Excel:</h2>
        <v-file-input
          @change="uploadExcel()"
          class="w-[400px]"
          label="Archivo"
          chips
          prepend-icon="mdi-microsoft-excel"
          variant="solo"
          accept=".xlsx"
          name="annex"
          id="annex"
        ></v-file-input>
        <div class="flex w-full px-6">
          <v-data-table
            v-if="items.length > 0"
            rounded
            :items="items"
            :headers="headers"
            no-data-title="No hay datos :("
            class="elevation-1"
            last-page-label="Última página"
            first-page-label="Primera página"
            no-data-text="No se han subido archivos"
            page-text= '{0}-{1} de {2}'
            items-per-page-text="Elementos por página"
            :footer-props="{
              itemsPerPageOptions: [5, 10, 25, 50, 100],
              itemsPerPageText: 'Elementos por página',
              'show-current-page': true,
              'show-first-last-page': true,
              pageText: 'Página',
            }"
          >
            <template v-slot:item.annex="{ item }">
              <v-select
                class="mt-4"
                :items="annex"
                :item-props="itemProps"
                multiple
                @update:model-value="updateAnnexList(item.columns['5'], $event)"
                variant="solo-filled"
                v-model="item.annex"
                chips
              >
              </v-select>
            </template>
          </v-data-table>
        </div>

        <v-btn
          color="secondary"
          class="my-4"
          @click="generateAnnex()"
          rounded
          v-if="items.length > 0"
        >
          Generar
        </v-btn>
      </div>
      <div class="flex flex-wrap w-full justify-between space-x-10">
        <v-card
          v-for="item in res"
          class="mx-auto my-4 w-[800px]"
          max-width="344"
          :title="item.name"
          prepend-icon="mdi-microsoft-excel"
          append-icon="mdi-open-in-new"
          :href="'https://docs.google.com/spreadsheets/d/' + item.id"
          target="_blank"
          rel="noopener"
        ></v-card>
      </div>
      <v-btn
        color="secondary"
        class="mb-4"
        @click="cleanRes()"
        rounded
        v-if="res.length > 0"
      >
        Limpiar resultados
      </v-btn>
    </div>
  </MainLayout>
</template>
