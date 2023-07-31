<script setup>
    import MainLayout from './MainLayout.vue';
    const props = defineProps(['pageTitle'])
    const { pageTitle } = toRefs(props)
</script>

<template>
    <MainLayout :pageTitle="pageTitle">
        <Loading/>
    </MainLayout>
</template>
