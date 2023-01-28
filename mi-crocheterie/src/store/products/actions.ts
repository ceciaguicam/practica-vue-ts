import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";


const actions: ActionTree<IProductsState, IState> = {
  async fetchProducts({ commit }) {
    
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      "/products"
    );

    commit("setIsLoading", false);

    commit("setProducts", data);
  },
 
};

export default actions;




 /* async fetchUserById({ commit }, userId: number) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User>>(
      `/users/${userId}`
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setSelectedUser", data);
  }, */