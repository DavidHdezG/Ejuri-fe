<script lang="ts" setup>
const props = defineProps(["data"]);
const { data } = toRefs(props);
</script>

<template>
  <td class="px-4 py-4 text-sm whitespace-nowrap">
    <div>
      <p v-if="data==='true'" class="text-gray-600">
        Si
      </p>
      <p v-else-if="data==='false'" class="text-gray-600">
        No
      </p>
      <p v-else class="text-gray-600">
        {{ data }}
      </p>
    </div>
  </td>
</template>
