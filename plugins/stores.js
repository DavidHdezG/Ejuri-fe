import { useUserStore } from "~/stores/user"
import { useGeneralStore } from "~/stores/general"

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            userStore: useUserStore(),
            generalStore: useGeneralStore()
        },
    }
})