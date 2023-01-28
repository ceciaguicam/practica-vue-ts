import { GetterTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const getters: GetterTree<IProductsState, IState> = {
  getUsers(state) {
    return state.products;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getUser(state) {
    return state.selectedProduct;
  },
};

export default getters;
