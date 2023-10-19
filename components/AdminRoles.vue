<script setup>
import { storeToRefs } from "pinia";

const { $adminStore, $userStore, $tablesStore } = useNuxtApp();
const { confirmDelete, showConfirm } = storeToRefs($tablesStore);
const { rolesList, editingUser, showOverlay, roleIdToEdit } =
  storeToRefs($adminStore);
const roleToDelete = ref(null); // Role ID to delete
const columns = ["ID", "Nombre", "Acciones"]; // Table columns
const tempFullList = ref([]); // Temporal list to search data

onMounted(async () => {
  tempFullList.value = await $adminStore.getRolesList();
});

watch(
  () => confirmDelete.value,
  /**
   * Check if the user confirmed the delete action and delete the user and reload the list
   */
  async () => {
    if (confirmDelete.value) {
      await $adminStore.deleteRole(roleToDelete.value);
      confirmDelete.value = false;
      await $adminStore.getRolesList();
    }
  }
);

/**
 * Set Show Overlay to true and set editingUser to false to show the dialog to add a new role
 */
const addRoleButton = () => {
  editingUser.value = false;
  showOverlay.value = true;
};

/**
 * Set Show Overlay to true and set editingUser to true to show the dialog to edit a role
 * @param {number} id Role ID to edit
 */
const editRoleButton = (id) => {
  roleIdToEdit.value = id;
  editingUser.value = true;
  showOverlay.value = true;
};

/**
 * Set the role ID to delete and show the confirm dialog
 * @param {number} id Role ID to delete
 */
const deleteRole = async (id) => {
  roleToDelete.value = id;
  console.log(roleToDelete.value);
  showConfirm.value = true;
};

/**
 * Set the role list to the full list or the filtered list
 * @param {array} list List to set
 */
const setRoleList = (list = tempFullList.value) => {
  rolesList.value = list;
};

/**
 * Search data in the table
 * @param {string} input Input to search
 */
const searchData = (input) => {
  if (input === "") {
    setRoleList();
    return;
  }
  let temp = tempFullList.value.filter(function (item) {
    return (
      item.id.toString().includes(input.toLowerCase()) ||
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  });
  setRoleList(temp);
};
</script>

<template>
  <section class="container px-4 mx-auto">
    <AdminRolesDialog />
    <ConfirmAlert :string="roleToDelete" type="rol" />

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
            @click="addRoleButton()"
            class="items-center text-xs font-medium text-teal-500 transition-colors duration-200 sm:text-sm hover:text-[#3f51b5]"
          >
            <Icon name="ic:baseline-add-circle" size="26" />
          </button>
        </div>
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
                <tr v-for="item in rolesList">
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    {{ item.id }}
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    {{ item.name }}
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    <button
                      @click="editRoleButton(item.id)"
                      class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      <Icon
                        name="material-symbols:edit-outline-rounded"
                        size="22"
                        class="w-6 h-6"
                      />
                    </button>
                    <button
                      @click="deleteRole(item.id)"
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
