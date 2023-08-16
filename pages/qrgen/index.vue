<script setup>
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
const defaultQr = "/qrcode.png";
import MainLayout from "../../layouts/MainLayout.vue";
const { $generalStore } = useNuxtApp();
const { $userStore } = useNuxtApp();
definePageMeta({
  middleware: ["auth"],
});
let alertType = ref(0);
let alertMsg = ref("");

let category = ref("");
let useComments = ref("");
let other = ref("");
try {
  $generalStore.start();
  await $generalStore.getDocumentList();
  await $generalStore.getCategoryData();
} catch (e) {
  console.log(e);
}
let name = ref("");
let folio = ref("");
let comments = ref("");
let pyme = ref(
  $generalStore.documentList
    .filter((item) => item.category.name === "PYME")
    .sort((a, b) => a.type.localeCompare(b.type))
);
let floreser = ref(
  $generalStore.documentList
    .filter((item) => item.category.name === "FLORESER")
    .sort((a, b) => a.type.localeCompare(b.type))
);
let mutuos = ref(
  $generalStore.documentList
    .filter((item) => item.category.name === "MUTUOS")
    .sort((a, b) => a.type.localeCompare(b.type))
);
let laboral = ref(
  $generalStore.documentList
    .filter((item) => item.category.name === "LABORAL")
    .sort((a, b) => a.type.localeCompare(b.type))
);
let buro = ref(
  $generalStore.documentList
    .filter((item) => item.category.name === "BURO")
    .sort((a, b) => a.type.localeCompare(b.type))
);
let alianzas = ref(
  $generalStore.documentList
    .filter((item) => item.category.name === "ALIANZAS Y PROVEEDORES")
    .sort((a, b) => a.type.localeCompare(b.type))
);

const data = ref("");
const image = ref(defaultQr);
$generalStore.stop();
const updateFileName = async () => {
  if (useComments.value) {
    data.value = `${category.value}/${name.value}/${folio.value}/${
      other.value
    }/${comments.value}/${getDate()}`;
  } else {
    data.value = `${category.value}/${name.value}/${folio.value}/${
      other.value
    }/${getDate()}`;
  }
  try {
    const qrcode = await QRCode.toDataURL(data.value);
    image.value = /* 'data:image/jpeg;base64, '+ */ qrcode;
  } catch (err) {
    console.error(err);
  }
};

const saveHistoric = async () => {
  await generate();
  const missingFields =
    !name.value ||
    !folio.value ||
    !category.value ||
    !other.value ||
    !image.value;

  const missingComments = !comments.value && useComments.value;

  if (missingFields || missingComments) {
    alertType.value = 3;
    alertMsg.value = "Faltan campos por llenar";
    return;
  }
  const data = {
    client: name.value, // TEMPORAL
    folio: folio.value,
    category: $generalStore.category.find(
      (item) => item.name === category.value
    ).id,
    document: $generalStore.documentList.find(
      (item) => item.type === other.value
    ).id,
    user: $userStore.id,
    comments: comments.value,
    qr: image.value,
  };
  try {
    const res = await $generalStore.saveHistoric(data);
    if (res.status === 201) {
      alertType.value = 1;
      alertMsg.value = "Guardado correctamente";
      name.value = "";
      folio.value = "";
      category.value = "";
      other.value = "";
      comments.value = "";
      image.value = defaultQr;
      setTimeout(() => {
        alertType.value = 0;
        alertMsg.value = "";
      }, 3000);
    } else {
      alertType.value = 3;
      alertMsg.value = "Error al guardar";
      setTimeout(() => {
        alertType.value = 0;
        alertMsg.value = "";
      }, 3000);
    }
  } catch (e) {
    console.log(e);
    alertType.value = 3;
    alertMsg.value = "Error al guardar";
    setTimeout(() => {
      alertType.value = 0;
      alertMsg.value = "";
    }, 3000);
  }
};

const generate = async () => {
  if (!data.value) {
    image.value = defaultQr;
    return;
  }
  try {
    const qrcode = await QRCode.toDataURL(data.value);
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
  pdf.text("Nombre: " + name.value, 60, 30);
  pdf.addImage(imagen, "JPEG", 55, 40, pdfAncho, pdfAlto);
  pdf.text("Folio: " + folio.value, 60, 190);
  pdf.text("Tipo de documento: " + other.value, 60, 200);
  pdf.text("Comentarios: " + comments.value, 60, 210);
  pdf.text("Fecha: " + getDate(), 60, 220);

  pdf.save(`QR-${other.value}-${name.value}-${folio.value}-${getDate()}`);
};

const print = async () => {
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
          <h1>${name.value}</h1>
          <img src="${img.src}" alt="">
          <p>${other.value} - ${category.value} - ${
      folio.value
    } - ${getDate()}</p>
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
    };
  };
};

const getDate = () => {
  const timestamp = Date.now();
  const fecha = new Date(timestamp);

  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Se agrega +1 al mes porque los meses se representan de 0 a 11
  const anio = fecha.getFullYear().toString().slice(-2);

  return `${dia}-${mes}-${anio}`;
};
</script>

<template class="flex">
  <MainLayout page-title="Digitalización de documentos">
    <div class="bg-transparent flex w-full pl-4 pt-4 pr-8 space-x-4">
      <a
        href="qrgen/documents"
        class="bg-[#D1D5DB] drop-shadow-md hover:drop-shadow-xl text-gray-700 text-sm font-bold py-2 px-4 rounded-2xl hover:bg-teal-500 hover:text-white transition duration-300"
        >Documentos</a
      >
      <a
        href="qrgen/historic"
        class="bg-[#D1D5DB] drop-shadow-md hover:drop-shadow-xl text-gray-700 text-sm font-bold py-2 px-4 rounded-2xl hover:bg-teal-500 hover:text-white transition duration-300"
        >Histórico</a
      >
    </div>
    <div class="bg-transparent flex justify-evenly items-center h-full">
      <form @submit.prevent="saveHistoric()" class="bg-white drop-shadow-2xl rounded-full w-96">
        <div class="w-full mx-auto bg-white p-8 rounded-t-[30px]">
          <label
            for="category"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Categoría</label
          >
          <select
            @change="updateFileName()"
            required
            v-model="category"
            name="category"
            id="category"
            class="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
          >
            <option v-for="item in $generalStore.category" :value="item.name">
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
              v-model="name"
              autocomplete="off"
              list="nameList"
              type="text"
              name="name"
              id="name"
              class="indent-2 w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            />
            <datalist id="nameList">
              <!-- <option v-for="item in $generalStore.names" :value="item">
                {{ item }}
              </option> -->
              <option value="Ejuri"></option>
              <option value="Blu"></option>
              <option value="Progra"></option>
            </datalist>
          </div>
          <div class="mb-4">
            <label
              for="folio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Folio</label
            >
            <input
              v-model="folio"
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
              v-model="other"
              name="type"
              id="type"
              class="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            >
              <option
                v-if="category === 'PYME'"
                v-for="item in pyme"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="category === 'FLORESER'"
                v-for="item in floreser"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="category === 'BURO'"
                v-for="item in buro"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="category === 'MUTUOS'"
                v-for="item in mutuos"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="category === 'LABORAL'"
                v-for="item in laboral"
                :value="item.type"
                :key="item.type"
              >
                {{ item.type }}
              </option>
              <option
                v-if="category === 'ALIANZAS Y PROVEEDORES'"
                v-for="item in alianzas"
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
                v-if="other != 'Otro (Escribir en comentarios)'"
                type="checkbox"
                name="useComments"
                id="useComments"
                v-model="useComments"
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
                v-model="useComments"
                class="rounded-full border-gray-300"
              />
            </div>

            <input
              @input="updateFileName()"
              v-model="comments"
              v-if="other != 'Otro (Escribir en comentarios)'"
              type="text"
              name="comments"
              id="comments"
              class="w-full indent-2 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]"
            />
            <input
              @input="updateFileName()"
              v-model="comments"
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
        <div id="alerts">
          <v-alert
            v-if="alertType == 3"
            :text="alertMsg"
            type="error"
            variant="tonal"
            class="absolute w-[300px]"
          ></v-alert>
          <v-alert
            v-if="alertType == 2"
            :text="alertMsg"
            type="warning"
            variant="tonal"
            class="absolute w-[300px]"
          ></v-alert>
          <v-alert
            v-if="alertType == 1"
            :text="alertMsg"
            type="success"
            variant="tonal"
            class="absolute w-[300px]"
          ></v-alert>
        </div>
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
              <button class="" @click="print()">
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
