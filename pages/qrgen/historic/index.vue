<script setup>

import MainLayout from "@/layouts/MainLayout.vue";


definePageMeta({
  middleware: [
    'auth'
  ],
});
</script>

<template>
  <MainLayout page-title="Lista de documentos">
    <Table/>
 <!--    <div class="flex flex-col items-center justify-center p-7">

    </div> -->
  </MainLayout>
</template>

