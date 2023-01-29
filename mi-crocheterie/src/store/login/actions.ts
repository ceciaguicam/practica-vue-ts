import fakeShopApi from "@/api/fakeShopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";
import { AxiosResponse } from "axios";
import { Credentials } from "@/models/credentials";
import { TokenResponse } from "@/models/tokenResponse";
import router from "@/router";

const actions: ActionTree<ILoginState, IState> = {
  async login({commit}, credentials: Credentials) {


    const {data, status}  = await fakeShopApi.post<TokenResponse>("/auth/login", credentials);

    commit("setToken", data.access_token);
    
    localStorage.setItem("token", data.access_token)

    router.push({name: "productsListView"})
  },
  
};

export default actions;