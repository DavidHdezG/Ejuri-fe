<script setup>
const { $userStore } = useNuxtApp();
const route = useRoute();
const id = ref(route.params.id);
const confirmed = ref(false);

/**
 * Confirm the account
 */
const { data } = await $userStore.confirmAccount(id.value);
/**
 * Check if the account was confirmed to show a different message
 */
onMounted(async () =>{
    try {
        if (data.status!=400) {
            confirmed.value = true;
        }
        console.log(data);
    } catch (e) {
        console.log(e);
    }

});
</script>

<template>
  <div class="h-screen h-screen flex items-center justify-center">
    <div
      class="flex flex-col mx-auto items-center justify-center space-y-4 shadow-2xl w-80 h-[450px] rounded-[30px]"
    >
      <div class="flex flex-col items-center justify-center">
        <nuxt-img src="logo.png" width="100px" class="mx-auto" />
        <span class="text-xl font-bold">Ejuri</span>
      </div>
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex flex-col items-center justify-center">
            <span v-if="confirmed" class="text-xl font-semibold">¡Cuenta confirmada!</span>
            <span v-else class="text-xl font-semibold">Error al confirmar tu cuenta</span>
        </div>
      </div>
    </div>
  </div>
</template>
