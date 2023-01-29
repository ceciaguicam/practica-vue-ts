import { useStore } from "vuex"
import { computed } from "vue";
import store from "@/store";
import { Credentials } from "@/models/credentials";

const useLogin = () => {
    const store = useStore()

    return {
        //Getters
        token: computed(() => store.getters['login/getToken']),
        getCredentials: computed(() => store.getters['login/getCredentials']),
        getEmail: computed(() => store.getters["login/getEmail"]),
        getPassword: computed(() => store.getters["login/getPassword"]),

        //Mutations
        setEmail: (email: string) => store.commit("login/setEmail", email),
        setPassword: (password: string) => store.commit("login/setPassword", password),
        setCredentials: (credentials: Credentials) => store.commit("login/setCredentials", credentials),
        logout: (value: boolean) => store.commit("login/deleteToken", value),

        //Actions
        login: (credentials: Credentials) => store.dispatch("login/login", credentials)
        
    }
}

export default useLogin