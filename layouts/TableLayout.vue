<script setup>
    import MainLayout from './MainLayout.vue';
    import Table from '../components/Table.vue'
    const props = defineProps(['pageTitle'])
    const { pageTitle } = toRefs(props)
</script>

<template>
    <MainLayout :pageTitle="pageTitle">
        <Loading/>
        <Table/>
    </MainLayout>
</template>
