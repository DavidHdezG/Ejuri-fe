import { useUserStore } from "~/stores/user"
import { useGeneralStore } from "~/stores/general"
import { useTablesStore } from "~/stores/tables"
import { useAdminStore } from "~/stores/admin"
export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            userStore: useUserStore(),
            generalStore: useGeneralStore(),
            tablesStore: useTablesStore(),
            adminStore: useAdminStore(),
        },
    }
})