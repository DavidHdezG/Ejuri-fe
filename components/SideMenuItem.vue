<!-- Normal SideMenuItem -->
<template>
  <div
    class="flex items-center space-x-2 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
  >
    <Icon
      class="w-6 h-6 ml-10 fill-current inline-block"
      :name="icon"
      size="22"
    />
    <span>{{ iconString }}</span>
  </div>
</template>
<script setup>
const props = defineProps(["iconString"]);
const { iconString } = toRefs(props);
const icon = ref("");
const dropdown = ref(false);
if (iconString.value === "Inicio") icon.value = "material-symbols:home-rounded";
else if (iconString.value === "Digitalización") {
  icon.value = "material-symbols:qr-code";
  dropdown.value = true;
}
else if (iconString.value === "Administración") {
  icon.value = "material-symbols:admin-panel-settings";
}
else if (iconString.value === "Anexos PLD") {
  icon.value = "material-symbols:description";
}
</script>
