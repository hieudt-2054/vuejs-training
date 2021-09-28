import { RootState } from './../types/store';
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import authenticationStore from './authentication';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    app: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authenticationStore
  }
}

export default new Vuex.Store<RootState>(store)
