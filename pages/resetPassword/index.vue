<script setup>
import {Toaster,  toast } from 'vue-sonner';

    const {$userStore} = useNuxtApp();
    const emailSended = ref(false);
    const email = ref("");

    /**
     * Send an email to reset the password
     */
    const resetPassword = () => {
        toast.promise($userStore.sendEmailToResetPassword(email.value), {
            loading: "Enviando correo...",
            success: (data) => {
                emailSended.value = true;
                return "Correo enviado con éxito";
            },
            error: "Error al enviar correo",
        });

        
    };
</script>

<template>
    <Toaster richColors />
  <div class="h-screen h-screen flex items-center justify-center">
    <div
      class="flex flex-col mx-auto items-center justify-center space-y-4 shadow-2xl w-80 h-[450px] rounded-[30px]"
    >
      <div class="flex flex-col items-center justify-center">
        <nuxt-img src="logo.png" width="100px" class="mx-auto" />
        <span class="text-xl font-bold">Ejuri</span>
      </div>
      <div class="flex flex-col items-center justify-center space-y-4" v-if="emailSended">
        <div class="flex flex-col items-center justify-center">
          <span class="text-xl font-semibold">Correo enviado</span>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-4" v-if="!emailSended">
        <div class="flex flex-col items-center justify-center">
          <span class="text-xl font-semibold">Restablece tu contraseña</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <input
            required
            id="email"
            type="email"
            v-model="email"
            placeholder="Correo electrónico"
            class="border border-gray-300 text-center rounded-full focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
          />
        
        </div>
        <div class="flex flex-col items-center justify-center">
          <button
            @click="resetPassword()"
            class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
          >
            Enviar correo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
