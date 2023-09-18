<script setup>
import { storeToRefs} from "pinia";
const { $tablesStore } = useNuxtApp();
const { overlayEdit, edited,  documentToEdit, creatingDocument } = storeToRefs($tablesStore);
const create = ref(false);
const id = ref();
const type = ref();
const categoryInput = ref();
const duplicate = ref(false);
/* try {
  $tablesStore.getCategoryData();
} catch (e) {
  console.log(e);
} */

const editDoc = async () => {
  try {
    await $tablesStore.editDocument(
      id.value,
      type.value,
      category.value,
      duplicate.value
    );
    edited.value = true;
    overlayEdit.value = false;
  } catch (e) {
    console.log(e);
  }
};

const saveDoc = async () => {
  try {
    await $tablesStore.saveDocument(
      id.value,
      type.value,
      category.value,
      duplicate.value
    );
    edited.value = true;
    overlayEdit.value = false;
  } catch (e) {
    console.log(e);
  }
};

const cancel = () => {
  overlayEdit.value = false;
  creatingDocument.value = false;
};
watch(
  () => creatingDocument.value,
  () => {
    create.value = creatingDocument.value;
  }
);
watch(
  () => documentToEdit.value,
  () => {
    id.value = documentToEdit.value
      ? documentToEdit.value.id
      : "";
    type.value = documentToEdit.value
      ? documentToEdit.value.type
      : "";
    categoryInput.value = documentToEdit.value
      ? documentToEdit.value.category.id
      : "";
    duplicate.value = documentToEdit.value
      ? documentToEdit.value.duplicate
      : "";
  }
);
</script>

<template>
  <div class="text-center absolute">
    <v-dialog rounded v-model="overlayEdit" width="auto">
      <!--  <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template> -->
      <v-card>
        <div class="flex flex-col items-center space-y-4 py-6 px-4">
          <div class="text-lg" v-if="create">
            <span>Agregar documento</span>
          </div>
          <div class="text-lg" v-else>
            <span>Editar {{ id }}</span>
          </div>
          <div class="" id="formid">
            <div class="flex flex-col items-center justify-center space-y-4">
              <div class="flex flex-col items-center justify-center">
                <div class="pl-4 w-full" v-if="create">
                  <label for="Tipo">ID:</label>
                  <input
                    id="Id"
                    v-model="id"
                    required
                    type="text"
                    class="border border-gray-300 rounded focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  />
                </div>
                <div class="pl-4 w-full">
                  <label for="Tipo">Tipo:</label>
                  <input
                    id="Tipo"
                    v-model="type"
                    required
                    type="text"
                    class="border border-gray-300 rounded focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  />
                </div>

                <div class="pl-4">
                  <label for="category">Categoría:</label>
                  
                  <select
                    required
                    name="category"
                    v-model="categoryInput"
                    id="category"
                    class="border border-gray-300 rounded focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  >
                    <option
                      v-for="item in $tablesStore.category"
                      :value="item.id"
                      :key="item.id ? item.id : ''"
                    >

                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="pl-4 w-full">
                  <label for="duplicate">Duplicado:</label>
                  <input
                    id="duplicate"
                    v-model="duplicate"
                    required
                    type="checkbox"
                    class="border border-gray-300 rounded focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  />
                </div>
              </div>
              <div class="flex items-center justify-center pb-4 space-x-4">
                <button
                  @click="cancel()"
                  class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                >
                  Cancelar
                </button>
                <button
                  v-if="!create"
                  @click="editDoc()"
                  class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                >
                  Guardar
                </button>
                <button
                  v-else
                  @click="saveDoc()"
                  class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
