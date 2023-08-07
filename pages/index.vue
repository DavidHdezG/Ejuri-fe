<template>
  <MainLayout page-title="Inicio" >
    <h1>xd</h1>
    <v-btn>
      hola
    </v-btn>
  </MainLayout>
</template>
<script setup>
import MainLayout from "../layouts/MainLayout.vue";
const { $generalStore } = useNuxtApp();

$generalStore.isLoading = false;
definePageMeta({
  middleware: [
    'auth'
  ],
});
</script>
