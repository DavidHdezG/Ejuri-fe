<script setup>
import {Toaster, toast} from 'vue-sonner'
const route = useRoute();
const router = useRouter()
const {$userStore} = useNuxtApp()
const token = ref(route.params.id)

const showPass = ref(false)
const password = ref('')
const password2 = ref('')

/**
 * Toggle the password visibility
 */
const togglePass = () => {
    showPass.value = !showPass.value
    var x = document.getElementById('password')
    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

/**
 * Change the user password with a token
 */
const changePassword = () => {
    if(password.value != password2.value){
        toast.error('Las contraseñas no coinciden')
        return
    }

    toast.promise($userStore.changePasswordWithToken(token.value, password.value), {
        loading: 'Cambiando contraseña...',
        success: (data)=>{
            router.push('/login')
            return 'Contraseña cambiada con éxito'
        },
        error: 'Error al cambiar la contraseña'
    })
}
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
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex flex-col items-center justify-center">
          <span class="text-xl font-semibold">Restablece tu contraseña</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <input
            required
            id="password"
            type="password"
            v-model="password"
            placeholder="Nueva contraseña"
            class="border border-gray-300 text-center rounded-full focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
          />
          
          <input
            required
            id="password2"
            type="password"
            v-model="password2"
            placeholder="Confirma tu contraseña"
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
            Restablecer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
