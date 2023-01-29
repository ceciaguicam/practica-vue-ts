import fakeShopApi from "@/api/fakeShopApi";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";
import { AxiosHeaders } from "axios";
import { User } from "@/models/user";
import { stringifyQuery } from "vue-router";


const actions: ActionTree<IUserState, IState> = {
  async getUserInfo({ commit }) {
    
    commit("setIsLoading", true);

    const token = localStorage.getItem('token')

    const { data, status } = await fakeShopApi.get<string, AxiosResponse<User>>("/auth/profile", 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


    commit("setIsLoading", false);

    commit("setUser", data);
  },
 
};

export default actions;


