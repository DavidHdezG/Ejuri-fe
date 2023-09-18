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
/* HTML: <div class="loader"></div> */
.loader {
  width: 17px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  display: grid;
  animation: l22-0 2s infinite linear;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  margin: 15%;
  border-radius: 50%;
  background: inherit;
  transform: rotate(0deg) translate(150%);
  animation: l22 1s infinite;
}
.loader:after {
  animation-delay: -.5s
}
@keyframes l22-0 {
  100% {transform: rotate(1turn)}
}
@keyframes l22 {
  100% {transform: rotate(1turn) translate(150%)}
}
</style>
