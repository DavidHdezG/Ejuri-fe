<script setup>
const { $adminStore, $userStore, $tablesStore } = useNuxtApp();
import { storeToRefs } from "pinia";
const { confirmDelete, showConfirm } = storeToRefs($tablesStore);
const { userList, editingUser, showOverlay, userIdToEdit } =
  storeToRefs($adminStore);
const userToDelete = ref(null); // User ID to delete
const columns = ["ID", "Nombre", "Correo", "Rol", "Acciones"]; // Table columns
const tempFullList = ref([]); // Temporal list to search data
onMounted(async () => {
  // Get the full user list
  tempFullList.value = await $adminStore.getUserList();
});

/**
 * Check if the user confirmed the delete action and delete the user and reload the list
 */
watch(
  () => confirmDelete.value,
  async () => {
    if (confirmDelete.value) {
      await $adminStore.deleteUser(userToDelete.value);
      confirmDelete.value = false;
      await $adminStore.getUserList();
    }
  }
);

/**
 * Set Show Overlay to true and set editingUser to false to show the dialog to add a new user
 */
const addUserButton = () => {
  editingUser.value = false;
  showOverlay.value = true;
};

/**
 * Set Show Overlay to true and set editingUser to true to show the dialog to edit a user
 * @param {number} id User ID to edit
 */
const editUserButton = (id) => {
  userIdToEdit.value = id;
  editingUser.value = true;
  showOverlay.value = true;
};

/**
 * Search data in the full list
 * @param {*} input 
 */
const searchData = (input) => {
  if (input === "") {
    setUserList();
    return;
  }
  let temp = tempFullList.value.filter(function (item) {
    return (
      item.id.toString().includes(input.toLowerCase()) ||
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.roles.name.toLowerCase().includes(input.toLowerCase()) ||
      item.email.toLowerCase().includes(input.toLowerCase()) ||
      item.status.toLowerCase().includes(input.toLowerCase())
    );
  });
  setUserList(temp);
};

/**
 * Set the user list to the full list or the filtered list
 * @param {array} list List to set
 */
const setUserList = (list = tempFullList.value) => {
  userList.value = list;
};

/**
 * Set the user ID to delete and show the confirm dialog
 * @param {number} id User ID to delete
 */
const deleteUser = async (id) => {
  userToDelete.value = id;
  console.log(userToDelete.value);
  showConfirm.value = true;
};
</script>

<template>
  <section class="container px-4 mx-auto">
    <AdminUsersDialog />
    <ConfirmAlert :string="userToDelete" type="usuario" />

    <div class="flex align-center justify-between">
      <div class="flex align-center mt-4 space-x-4">
        <div class="relative flex items-center md:mt-0">
          <span class="absolute">
            <Icon
              name="ph:magnifying-glass"
              size="22"
              class="w-5 h-5 mx-3 text-gray-400"
            />
          </span>

          <input
            @input="searchData($event.target.value)"
            type="text"
            placeholder="Búsqueda"
            class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <button
            @click="addUserButton()"
            class="items-center text-xs font-medium text-teal-500 transition-colors duration-200 sm:text-sm hover:text-[#3f51b5]"
          >
            <Icon name="ic:baseline-add-circle" size="26" />
          </button>
        </div>
      </div>
      <div>
        <NuxtLink to="/admin/roles">
          <button
            class="items-center text-xs font-medium text-teal-500 transition-colors duration-200 sm:text-sm hover:text-[#3f51b5]"
          >
            <Icon name="carbon:user-role" size="26" />
            <span>Roles</span>
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col mt-4">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2 align-middle">
          <div
            class="rounded-lg overflow-hidden border border-gray-200 overscroll-container"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="column in columns"
                    scope="col"
                    class="px-3.5 py-4 text-sm font-normal tracking-wider text-center text-gray-500"
                  >
                    {{ column }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in userList">
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    {{ item.id }}
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    {{ item.name }}
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    {{ item.email }}
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    {{ item.roles.name }}
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    <button
                      @click="editUserButton(item.id)"
                      class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      <Icon
                        name="material-symbols:edit-outline-rounded"
                        size="22"
                        class="w-6 h-6"
                      />
                    </button>
                    <button
                      @click="deleteUser(item.id)"
                      class="px-1 py-1 text-gray-500 hover:text-red-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      <Icon
                        name="material-symbols:delete-outline-rounded"
                        size="22"
                        class="w-6 h-6"
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
