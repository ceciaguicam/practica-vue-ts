import { computed } from "vue";
import { useStore } from "vuex";

const useUser = () => {
    const store = useStore()

    return {
        //Getters
        user: computed(() => store.getters['user/getUser']),
        isLoading: computed(() => store.getters["user/getIsLoading"]),

        //Actions
        getUserInfo: () => store.dispatch("user/getUserInfo"), 
    }
}

export default useUser