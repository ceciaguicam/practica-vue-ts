
import { MutationTree } from "vuex";
import { ILoginState } from "./state";

const mutations: MutationTree<ILoginState> = {
  setToken(state: ILoginState, token: string) {
    state.token = token;
  },

  deleteToken(state: ILoginState) {
    state.token = null
  }
};

export default mutations;