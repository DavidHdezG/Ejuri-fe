<template>
  <MainLayout page-title="Inicio" />
</template>
<script setup>
import MainLayout from "../layouts/MainLayout.vue";


definePageMeta({
  middleware: [
    'auth'
  ],
});
</script>
