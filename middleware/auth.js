import { useUserStore } from "../stores/user";


export default defineNuxtRouteMiddleware((to, _from) => {
    const userStore = useUserStore();

    if (to.path !== /login/ && !userStore.id) {
        return navigateTo('/login');
    }
});
