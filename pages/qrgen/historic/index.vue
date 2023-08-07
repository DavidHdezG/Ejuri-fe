<script setup>
import TableLayout from "@/layouts/TableLayout.vue";
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
  <TableLayout page-title="Lista de documentos escaneados">
    
  </TableLayout>
</template>

