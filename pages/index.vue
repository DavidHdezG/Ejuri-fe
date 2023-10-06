<template>
  <MainLayout page-title="Inicio">
   
  </MainLayout>
</template>
<script setup>
import MainLayout from "../layouts/MainLayout.vue";
const { $generalStore } = useNuxtApp();


$generalStore.isLoading = false;
definePageMeta({
  middleware: ["auth"],
});
</script>
