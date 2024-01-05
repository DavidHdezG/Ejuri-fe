<template>
  <MainLayout page-title="Inicio">
    <div class="w-full h-full flex content-center justify-center">
      <div class="flex flex-wrap w-[800px] h-full align-center justify-evenly">
        <v-card
          v-for="item in menuList"
          max-height="200"
          max-width="200"
          class="mx-auto"
        >
          <v-layout justify-center>
            <NuxtLink :to="item.route">
              <v-card link class="text-center">
                <v-icon size="100" class="mx-auto">{{ item.icon }}</v-icon>
                <v-card-title class="">{{ item.title }}</v-card-title>
              </v-card>
            </NuxtLink>
          </v-layout>
        </v-card>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "../layouts/MainLayout.vue";
const { $generalStore, $userStore } = useNuxtApp();

const menuList = ref([])

if($userStore.role === 'Administrador'){
  menuList.value = [
    {
      title: "Administración",
      icon: "mdi-account-group",
      route: "/admin/users",
    },
    {
      title: "Digitalización",
      icon: "mdi-qrcode",
      route: "/qrgen",
    },
    {
      title: "Anexos PLD",
      icon: "mdi-file-document",
      route: "/annex",
    },
    {
      title: "Tren de Crédito",
      icon: "mdi-cash",
      route: "/credit",
    },
  ]
} else {
  menuList.value = [
    {
      title: "Digitalización",
      icon: "mdi-qrcode",
      route: "/qrgen",
    },
    {
      title: "Anexos PLD",
      icon: "mdi-file-document",
      route: "/annex",
    },
    {
      title: "Tren de Crédito",
      icon: "mdi-cash",
      route: "/credit",
    },
  ]
}
$generalStore.isLoading = false;
definePageMeta({
  middleware: ["auth"],
});
</script>
