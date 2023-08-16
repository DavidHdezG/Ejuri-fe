<script setup>
const { $generalStore } = useNuxtApp();

let create = ref(false);
let id = ref();
let type = ref();
let category = ref();
let duplicate = ref(false);
/* try {
  $generalStore.getCategoryData();
} catch (e) {
  console.log(e);
} */

const editDoc = async () => {
  try {
    await $generalStore.editDocument(
      id.value,
      type.value,
      category.value,
      duplicate.value
    );
    $generalStore.edited = true;
    $generalStore.overlayEdit = false;
  } catch (e) {
    console.log(e);
  }
};

const saveDoc = async () => {
  try {
    console.log(id.value)
    console.log(type.value)
    console.log($generalStore.category.find((item) => item.id === category.value).id)
    console.log(duplicate.value)
    await $generalStore.saveDocument(
      id.value,
      type.value,
      $generalStore.category.find((item) => item.id === category.value).id,
      duplicate.value
    );
    $generalStore.edited = true;
    $generalStore.overlayEdit = false;
  } catch (e) {
    console.log(e);
  }
};

const cancel = () => {
  $generalStore.overlayEdit = false;
  $generalStore.creatingDocument = false;
};
watch(
  () => $generalStore.creatingDocument,
  () => {
    console.log(create.value + " create");
    create.value = $generalStore.creatingDocument;
  }
);
watch(
  () => $generalStore.documentToEdit,
  () => {
    id.value = $generalStore.documentToEdit
      ? $generalStore.documentToEdit.id
      : "";
    type.value = $generalStore.documentToEdit
      ? $generalStore.documentToEdit.type
      : "";
    category.value = $generalStore.documentToEdit
      ? $generalStore.documentToEdit.category.id
      : "";
    duplicate.value = $generalStore.documentToEdit
      ? $generalStore.documentToEdit.duplicate
      : "";
  }
);
</script>

<template>
  <div class="text-center">
    <v-dialog rounded v-model="$generalStore.overlayEdit" width="auto">
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
                    v-model="category"
                    id="category"
                    class="border border-gray-300 rounded focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  >
                    <option
                      v-for="item in $generalStore.category"
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
