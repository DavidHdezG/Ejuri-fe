<template>
  <MainLayout page-title="Inicio">

    <v-btn @click="xd()"> Test 403 - Forbidden </v-btn>
  </MainLayout>
</template>
<script setup>
import MainLayout from "../layouts/MainLayout.vue";
const { $generalStore, $userStore } = useNuxtApp();
const xd = async () => {
  const { data } = await $userStore.getAllUsers();
  console.log(data);
};
$generalStore.isLoading = false;
definePageMeta({
  middleware: ["auth"],
});
</script>
