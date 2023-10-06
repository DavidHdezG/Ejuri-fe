<script setup>
import { storeToRefs } from "pinia";
import { toast } from "vue-sonner"
const { $adminStore } = useNuxtApp();
const { showOverlay, editingUser, userIdToEdit } = storeToRefs($adminStore);
const roles = ref(["Jurídico", "Administrador"]);
const name = ref("");
const email = ref("");
const role = ref("");
onMounted(async () => {
    roles.value=await $adminStore.getRolesList();
});

watch(
  () => showOverlay.value,
  async () => {
    if (showOverlay.value) {
      if (editingUser.value) {
        const data = await $adminStore.getUser(userIdToEdit.value);
        name.value = data.name;
      } else {
        name.value = "";
      }
    }else{
        name.value="";
        email.value="";
        role.value="";
    }
  }
);

const cancel = () => {
  showOverlay.value = false;
};
const createUser = async () => {
  try {
    const pattern = /@blucapital\.mx$/;
    if(pattern.test(email.value)===false){
        toast.error("El correo debe ser de dominio @blucapital.mx");/*  */
      return;
    }
    if(role.value===""){
        role.value="Jurídico";
    }
    toast.message("Creando usuario...");
    const res = await $adminStore.createUser(name.value, email.value, role.value);
    if (res) {
      toast.success("Usuario creado correctamente");
    }
    showOverlay.value = false;
    await $adminStore.getUserList();
  } catch (e) {
    console.log(e);
    toast.error("Error al crear el usuario");
  }
};

const editUser = async () => {
  try {
    if(role.value===""){
        role.value="Jurídico";
    }
    const res = await $adminStore.editUser(userIdToEdit.value, name.value, role.value);
    
    if(res){
        toast.success("Usuario editado correctamente");
    }
    showOverlay.value = false;

    await $adminStore.getUserList();
  } catch (e) {

    console.log(e);
    toast.error("Error al editar el usuario");
  }
};
</script>

<template>
  <div class="text-center absolute">
    <v-dialog rounded v-model="showOverlay" width="auto">
      <v-card>
        <div class="flex flex-col items-center space-y-4 py-6 px-4">
          <div class="text-lg">
            {{ editingUser ? "Editar usuario" : "Crear usuario" }}
          </div>
          <div id="form">
            <div class="flex flex-col items-center justify-center space-y-4">
              <div class="flex flex-col items-center justify-center">
                <div class="pl-4 w-full">
                  <label for="name">Nombre:</label>
                  <input
                    id="name"
                    v-model="name"
                    required
                    type="text"
                    class="border border-gray-300 rounded-lg focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  />
                </div>
                <div class="pl-4 w-full flex align-center" v-if="!editingUser">
                  <label for="email">Correo:</label>
                  <input
                    id="email"
                    v-model="email"
                    required
                    type="email"
                    pattern=".+@blucapital\.mx"
                    class="w-full border border-gray-300 rounded-lg focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                  />
                  <!-- pattern=".+@blucapital\.mx" -->
                </div>
                <div class="pl-4 w-full flex align-center">
                  <label for="role">Rol:</label>
                  <select
                    name="role"
                    id="role"
                    v-model="role"
                    class="border border-gray-300 rounded-lg focus:outline-none focus:border-[#A3DEE0] p-2 m-2 w-full"
                  >
                    <option v-for="rol in roles" :key="rol.id" :value="rol.id">
                      {{ rol.name }}
                    </option>
                  </select>
                </div>
                <div class="flex items-center justify-center pt-4 space-x-4">
                  <button
                    @click="cancel()"
                    class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                  >
                    Cancelar
                  </button>
                  <button
                    @click="editingUser ? editUser() : createUser()"
                    class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
