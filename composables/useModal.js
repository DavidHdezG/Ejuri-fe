
const component = ref()
const show = ref(false)
export function useModal() {
    return{
        component,
        show,
        openModal: () => (show.value = true),
        closeModal: () => (show.value = false),
    }
}