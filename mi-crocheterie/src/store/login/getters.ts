import { GetterTree } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";

const getters: GetterTree<ILoginState, IState> = {
  getToken(state) {
    return state.token;
  },
  getEmail(state) {
    return state.email;
  },
  getPassword(state) {
    return state.password;
  },
};

export default getters;