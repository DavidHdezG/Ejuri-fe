
<template>
    <div id="header" class="flex justify-between max-h-[100px]  p-8  bg-transparent text-gray-700 shadow-md ">
        <div id="title" class="ml-5 text-2xl font-bold text-gray-700">
            <span>{{ pageTitle }}</span>
        </div>
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center space-x-3 drop-down" >
            <Icon name="material-symbols:account-circle" size="40"/>
            <div class="flex flex-col items-start text-sm">
                <span class="font-bold">Example</span>
                <span class="text-xs">Example@blucapital.mx</span>
            </div>
            
        </button>
        <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
            <ul aria-labelledby="dropdownLargeButton">
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Cerrar</span>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script  setup>
    const props = defineProps(['pageTitle'])
    const { pageTitle } = toRefs(props)


</script>
