import { Module } from "vuex";
import { IState } from "..";
import state, { ILoginState } from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const loginModule: Module<ILoginState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default loginModule