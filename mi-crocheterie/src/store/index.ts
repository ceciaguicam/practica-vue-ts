import { createStore } from 'vuex'
import { User } from '@/models/user';
import productsModule from './products';
import loginModule from './login';

export interface IState {
  authUser: User | null; 
}

export default createStore <IState>({
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
    products: productsModule,
    login: loginModule
  }
})
