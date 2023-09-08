<script setup>
import { Toaster, toast } from "vue-sonner";
/* Al oprimir guardar se manda a pantalla de imprimir pero no se reinicia el forms */

import { jsPDF } from "jspdf";
import QRCode from "qrcode";
const defaultQr = "/qrcode.png";
import MainLayout from "../../layouts/MainLayout.vue";
const { $generalStore, $tablesStore } = useNuxtApp();
const { $userStore } = useNuxtApp();
definePageMeta({
  middleware: ["auth"],
});

const category = ref("");
const useComments = ref(false);
const otherDocument = ref("");
try {
  $generalStore.start();
  await $tablesStore.getDocumentList();
  await $tablesStore.getCategoryData();
  await $generalStore.getClientData();
} catch (e) {
  console.log(e);
}
const name = ref("");
const folio = ref("");
const comments = ref("");
const clientData = ref({
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
  buro: $generalStore.clientList.filter(
    (item) => item.category.name === "BURO"
  ),
  alianzas: $generalStore.clientList.filter(
    (item) => item.category === "ALIANZAS Y PROVEEDORES"
  ),
});

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
    .filter((item) => item.category.name === "BURO")
    .sort((a, b) => a.type.localeCompare(b.type)),
  alianzas: $tablesStore.documentList
    .filter((item) => item.category.name === "ALIANZAS Y PROVEEDORES")
    .sort((a, b) => a.type.localeCompare(b.type)),
});

const data = ref("");
const image = ref(defaultQr);

// TODO: Cambiar el texto del qr por el objeto json:
const fileData = reactive({
  category: null,
  name: null,
  folio: null,
  document: null,
  comments: "",
  useComments: false,
});
$generalStore.stop();

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

const saveHistoric = async () => {
  await generate();
  const missingFields =
    !fileData.name ||
    !fileData.folio ||
    !fileData.category ||
    !fileData.document ||
    !image.value;

  const missingComments = !fileData.comments && fileData.useComments;

  if (missingFields || missingComments) {
    toast.error("Faltan campos por llenar");
    return;
  }
  // TODO: Hacer que si el cliente no existe se cree uno nuevo
  const data = {
    client: /* fileData.name */ $generalStore.clientList.find(
      (item) => item.name === fileData.name
    ).id,
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
  try {
    const res = await $tablesStore.saveHistoric(data);
    if (res.status === 201) {
      toast.success("Guardado correctamente");
      await print(true);
    } else {
      toast.error("Error al guardar");
    }
  } catch (e) {
    toast.error(`Error al guardar: ${e}`);
  }
};
const resetForm = () => {
  fileData.name = "";
  fileData.folio = "";
  fileData.category = "";
  fileData.document = "";
  fileData.comments = "";
  image.value = defaultQr;
};
const generate = async () => {
  if (!data.value) {
    image.value = defaultQr;
    return;
  }
  try {
    /* const data = {
      client: $generalStore.clientList.find(
        (item) => item.name === fileData.name
      ).id,
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
    }; */

    const fileDataToQr = {
      category: fileData.category ? $tablesStore.category.find(
        (item) => item.name === fileData.category
      ).id: fileData.category,
      name: fileData.name? $generalStore.clientList.find(
        (item) => item.name === fileData.name
      ).id:fileData.name,
      folio: fileData.folio,
      document:fileData.document? $tablesStore.documentList.find(
        (item) => item.type === fileData.document
      ).id:fileData.document,
      comments: fileData.useComments?fileData.comments:"",
      useComments: fileData.useComments,
      date: getDate(),
    };

    const dataToQR = JSON.stringify(fileDataToQr);
    const qrcode = await QRCode.toDataURL(dataToQR);
    image.value = qrcode;
  } catch (err) {
    console.error(err);
  }
};

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

const print = async (save = false) => {
  const imagen = document.getElementById("qr-img");

  // Crea un nuevo objeto de imagen para asegurar que la imagen se cargue completamente
  const img = new Image();
  img.src = imagen.src;

  img.onload = function () {
    const ventana = window.open("", "_blank");
    ventana.document.write(`
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
    ventana.document.close();

    // Espera a que la imagen se cargue completamente en la ventana emergente antes de imprimir
    ventana.onload = function () {
      ventana.print();
      ventana.close();
      if (save) {
        resetForm();
      }
    };
  };
};

const getDate = () => {
  const timestamp = Date.now();
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Se agrega +1 al month porque los meses se representan de 0 a 11
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
              >Nombre</label
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
                v-if="fileData.category === 'BURO'"
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
              >Folio</label
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
                v-if="fileData.category === 'BURO'"
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
                v-if="otherDocument != 'Otro'"
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
