<!-- SideBar component, uses SideMenutItem components for each nav menu -->
<script setup>
import { storeToRefs } from 'pinia';


const { $userStore } = useNuxtApp();
const { role } = storeToRefs($userStore);
</script>

<template>
    <div class="h-screen w-[240px] container"></div>
    <div id = "sidebar" class="fixed flex flex-col justify-between bg-white h-screen shadow-xl z-10 px-3 w-30 md:w-60 lg:w-60">
        <div class="space-y-10  mt-5">
            <div class="space-y-0 flex flex-col items-center" id="logo">
                <nuxt-img src="logo.png" width="100px" class="mx-auto"/>
                <span class="text-xl font-bold">Ejuri</span>
            </div>
            <div id="menu" class="flex flex-col space-y-2">
                <NuxtLink to="/">
                    <SideMenuItem iconString='Inicio'/>
                </NuxtLink>
                <NuxtLink to="/admin/users" v-if="role==='Administrador'">
                    <SideMenuItem iconString='Administración'/>
                </NuxtLink>
                <NuxtLink to="/qrgen">
                    <SideMenuDropdown iconString='Digitalización' />
                </NuxtLink>
                <NuxtLink to="/annex">
                    <SideMenuItem iconString='Anexos PLD' />
                </NuxtLink>
            </div>
            
        </div>
        <div class="flex mx-auto mb-5" id="blu">
            <nuxt-img class="mx-auto" src="blu.png" width="100px"/>
        </div>  

    </div>
</template>
