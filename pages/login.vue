<script setup>
import { toast, Toaster } from "vue-sonner";
const { $userStore, $generalStore } = useNuxtApp();

const user = ref("");
const password = ref("");
/**
 * Login the user and redirect to the home page if the login is successful
 */
const login = async () => {
  try {
    toast.promise(
      $userStore.login(user.value, password.value),
      {
        pending: "Iniciando sesión...",
        success:() => {
          navigateTo("/");
          return "Sesión iniciada";
        },
        error: "Error al iniciar sesión",
      }
    );

  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <Toaster richColors/>
  <div class="h-screen h-screen flex items-center justify-center" v-on:keyup.enter="login()">
    <div
      clas
      s="flex flex-col mx-auto items-center justify-center space-y-4 shadow-2xl w-80 h-[450px] rounded-[30px]"
    >

      <div class="flex flex-col items-center justify-center">
        <nuxt-img src="logo.png" width="100px" class="mx-auto" />
        <span class="text-xl font-bold">Ejuri</span>
      </div>
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex flex-col items-center justify-center">
          <span class="text-xl font-semibold">Iniciar sesión</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <input
            v-model="user"
            required
            type="text"
            placeholder="Usuario"
            class="border border-gray-300 text-center rounded-full focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
          />
          <input
            v-model="password"
            required
            type="password"
            placeholder="Contraseña"
            class="border border-gray-300 text-center rounded-full focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
          />
        </div>
        <a href="/resetPassword" class="text-sm text-gray-500 hover:text-gray-700 transition duration-300">¿Olvidaste tu contraseña?</a>
        <div class="flex flex-col items-center justify-center">
          
          <button
            @click="login()"
            class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
