import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
    const store = useStore()

    return {
        //Getters
        products: computed(() => store.getters['products/getProducts']),
        isLoading: computed(() => store.getters["products/getIsLoading"]),
        product: computed(() => store.getters["products/getProduct"]),

        //Actions
        fetchProducts: () => store.dispatch("products/fetchProducts"), 
        fetchProductById: (productId: number) => store.dispatch("products/fetchProductById", productId)
    }
}

export default useProducts



