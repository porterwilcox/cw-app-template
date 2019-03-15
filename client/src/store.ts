import Vue from 'vue';
import Vuex, { Commit, ActionContext } from 'vuex';
import AuthStore from './store/AuthStore'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...AuthStore.State
  },
  mutations: {
    ...AuthStore.Mutations
  },
  actions: {
    ...AuthStore.Actions
  },
});