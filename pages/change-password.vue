<script setup>
import { Toaster, toast } from "vue-sonner";
const showPass = ref(false);
const { $userStore } = useNuxtApp();
const password = ref("");
const password2 = ref("");
definePageMeta({
  middleware: ["auth"],
});

const changePassword = () => {
  const email = $userStore.email;

  const data = $userStore.changePassword(email, password.value, password2.value);
  if (!data) {
    toast.error("Error al cambiar la contraseña");
  } else {
    toast.success("Contraseña cambiada con éxito");
    $userStore.logout();
  }
}; 

const togglePass = () => {
  showPass.value = !showPass.value;
  var x = document.getElementById("password2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};
</script>

<template>
  <Toaster />
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
          <span class="text-xl font-semibold">Cambia tu contraseña</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <input
            required
            id="password"
            type="password"
            v-model="password"
            placeholder="Contraseña actual"
            class="border border-gray-300 text-center rounded-full focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
          />
          
          <input
            required
            id="password2"
            type="password"
            v-model="password2"
            placeholder="Nueva contraseña"
            class="border border-gray-300 text-center rounded-full focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
          />
          <button @click="togglePass()">
            <Icon
              name="ph:eye-closed-thin"
              class=""
              v-if="!showPass"
              size="22"
              color="#888888"
            />
            <Icon name="ph:eye-light" v-else size="22" color="#888888" />
          </button>
        </div>
        <div class="flex flex-col items-center justify-center">
          <button
            @click="changePassword()"
            class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
