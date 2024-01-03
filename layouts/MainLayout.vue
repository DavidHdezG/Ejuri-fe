
<template>
    <div class="flex">
        <Loading/>
        <SideBar/>
        <!--  w-[calc(100%-240px)] -->
        <div class="flex flex-col w-[calc(100%-240px)]">
            <Header :page-title="pageTitle"/>
            <Toaster richColors/>
            <slot/>
        </div>
    </div>
</template>

<script  setup>
    import Loading from '../components/Loading.vue';
    import SideBar from '../components/SideBar.vue'
    import Header from '../components/Header.vue'
    import { Toaster } from 'vue-sonner'
    const props = defineProps(['pageTitle'])
    const { pageTitle } = toRefs(props)
</script>
