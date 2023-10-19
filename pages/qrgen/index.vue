<script setup>
import { toast } from "vue-sonner";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
const defaultQr = "/qrcode.png";
import MainLayout from "../../layouts/MainLayout.vue";
const { $generalStore, $tablesStore } = useNuxtApp();
const { $userStore } = useNuxtApp();
definePageMeta({
  middleware: ["auth"],
});

const clientData = ref([]);
/**
 * Get the client list and update the clientData object to filter the clients by category and use it in the form
 */
const updateClientData = async () => {
  await $generalStore.getClientData();
  clientData.value = {
    pyme: $generalStore.clientList.filter(
      (item) => item.category.name === "PYME"
    ),
    floreser: $generalStore.clientList.filter(
      (item) => item.category.name === "FLORESER"
    ),
    mutuos: $generalStore.clientList.filter(
      (item) => item.category.name === "MUTUOS"
    ),
    laboral: $generalStore.clientList.filter(
      (item) => item.category.name === "LABORAL"
    ),
    // BURO = PYME y FLORESER
    buro: $generalStore.clientList.filter(
      (item) =>
        item.category.name === "PYME" || item.category.name === "FLORESER"
    ),
    alianzas: $generalStore.clientList.filter(
      (item) => item.category === "ALIANZAS Y PROVEEDORES"
    ),
  };
};
/**
 * Get the document list and the category list
 */
try {
  $generalStore.start();
  await $tablesStore.getDocumentList();
  await $tablesStore.getCategoryData();
  updateClientData();
  /* await $generalStore.getClientData(); */
} catch (e) {
  console.log(e);
}

/**
 * Filter the document list by category and sort it alphabetically
 */
const documentList = ref({
  pyme: $tablesStore.documentList
    .filter((item) => item.category.name === "PYME")
    .sort((a, b) => a.type.localeCompare(b.type)),
  floreser: $tablesStore.documentList
    .filter((item) => item.category.name === "FLORESER")
    .sort((a, b) => a.type.localeCompare(b.type)),
  mutuos: $tablesStore.documentList
    .filter((item) => item.category.name === "MUTUOS")
    .sort((a, b) => a.type.localeCompare(b.type)),
  laboral: $tablesStore.documentList
    .filter((item) => item.category.name === "LABORAL")
    .sort((a, b) => a.type.localeCompare(b.type)),
  buro: $tablesStore.documentList
    .filter((item) => item.category.name === "CARTAS DE BURO")
    .sort((a, b) => a.type.localeCompare(b.type)),
  alianzas: $tablesStore.documentList
    .filter((item) => item.category.name === "ALIANZAS Y PROVEEDORES")
    .sort((a, b) => a.type.localeCompare(b.type)),
});

const data = ref("");
const image = ref(defaultQr);

/**
 * Store the data of the form
 */
const fileData = reactive({
  category: null,
  name: null,
  folio: null,
  document: null,
  comments: "",
  useComments: false,
});
$generalStore.stop();

/**
 * Update the file name when the form data changes and generate the QR code
 */
const updateFileName = async () => {
  if (fileData.document === "Otro") {
    fileData.useComments = true;
  }
  if (fileData.useComments) {
    data.value = `${fileData.category}/${fileData.name}/${fileData.folio}/${
      fileData.document
    }/${fileData.comments}/${getDate()}`;
  } else {
    data.value = `${fileData.category}/${fileData.name}/${fileData.folio}/${
      fileData.document
    }/${getDate()}`;
  }

  try {
    await generate();
  } catch (err) {
    console.error(err);
  }
};

/**
 * Checks if any input is empty, checks if the client exists (if not, creates a new one), generates the QR code and saves the data in the database
 */
const saveHistoric = async () => {
  const missingFields =
    !fileData.name ||
    !fileData.folio ||
    !fileData.category ||
    !fileData.document ||
    !image.value;

  const missingComments = !fileData.comments && fileData.useComments;
  // Checks if any input is empty
  if (missingFields || missingComments) {
    toast.error("Faltan campos por llenar");
    return;
  }
  //Aux data to generate the QR
  const data = {
    client: $generalStore.clientList.find((item) => item.name === fileData.name)
      ? $generalStore.clientList.find((item) => item.name === fileData.name).id
      : null,
    folio: fileData.folio,
    category: $tablesStore.category.find(
      (item) => item.name === fileData.category
    ).id,
    document: $tablesStore.documentList.find(
      (item) => item.type === fileData.document
    ).id,
    user: $userStore.id,
    comments: fileData.comments,
    qr: image.value,
  };

  // If client doesn't exists, create a new one and update the clientData object with the new ID
  if (!data.client) {
    const parentFolderId = $tablesStore.category.find(
      (item) => item.name === fileData.category
    ).driveId;
    data.client = await $generalStore.createClient(
      fileData.name,
      parentFolderId
    );
    await updateClientData();
    fileData.name = $generalStore.clientList.find(
      (item) => item.id === data.client
    ).name;
    console.log(
      fileData.name
    );
  }

  // Generate the new QR code, save the data in the database and print the QR
  try {
    await generate();
    const res = await $tablesStore.saveHistoric(data);
    if (res.status === 201) {
      toast.success("Guardado correctamente");
      await print(true);
    } else {
      toast.error("Error al guardar");
    }
  } catch (e) {
    // toast.error(`Error al guardar: ${e}`);
    console.log(e);
  }
};
/**
 * Reset the form
 */
const resetForm = () => {
  fileData.name = "";
  fileData.folio = "";
  fileData.category = "";
  fileData.document = "";
  fileData.comments = "";
  image.value = defaultQr;
};

/**
 * Checks if the form data is valid and generates the QR code
 */
const generate = async () => {
  if (!data.value) {
    image.value = defaultQr;
    return;
  }
  try {
    const client = $generalStore.clientList.find(
      (item) => item.name === fileData.name
    );
    const fileDataToQr = {
      category: $tablesStore.category.find(
        (item) => item.name === fileData.category
      )
        ? $tablesStore.category.find((item) => item.name === fileData.category)
            .id
        : null,
      name: client ? client.id : fileData.name,
      folio: fileData.folio,
      document: fileData.document
        ? $tablesStore.documentList.find(
            (item) => item.type === fileData.document
          ).id
        : fileData.document,
      comments: fileData.useComments ? fileData.comments : "",
      useComments: fileData.useComments,
      date: getDate(),
    };
    console.log(fileDataToQr.name);
    const dataToQR = JSON.stringify(fileDataToQr);
    const qrcode = await QRCode.toDataURL(dataToQR);
    image.value = qrcode;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Download the QR code as a PDF
 */
const download = async () => {
  const imagen = document.getElementById("qr-img");
  const img = new Image();
  img.src = imagen.src;
  const pdf = new jsPDF();
  const pdfAncho = 100;
  const pdfAlto = (pdfAncho * imagen.naturalHeight) / imagen.naturalWidth;
  pdf.text("Nombre: " + fileData.name, 60, 30);
  pdf.addImage(imagen, "JPEG", 55, 40, pdfAncho, pdfAlto);
  pdf.text("Folio: " + fileData.folio, 60, 190);
  pdf.text("Tipo de documento: " + fileData.document, 60, 200);
  pdf.text("Comentarios: " + fileData.comments, 60, 210);
  pdf.text("Fecha: " + getDate(), 60, 220);

  pdf.save(
    `QR-${fileData.document}-${fileData.name}-${fileData.folio}-${getDate()}`
  );
};

/**
 * Print the QR code
 * @param {boolean} save If true, reset the form after printing
 */
const print = async (save = false) => {
  const imagen = document.getElementById("qr-img");
  const img = new Image();
  img.src = imagen.src;

  img.onload = function () {
    const tab = window.open("", "_blank");
    console.log(fileData.name);
    tab.document.write(`
    <html>
      <head><title>QR</title></head>
      <body>
          <h1>${fileData.name}</h1>
          <img src="${img.src}" alt="">
          <p>${fileData.document} - ${fileData.category} - ${
      fileData.folio
    } - ${fileData.comments} - ${getDate()}</p>
      </body>

      <style>
          body{
              text-align: center;
          }
          img{
              width: 400px;
              height: 400px;
          }
          p{
              font-size: 20px;
          }
      </style>
    </html>`);
    tab.document.close();

    // Wait for the image to load completely in the popup window before printing
    tab.onload = function () {
      tab.print();
      tab.close();
      if (save) {
        resetForm();
      }
    };
  };
};

/**
 * Get the current date in the format dd-mm-yy
 * @returns {string} The current date in the format dd-mm-yy
 */
const getDate = () => {
  const timestamp = Date.now();
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);

  return `${day}-${month}-${year}`;
};
</script>

<template class="flex">
  <MainLayout page-title="Digitalización de documentos">
    <div class="bg-transparent flex w-full pl-4 pt-4 pr-8 space-x-4">
      <NuxtLink to="/qrgen/documents">
        <div
          class="bg-[#D1D5DB] drop-shadow-md hover:drop-shadow-xl text-gray-700 text-sm font-bold py-2 px-4 rounded-2xl hover:bg-teal-500 hover:text-white transition duration-300"
        >
          Documentos
        </div>
      </NuxtLink>
      <NuxtLink to="/qrgen/historic">
        <div
          class="bg-[#D1D5DB] drop-shadow-md hover:drop-shadow-xl text-gray-700 text-sm font-bold py-2 px-4 rounded-2xl hover:bg-teal-500 hover:text-white transition duration-300"
        >
          Histórico
        </div>
      </NuxtLink>
    </div>
    <div class="bg-transparent flex justify-evenly items-center h-full">
      <form
        @submit.prevent="saveHistoric()"
        class="bg-white drop-shadow-2xl rounded-full w-96"
      >
        <div class="w-full mx-auto bg-white p-8 rounded-t-[30px]">
          <label
            for="category"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Categoría</label
          >
          <select
            @change="updateFileName()"
            required
            v-model="fileData.category"
            name="category"
            id="category"
            class="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
          >
            <option v-for="item in $tablesStore.category" :value="item.name">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="w-full mx-auto bg-white pl-8 pr-8 pb-8 rounded-b-[30px]">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
              >Nombre de cliente</label
            >
            <input
              @input="updateFileName()"
              v-model="fileData.name"
              autocomplete="off"
              list="nameList"
              type="text"
              name="name"
              id="name"
              class="indent-2 w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            />
            <datalist id="nameList">
              <option
                v-if="fileData.category === 'PYME'"
                v-for="item in clientData.pyme"
                :value="item.name"
                :key="item.id"
              ></option>
              <option
                v-if="fileData.category === 'FLORESER'"
                v-for="item in clientData.floreser"
                :value="item.name"
                :key="item.id"
              ></option>
              <option
                v-if="fileData.category === 'CARTAS DE BURO'"
                v-for="item in clientData.buro"
                :value="item.name"
                :key="item.id"
              ></option>
              <option
                v-if="fileData.category === 'MUTUOS'"
                v-for="item in clientData.mutuos"
                :value="item.name"
                :key="item.id"
              ></option>
              <option
                v-if="fileData.category === 'LABORAL'"
                v-for="item in clientData.laboral"
                :value="item.name"
                :key="item.id"
              ></option>
              <option
                v-if="fileData.category === 'ALIANZAS Y PROVEEDORES'"
                v-for="item in clientData.alianzas"
                :value="item.name"
                :key="item.id"
              ></option>
            </datalist>
          </div>
          <div class="mb-4">
            <label
              for="folio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Folio/Nombre</label
            >
            <input
              v-model="fileData.folio"
              @input="updateFileName()"
              type="text"
              name="folio"
              id="folio"
              class="w-full indent-2 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            />
          </div>
          <div class="mb-4">
            <label for="type" class="block text-gray-700 text-sm font-bold mb-2"
              >Tipo de documento</label
            >
            <select
              @change="updateFileName()"
              required
              v-model="fileData.document"
              name="type"
              id="type"
              class="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            >
              <option
                v-if="fileData.category === 'PYME'"
                v-for="item in documentList.pyme"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="fileData.category === 'FLORESER'"
                v-for="item in documentList.floreser"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="fileData.category === 'CARTAS DE BURO'"
                v-for="item in documentList.buro"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="fileData.category === 'MUTUOS'"
                v-for="item in documentList.mutuos"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="fileData.category === 'LABORAL'"
                v-for="item in documentList.laboral"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="fileData.category === 'ALIANZAS Y PROVEEDORES'"
                v-for="item in documentList.alianzas"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <div class="flex justify-between">
              <label
                for="comments"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Comentarios</label
              >
              <input
                @change="updateFileName()"
                v-if="fileData.document != 'Otro'"
                type="checkbox"
                name="useComments"
                id="useComments"
                v-model="fileData.useComments"
                class="rounded-full border-gray-200"
              />
              <input
                @change="updateFileName()"
                v-else
                checked
                disabled
                type="checkbox"
                name="useComments"
                id="useComments"
                v-model="fileData.useComments"
                class="rounded-full border-gray-300"
              />
            </div>

            <input
              @input="updateFileName()"
              v-model="fileData.comments"
              v-if="fileData.document != 'Otro'"
              type="text"
              name="comments"
              id="comments"
              class="w-full indent-2 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            />
            <input
              @input="updateFileName()"
              v-model="fileData.comments"
              v-else
              required
              type="text"
              name="comments"
              id="comments"
              class="w-full px-3 indent-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            />
          </div>
          <button
            class="w-full drop-shadow-md hover:drop-shadow-xl bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
          >
            Guardar
          </button>
        </div>
      </form>

      <div class="flex flex-col space-y-6 items-center">
        <div
          id="qrimage"
          class="bg-white drop-shadow-2xl rounded-[30px] w-[400px] flex flex-col items-center"
        >
          <div class="w-full flex justify-center items-center pt-6">
            <h1 class="text-2xl font-bold">Vista previa</h1>
          </div>
          <div class="w-[300px] flex flex-col items-center">
            <img id="qr-img" class="w-3/4" :src="image" />
            <!-- <v-img>
                <img :src="image"  />
            </v-img> -->
            <div class="flex items-center content-center pb-5">
              <button class="" @click="download()">
                <Icon
                  name="material-symbols:download-for-offline-rounded"
                  size="30"
                  class="text-teal-500 hover:text-[#3f51b5] transition duration-300 drop-shadow-md hover:drop-shadow-xl"
                />
              </button>
              <button class="" @click="print(false)">
                <Icon
                  class="text-teal-500 hover:text-[#3f51b5] transition duration-300 drop-shadow-md hover:drop-shadow-xl"
                  name="material-symbols:print-rounded"
                  size="30"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
