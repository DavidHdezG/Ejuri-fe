<script setup>
import TableLayout from "@/layouts/TableLayout.vue";
const { $generalStore } = useNuxtApp()
$generalStore.start();
$generalStore.stop();
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <TableLayout page-title="Lista de documentos">
    <div class="flex flex-col items-center justify-center p-7">
      <!-- <h1 class="text-4xl font-bold text-gray-700">Lista de documentos</h1> -->
    </div>
  </TableLayout>
</template>
