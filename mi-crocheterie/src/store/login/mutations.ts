import { MutationTree } from "vuex";
import { ILoginState } from "./state";

const mutations: MutationTree<ILoginState> = {
  setToken(state: ILoginState, token: string) {
    state.token = token;
  },
  deleteToken(state: ILoginState, value: null) {
    state.token = value
  }
};

export default mutations;