<template>
  <div
    class="flex items-center  space-x-2 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
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
let icon = ref('')


if (iconString.value === 'Inicio') icon.value = 'material-symbols:home-rounded';
if (iconString.value === 'Digitalización') icon.value = "material-symbols:qr-code";

</script>
