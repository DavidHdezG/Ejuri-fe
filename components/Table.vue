<script setup>
import { storeToRefs } from "pinia";
import { toast } from "vue-sonner";

const route = useRoute();
const { $generalStore, $tablesStore, $userStore } = useNuxtApp();
const { role } = storeToRefs($userStore);
const { edited, confirmDelete, showConfirm } = storeToRefs($tablesStore);
let fragmentedData = []; // Fragmented data to paginate
const infoDocumentToDelete = ref(null); // Document ID to delete
let filters = []; // Filters to show
const idToRemove = ref(null); // QrHistoric ID to delete
let columns = []; // Table columns
const data = ref([]); // Table data
const totalPages = ref(1); // Total pages
const currentPage = ref(1); // Current page
onMounted(async () => {
  filters = [
    "PYME",
    "FloreSer",
    "Mutuos",
    "Buró",
    "Laboral",
    "Alianzas y Proveedores",
    "Autoridades",
    "Fondeo",
    "Todo",
  ];
  try {
    $generalStore.start();
    /**
     * Check the route name to get the data
     */
    if (route.name === "qrgen-documents") {
      columns = ["ID", "Tipo", "Categoría", "Duplicado", "Operación"];
      await $tablesStore.getCategoryData();
      await $tablesStore.getDocumentList();
      resetData($tablesStore.documentList);
    } else {
      columns = [
        "ID",
        "Nombre",
        "Folio",
        "Categoría",
        "Tipo de documento",
        "Usuario",
        "Comentarios",
        "QR",
        "Carpeta de cliente",
      ];

      await $tablesStore.getQrHistoricData();

      resetData($tablesStore.qrhistoricList);
    }
    $generalStore.stop();
  } catch (e) {
    console.log(e);
  }
});

/**
 * Divide the data in parts to paginate
 * @param {array} arr Data to divide
 * @param {number} size Size of the parts
 * @returns {array} Data divided
 */
const divideData = (arr, size) => {
  const pieces = [];
  const lenght = arr.length;

  for (let i = 0; i < lenght; i += size) {
    pieces.push(arr.slice(i, i + size));
  }

  return pieces;
};

/**
 * Reset the data to the first page
 * @param {array} arr Data to reset
 */
const resetData = (arr) => {
  data.value = [];
  currentPage.value = 1;
  fragmentedData = divideData(arr, 10);
  totalPages.value = fragmentedData.length > 0 ? fragmentedData.length : 1;
  data.value = fragmentedData[currentPage.value - 1];
};

/**
 * Go to the next page
 */
const NextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    data.value = fragmentedData[currentPage.value - 1];
  }
};

/**
 * Go to the previous page
 */
const PreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    data.value = fragmentedData[currentPage.value - 1];
  }
};

/**
 * Filter any data by category
 * @param {string} type Category to filter
 * @param {array} list List to filter
 * @returns {array} Filtered list
 */
const filterByCategory = (type, list) => {
  return type === "Todo"
    ? list
    : list.filter(
        (item) => item.category.name === type.toUpperCase().replace("Ó", "O")
      );
};

/**
 * Filter the data by category and reset the data to the first page
 * @param {string} type Category to filter
 */
const filterData = (type) => {
  let temp = [];

  if (route.name === "qrgen-documents") {
    temp = filterByCategory(type, $tablesStore.documentList);
  } else if (route.name === "qrgen-historic") {
    temp = filterByCategory(type, $tablesStore.qrhistoricList);
  }

  currentPage.value = 1;
  resetData(temp);
};

/**
 * Search data in the table
 * @param {string} input Input to search
 */
const searchData = (input) => {
  let temp = [];
  if (route.name === "qrgen-documents") {
    temp = $tablesStore.documentList.filter(function (item) {
      return (
        item.id.toLowerCase().includes(input.toLowerCase()) ||
        item.category.name.toLowerCase().includes(input.toLowerCase()) ||
        item.type.toLowerCase().includes(input.toLowerCase())
      );
    });
  } else if (route.name === "qrgen-historic") {
    temp = $tablesStore.qrhistoricList.filter(function (item) {
      return (
        item.id.toString().toLowerCase().includes(input.toLowerCase()) ||
        item.client.name.toLowerCase().includes(input.toLowerCase()) ||
        item.folio.toLowerCase().includes(input.toLowerCase()) ||
        item.category.name.toLowerCase().includes(input.toLowerCase()) ||
        item.document.type.toLowerCase().includes(input.toLowerCase()) ||
        item.user.name.toLowerCase().includes(input.toLowerCase()) ||
        item.comments.toLowerCase().includes(input.toLowerCase())
      );
    });
  }
  resetData(temp);
};

/**
 * Add a new document, set overlayEdit to true with creatingDocument to true to show the dialog to add a new document
 */
const add = async () => {
  $tablesStore.emptyDocumentToEdit();
  $tablesStore.creatingDocument = true;

  $tablesStore.overlayEdit = true;
};

/**
 * Edit a document, set overlayEdit to true and creatingDocument to false to show the dialog to edit a document
 * @param {number} id
 */
const edit = async (id) => {
  await $tablesStore.getDocumentToEdit(id);
  $tablesStore.creatingDocument = false;
  $tablesStore.overlayEdit = true;
};

/**
 * Remove a document or qr historic, set edited to true to reload the document list
 * @param {number} id Document ID to remove
 */
const remove = async (id) => {
  if (route.name === "qrgen-documents") {
    $tablesStore.deleteDocument(id);
  } else if (route.name === "qrgen-historic") {
    $tablesStore.deleteQrHistoric(id);
  }
  toast.success("Documento eliminado");
  $tablesStore.edited = true;
};

/**
 * Set the document ID to delete and show the confirm dialog
 * @param {number} id Document ID to delete
 */
const deleteItemConfirm = async (id) => {
  infoDocumentToDelete.value = `ID: ${id}`;
  idToRemove.value = id;
  showConfirm.value = true;
};

/**
 * Set overlayQr to true to show the QR dialog of a historic
 * @param {number} id Document ID to view
 */
const viewQR = async (id) => {
  await $tablesStore.getQrToView(id).then(() => {
    $tablesStore.overlayQr = true;
  });
};

/**
 * Watch if the user confirmed the delete action and delete the document
 * @param {number} id Document ID to view
 */
watch(
  () => confirmDelete.value,
  async () => {
    if (confirmDelete.value) {
      await remove(idToRemove.value);
      confirmDelete.value = false;
    }
  }
);

/**
 * Watch if the user edited a document and reload the document list
 */
watch(
  () => edited.value,
  async () => {
    if (edited.value) {
      await $tablesStore.getDocumentList();
      resetData($tablesStore.documentList);
      edited.value = false;
    }
  }
);
</script>

<template>
  <section class="container px-4 mx-auto">
    <Teleport to="body">
      <DialogTableItem />
      <DialogQRTable />
      <ConfirmAlert :string="infoDocumentToDelete" type="documento con ID" />
    </Teleport>
    <div class="mt-6 md:flex md:items-center md:justify-between">
      <div
        class="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse"
      >
        <button
          @click="filterData(filter)"
          :value="filter"
          v-for="filter in filters"
          class="px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm active:bg-teal-500"
        >
          {{ filter }}
        </button>
      </div>
      <div>
        <button
          @click="add()"
          v-if="$route.name === 'qrgen-documents'"
          class="items-center text-xs font-medium text-teal-500 transition-colors duration-200 sm:text-sm hover:text-[#3f51b5]"
        >
          <Icon name="ic:baseline-add-circle" size="26" />
        </button>
      </div>
      <div class="relative flex items-center md:mt-0">
        <span class="absolute">
          <Icon
            name="ph:magnifying-glass"
            size="22"
            class="w-5 h-5 mx-3 text-gray-400"
          />
        </span>

        <input
          @input="searchData($event.target.value)"
          type="text"
          placeholder="Búsqueda"
          class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden border border-gray-200 md:rounded-lg overscroll-container"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="column in columns"
                    scope="col"
                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <div
                      v-if="column !== 'ID'"
                      class="flex items-center gap-x-3 focus:outline-none"
                    >
                      <span>{{ column }}</span>
                    </div>
                    <button
                      v-if="column === 'ID'"
                      class="flex items-center gap-x-1 focus:outline-none"
                    >
                      <span>{{ column }}</span>
                    </button>
                  </th>

                  <th scope="col" class="relative py-3.5 px-4">
                    <span class="sr-only">Editar</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  v-for="item in data"
                  v-if="$route.name === 'qrgen-documents'"
                >
                  <TableDataRow :data="item.id" />
                  <TableDataRow :data="item.type" />
                  <TableDataRow :data="item.category.name" />
                  <TableDataRow :data="item.duplicate" />

                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <button
                      @click="edit(item.id)"
                      class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      <Icon
                        name="material-symbols:edit-outline-rounded"
                        size="22"
                        class="w-6 h-6"
                      />
                    </button>
                    <button
                      v-if="role === 'Administrador'"
                      @click="deleteItemConfirm(item.id)"
                      class="px-1 py-1 text-gray-500 hover:text-red-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      <Icon
                        name="material-symbols:delete-outline-rounded"
                        size="22"
                        class="w-6 h-6"
                      />
                    </button>
                  </td>
                </tr>
                <tr v-else v-for="item in data">
                  <TableDataRow :data="item.id" />
                  <TableDataRow
                    :data="item.client.name ? item.client.name : ''"
                  />
                  <TableDataRow :data="item.folio" />
                  <TableDataRow :data="item.category.name" />
                  <TableDataRow :data="item.document.type" />
                  <TableDataRow :data="item.user.name" />
                  <TableDataRow :data="item.comments" />

                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <button
                      @click="viewQR(item.id)"
                      class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      <Icon name="material-symbols:qr-code" class="w-6 h-6" />
                    </button>
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <v-btn
                      rounded
                      color="secondary"
                      :href="
                        'https://drive.google.com/drive/folders/' +
                        item.client.id
                      "
                      target="_blank"
                    >
                      <Icon
                        name="material-symbols:folder-open"
                        class="w-6 h-6 text-white"
                      />
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 mb-6 sm:flex sm:items-center sm:justify-between">
      <div class="text-sm text-gray-500">
        Página
        <span class="font-medium text-gray-700"
          >{{ currentPage }} de {{ totalPages }}</span
        >
      </div>

      <div class="flex items-center gap-x-4 sm:mt-0">
        <button
          @click="PreviousPage()"
          class="flex items-center justify-between w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100"
        >
          <Icon
            class="w-5 h-5"
            name="material-symbols:arrow-left-alt-rounded"
            size="22"
          />
          <span> Anterior </span>
        </button>

        <button
          @click="NextPage()"
          class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100"
        >
          <span> Siguiente </span>

          <Icon
            class="w-5 h-5"
            name="material-symbols:arrow-right-alt-rounded"
            size="22"
          />
        </button>
      </div>
    </div>
  </section>
</template>
