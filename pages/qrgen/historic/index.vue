<script setup>

import MainLayout from "@/layouts/MainLayout.vue";
const { $generalStore } = useNuxtApp()
$generalStore.start();
$generalStore.stop();

definePageMeta({
  middleware: [
    'auth'
  ],
});
</script>

<template>
  <MainLayout page-title="Lista de documentos escaneados">
    
  </MainLayout>
</template>

