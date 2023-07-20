
<template class="flex">
    <MainLayout page-title="Digitalización de documentos">
        <div class="bg-transparent flex w-full pl-4 pt-4 pr-8 space-x-4">
            <a href="qrgen/documents" class=" bg-[#D1D5DB] text-gray-700 text-sm font-bold py-2 px-4 rounded-2xl hover:bg-teal-500 hover:text-white transition duration-300">Documentos</a>
            <a href="qrgen/historic" class="bg-[#D1D5DB] text-gray-700 text-sm font-bold py-2 px-4 rounded-2xl hover:bg-teal-500 hover:text-white transition duration-300">Histórico</a>
        </div>
       <div class="bg-transparent flex justify-evenly items-center h-full">
            
            <div class="bg-white drop-shadow-2xl rounded-full w-96">
                <div class="w-full mx-auto bg-white p-8 rounded-t-[30px]">
                    <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
                    <select required v-model="category" name="category" id="category" class="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]">
                        <option v-for="item in $generalStore.category" :value="item">
                            {{ item }}
                        </option>
                    </select>
                </div>
                <form action="" class="w-full mx-auto bg-white pl-8 pr-8 pb-8 rounded-b-[30px]">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                        <input type="text" name="name" id="name" class="indent-2 w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]">
                    </div>
                    <div class="mb-4">
                        <label for="folio" class="block text-gray-700 text-sm font-bold mb-2">Folio</label>
                        <input type="text" name="folio" id="folio" class="w-full indent-2 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]">
                    </div>
                    <div class="mb-4">
                        <label for="type" class="block text-gray-700 text-sm font-bold mb-2">Tipo de documento</label>
                        <select required v-model="other" name="type" id="type" class="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]">
                            <option v-if="category==='PYME'" v-for="item in $generalStore.pyme" :value="item" :key="item">
                                {{ item }}
                            </option>
                            <option v-if="category==='FLORESER'" v-for="item in $generalStore.floreser" :value="item" :key="item">
                                {{ item }}
                            </option>
                            <option v-if="category==='BURO'" v-for="item in $generalStore.buro" :value="item" :key="item">
                                {{ item }}
                            </option>
                            <option v-if="category==='MUTUOS'" v-for="item in $generalStore.mutuos" :value="item" :key="item">
                                {{ item }}
                            </option>
                            <option v-if="category==='LABORAL'" v-for="item in $generalStore.laboral" :value="item" :key="item">
                                {{ item }}
                            </option>
                            <option v-if="category==='ALIANZAS Y PROVEEDORES'" v-for="item in $generalStore.alianzasProveedores" :value="item" :key="item">
                                {{ item }}
                            </option>
                        </select>

                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between ">
                            <label for="comments" class="block text-gray-700 text-sm font-bold mb-2">Comentarios</label>
                            <input v-if="other!='Otro (Escribir en comentarios)'" type="checkbox" name="useComments" id="useComments" v-model="useComments" class="rounded-full  border-gray-300">
                            <input v-else checked disabled type="checkbox" name="useComments" id="useComments" v-model="useComments" class="rounded-full border-gray-300">
                        </div>
            
                        <input v-if="other!='Otro (Escribir en comentarios)'" type="text" name="comments" id="comments" class="w-full indent-2 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]">
                        <input v-else required type="text" name="comments" id="comments" class="w-full px-3 indent-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#A3DEE0]">
                    </div>
                    <button
                        class="w-full bg-teal-500 text-gray-700 text-sm font-bold py-2 px-4 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300"
                        type="submit">Generar QR</button>
                </form>
            </div>
            <div id="qrimage" class="bg-white drop-shadow-2xl rounded-[30px] w-[400px] flex flex-col items-center ">
                <div class="w-[300px] flex flex-col items-center p-3">
                    <nuxt-img class=" " src="qrcode.png" width="250px"/>
                    <div class="flex items-center content-center pb-5">
                        <button class="">
                            <Icon color="#009688" name="material-symbols:download-for-offline-rounded" size="30" class=""/>
                        </button>
                        <button class="">
                            <Icon color="#009688" name="material-symbols:print-rounded" size="30"/>
                        </button>
                    </div>
                </div>
              
            </div>
       </div>
       
    </MainLayout>
    
</template>

<script  setup>
    import MainLayout from '../../layouts/MainLayout.vue'
    const { $generalStore } = useNuxtApp()
    let category = ref('')
    let useComments = ref(false)
    let other = ref(false)
    try{
        await $generalStore.getGeneralData()
    }catch(e){
        console.log(e)
    }
</script>
