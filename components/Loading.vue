<template>
  <div v-if="$generalStore.isLoading" >
    <div class="loading-page">Cargando...</div>
  </div>
</template>

<script setup>
 const { $generalStore } = useNuxtApp()
 
</script>

<style scoped>
.loading-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 10%;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 1;
}

</style>
