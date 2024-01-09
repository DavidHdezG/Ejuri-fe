<script setup>
const route = useRoute();
const itemsCreditTrain = ref([
  {
    title: "Notas de Comité",
    disabled: false,
    to: "/credit",
  },
  { title: "Aprobaciones", disabled: false, to: "/credit/approves" },

  { title: "Resumen", disabled: false, to: "/credit/summary" },
]);

</script>
<template>
  <v-breadcrumbs :items="itemsCreditTrain" class="mx-auto">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
    <template v-slot:title="{ item }">
      <NuxtLink :to="item.to">
        <span :class="$route.path === item.to ? 'border-4 border-transparent border-b-teal-500 hover:border-b-teal-800 transition-all duration-300' : 'hover:border-4 border-transparent border-b-teal-200 transition-all duration-300'">
          {{ item.title }}
        </span>
      </NuxtLink>
    </template>
  </v-breadcrumbs>
</template>
