import { useUserStore } from "~/stores/user"
import { useGeneralStore } from "~/stores/general"
import { useTablesStore } from "~/stores/tables"
import { useAdminStore } from "~/stores/admin"
/**
 * Define stores as plugins to be used in the app
 */
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