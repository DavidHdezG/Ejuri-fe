<template>
  <div
    id="header"
    class="flex justify-between max-h-[100px] p-8 bg-transparent text-gray-700 shadow-md"
  >
    <div id="title" class="ml-5 text-2xl font-bold text-gray-700">
      <span>{{ pageTitle }}</span>
    </div>

    <div
      class="flex justify-center relative space-x-2"
      id="dropdown"
      @click="showMenu = !showMenu"
    >
      <button
        @click=""
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        class="flex space-x-3 drop-down hover:text-teal-500 transition duration-150 ease-in-out"
      >
        <button class="">
          <Icon name="ion:md-arrow-dropdown" size="22" class="" />
        </button>
        <div class="flex flex-col items-start text-sm">
          <span class="font-bold"
            >{{ $userStore.name }} ({{ $userStore.role }})</span
          >
          <span class="text-xs">{{ $userStore.email }}</span>
        </div>
      </button>
      <Transition>
        <div
          v-if="showMenu"
          class="absolute flex flex-col space-y-1 top-[40px] w-[170px] right-[-20px]"
        >
          <div class="bg-white rounded-lg z-20 drop-shadow-xl">
            <button
              @click="logout()"
              class="flex overflow-hidden w-full text-xs font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <Icon name="solar:lock-password-bold" size="20" />
              <span class="pl-2 font-semibold text-xs">Cambiar contraseña</span>
            </button>
          </div>
          <div class="bg-white rounded-lg z-20 drop-shadow-xl">
            <button
              @click="logout()"
              class="flex overflow-hidden w-full text-xs font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <Icon name="ion:md-log-out" size="20" />
              <span class="pl-2 font-semibold text-xs">Cerrar sesión</span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["pageTitle"]);
const { pageTitle } = toRefs(props);
const { $userStore } = useNuxtApp();
const showMenu = ref(false);
const logout = async () => {
  try {
    $userStore.logout();
    //navigateTo("/");
  } catch (e) {
    console.log(e);
  }
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.08s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>