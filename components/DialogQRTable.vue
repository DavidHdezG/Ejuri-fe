<script setup>
const { $generalStore } = useNuxtApp();
let qr = ref("");
watch(
  () => $generalStore.qrToView,
  () => {
    qr.value =$generalStore.qrToView;
  }
);
</script>

<template>
  <div class="text-center">
    <v-dialog rounded v-model="$generalStore.overlayQr" width="auto">
      <v-card>
        <img :src="qr" alt="">
      </v-card>
    </v-dialog>
  </div>
</template>
