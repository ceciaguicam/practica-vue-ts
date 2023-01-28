import { createStore } from 'vuex'
import { User } from '@/models/user';
import productsModel from './products';

export interface IState {
  authUser: User | null; 
}

export default createStore({
  state: {
    authUser: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productsModel
  }
})
