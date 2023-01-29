import fakeShopApi from "@/api/fakeShopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";
import { AxiosResponse } from "axios";
import { Credentials } from "@/models/credentials";
import { TokenResponse } from "@/models/tokenResponse";

const actions: ActionTree<ILoginState, IState> = {
  async login({commit}, credentials: Credentials) {

    console.log(credentials)

    const {data, status}  = await fakeShopApi.post<TokenResponse>("/auth/login", credentials);

    commit("setToken", data.access_token);
    
    localStorage.setItem("token", JSON.stringify(data))

    console.log("Ha hecho la petición")

  }, 
};

export default actions;