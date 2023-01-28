import { GetterTree } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";

const getters: GetterTree<ILoginState, IState> = {
  getToken(state) {
    return state.token;
  },
};

export default getters;