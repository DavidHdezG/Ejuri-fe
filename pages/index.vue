<template>
  <MainLayout page-title="Inicio">
<!--     <Toaster/> -->
    <v-btn @click="xd()"> Test 403 - Forbidden </v-btn>
  </MainLayout>
</template>
<script setup>
import { toast} from 'vue-sonner'
import MainLayout from "../layouts/MainLayout.vue";
const { $generalStore, $userStore } = useNuxtApp();
const xd = async () => {
  /* toast.error('403 - Forbidden')  */ 
  const data=await $generalStore.getClientData();
  console.log(data);
  /* const { data } = await $userStore.getAllUsers();
  console.log(data); */
};
$generalStore.isLoading = false;
definePageMeta({
  middleware: ["auth"],
});
</script>
