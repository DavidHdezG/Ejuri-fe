<!-- SideBar component, uses SideMenutItem components for each nav menu -->
<script setup>
import { storeToRefs } from "pinia";

import { VNavigationDrawer } from "vuetify/lib/components/index.mjs";
const { $userStore } = useNuxtApp();
const { role } = storeToRefs($userStore);
const isActive = ref(false);
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
  <!-- <v-layout>
    <v-navigation-drawer expand-on-hover rail rail-width="50" width="240" @update:rail="isActive=!isActive" >
        <v-list class="pt-6">
          <v-list-item class="flex items-center align-center">
            <img src="/logo.png" alt="" width="150" class="mx-auto" />
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-container v-if="isActive">
          <v-row justify-center>
            <v-col class="flex items-center">
              <span class="mx-auto text-xl font-bold"> Ejuri </span>
            </v-col>
          </v-row>
        </v-container>
        <v-list nav>
          <v-list-item
            color="primary"
            prepend-icon="mdi-home"
            title="Inicio"
            value="home"
            to="/"
          ></v-list-item>
          <v-list-item
            v-if="role==='Administrador'"
            prepend-icon="mdi-account-multiple"
            title="Administración"
            value="admin"
            to="/admin/users"
          ></v-list-item>
          <v-list-item>
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-list-item-title
                  v-bind="props"
                  prepend-icon="mdi-qrcode"
                >
                  Digitalización
                </v-list-item-title>
              </template>
              <v-list>
                <v-list-item
                  title="Generar QR"
                  value="qrgen"
                  to="/qrgen"
                ></v-list-item>
                <v-list-item
                  title="Leer QR"
                  value="qrread"
                  to="/qrread"
                ></v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-file-document-edit-outline"
            title="Anexos PLD"
            value="annex"
            to="/annex"
          ></v-list-item>
          
          <v-list-item
          prepend-icon="mdi-currency-usd"
            title="Tren de Crédito"
            value="credit"
            to="/credit"
          >
            
        </v-list-item>

        </v-list>
    </v-navigation-drawer>
  </v-layout> -->
</template>
