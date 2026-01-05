import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
    const lastNavigatedRoute = ref('')

    const setLastNavigatedRoute = (route) => {
        lastNavigatedRoute.value = route
    }

    return { lastNavigatedRoute, setLastNavigatedRoute }
})