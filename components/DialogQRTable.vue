<script setup>
const { $tablesStore } = useNuxtApp();
import { storeToRefs } from "pinia";
import QRScanner from "qr-scanner";
const { qrToView, overlayQr } = storeToRefs($tablesStore);
const qr = ref("");

const printQr = async () => {
  const imagen = qr.value;
  const text = await QRScanner.scanImage(imagen);

  // Crea un nuevo objeto de imagen para asegurar que la imagen se cargue completamente
  const img = new Image();
  img.src = imagen;
  img.onload = function () {
    const ventana = window.open("", "_blank");
    ventana.document.write(`
    <html>
      <head><title>QR</title></head>
      <body>
          <h1>${text.split("/")[2]}</h1>
          <img src="${img.src}" alt="">
          <p>${text}</p>
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
watch(
  () => qrToView.value,
  () => {
    qr.value = qrToView.value;
  }
);
</script>

<template>
  <div class="text-center absolute">
    <v-dialog rounded v-model="overlayQr" width="auto">
      <v-card>
        <img :src="qr" alt="" />
        <button @click="printQr()" class="pb-2">
          <Icon
            class="text-teal-500 hover:text-[#3f51b5] transition duration-300 drop-shadow-md hover:drop-shadow-xl"
            name="material-symbols:print-rounded"
            size="30"
          />
        </button>
      </v-card>
    </v-dialog>
  </div>
</template>
