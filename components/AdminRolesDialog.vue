<script  setup>
import { storeToRefs } from "pinia";
import { toast } from "vue-sonner"
const { $adminStore } = useNuxtApp();
const { showOverlay, editingUser, roleIdToEdit } = storeToRefs($adminStore);
const name = ref("");
const id = ref("");
watch(
  () => showOverlay.value,
  async () => {
    if (showOverlay.value) {
      if (editingUser.value) {
          console.log(roleIdToEdit.value)
        const data = await $adminStore.getRole(roleIdToEdit.value);
        id.value = data.id;
        name.value = data.name;
      } else {
        name.value = "";
      }
    }else{
        name.value="";
    }
  }
);

const cancel = () => {
  showOverlay.value = false;
};

const createRole = async () => {
  try {
    const res = await $adminStore.createRole(id.value,name.value);
    if (res) {
      toast.success("Rol creado correctamente");
    }
    showOverlay.value = false;
    await $adminStore.getRolesList();
  } catch (e) {
    console.log(e);
    toast.error("Error al crear el rol");
  }
};

const editRole = async () => {
  try {

    const res = await $adminStore.editRole(id.value,name.value);
    
    if(res){
        toast.success("Rol editado correctamente");
    }
    showOverlay.value = false;

    await $adminStore.getRolesList();
  } catch (e) {

    console.log(e);
    toast.error("Error al editar el rol");
  }
};
</script>

<template>
    <div class="text-center absolute">
      <v-dialog rounded v-model="showOverlay" width="auto">
        <v-card>
          <div class="flex flex-col items-center space-y-4 py-6 px-4">
            <div class="text-lg">
              {{ editingUser ? "Editar Rol" : "Crear Rol" }}
            </div>
            <div id="form">
              <div class="flex flex-col items-center justify-center space-y-4">
                <div class="flex flex-col items-center justify-center">
                  <div class="pl-4 w-full" v-if="!editingUser">
                    <label for="name">ID:</label>
                    <input
                      id="name"
                      v-model="id"
                      required
                      type="text"
                      class="border border-gray-300 rounded-lg focus:outline-none focus:border-[#A3DEE0] p-2 m-2"
                    />
                  </div>
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
                  <div class="flex items-center justify-center pt-4 space-x-4">
                    <button
                      @click="cancel()"
                      class="bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      @click="editingUser ? editRole() : createRole()"
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