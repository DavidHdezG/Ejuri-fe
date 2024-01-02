<script setup>
import { storeToRefs } from "pinia";
import MainLayout from "@/layouts/MainLayout.vue";
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { toast } from "vue-sonner";
definePageMeta({
  middleware: ["auth"],
});
const { $annexStore, $userStore } = useNuxtApp();
const { role } = storeToRefs($userStore);
const { annexHistoricList } = storeToRefs($annexStore);
const search = ref("");
const folderLink = ref('https://drive.google.com/drive/u/0/folders/13KDHL_BMLMOH3jQwlu1qCm-2x1E2w8Pr');
const headers = [
  {
    title: "ID",
    key: "id",
  },
  
  {
    title: "Empresa",
    key: "companyName",
  },
  {
    title: "Usuario",
    key: "user.name",
  },
  {
    title: "Creación",
    key: "user.createdAt",
    value: (item) => new Date(item.createdAt).toLocaleDateString(),
  },
  {
    title: "Archivo generado",
    key: "driveId",
    value: (item) => `https://docs.google.com/spreadsheets/d/${item.driveId}`,
  },
  {
    title: "Acciones",
    key: "actions",
  },
];
const deleteItem = async (item) => {
  const confirm = true;
  toast.promise($annexStore.removeHistoric(item.columns.id), {
    loading: "Eliminando...",
    success: "Eliminado con éxito",
    error: "Error al eliminar",
  });
  if (confirm) {
    // await $annexStore.removeHistoric(item.columns.id);
  }
};
onMounted(async () => {
  await $annexStore.getAnnexHistoricList();
});
</script>

<template>
  <MainLayout page-title="Histórico PLD">
    <div class="flex flex-col items-center align-center mt-4 mx-4">
        <div class="flex justify-start w-full">
            <v-btn rounded color="secondary" class="mb-4" target="_blank" href="https://drive.google.com/drive/u/0/folders/13KDHL_BMLMOH3jQwlu1qCm-2x1E2w8Pr">Ir a carpeta</v-btn>
        </div>
        <v-text-field
        v-model="search"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
        class="w-[400px]"
      ></v-text-field>
      <v-data-table
        :items="annexHistoricList"
        :search="search"
        :headers="headers"
        page-text= '{0}-{1} de {2}'
        items-per-page-text="Elementos por página"
        no-data-text="No se encontraron registros"
      >
        <template
          v-slot:item.actions="{ item }"
          v-if="role === 'Administrador'"
        >
          <!-- <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon> -->
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <v-btn size="small" v-bind="props"> Borrar </v-btn>
            </template>
            <template v-slot:default="{isActive}">
              <v-card min-width="300">
                <v-card-title class="text-h5">Eliminar el registro {{ item.columns.id }}</v-card-title>
                <v-card-text>
                  <p>¿Estás seguro de que quieres borrar este registro?</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn variant="text" @click="isActive.value = false"> Cancelar </v-btn>
                  <v-btn color="error" variant="text" @click="deleteItem(item)">
                    Eliminar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </template>
        <template v-slot:item.driveId="{ item }">
          <v-btn
            :href="item.columns.driveId"
            target="_blank"
            class="mx-2"
            color="transparent"
            icon
            small
          >
            <v-icon>mdi-google-drive</v-icon>
          </v-btn>
        </template>
        
      </v-data-table>
    </div>
  </MainLayout>
</template>
