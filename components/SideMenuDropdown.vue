<script setup>
const props = defineProps(["iconString"]);
const { iconString } = toRefs(props);
let icon = ref();
if (iconString.value === "Digitalización")
  icon.value = "material-symbols:qr-code";
let showMenu = ref(false);

const dropdrownList = [
  {
    to: "/qrgen/documents",
    string: "Documents",
    icon: "material-symbols:lab-profile",
  },
  {
    to: "/qrgen/historic",
    string: "Histórico",
    icon: "icon-park-outline:history-query",
  },
];
</script>

<template>
  <div
    @mouseleave="showMenu = false"
    class="flex relative items-center space-x-2 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out"
  >
    <button class="flex space-between">
      <div>
        <Icon
          class="w-6 h-6 ml-10 fill-current inline-block"
          :name="icon"
          size="22"
        />
        <span class="pl-2">{{ iconString }}</span>
      </div>
      <button @mouseenter="showMenu = !showMenu" class="">
        <Icon name="ion:md-arrow-dropdown" size="22" class="" />
      </button>
    </button>
    <div v-if="showMenu">
      <div
        id="PopupMenu"
        class="absolute bg-white rounded-lg py-1.5 shadow-xl top-[40px] left-12"
      >
        <NuxtLink
          v-for="item in dropdrownList"
          :key="item.string"
          :to="item.to"
          @click="showMenu = false"
          class="flex items-center space-x-2 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
        >
          <Icon :name="item.icon" size="20" />
          <span class="pl-2 font-semibold text-sm">{{ item.string }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
