import fakeShopApi from "@/api/fakeShopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";
import { AxiosResponse } from "axios";
import { User } from "@/models/user";

const actions: ActionTree<ILoginState, IState> = {
  async askForAToken(context) {

    const data  = await fakeShopApi.post<unknown, AxiosResponse>("/login", context.getEmail(), context.getPassword());

    context.commit("setToken", data);

  }, 
  
};

export default actions;