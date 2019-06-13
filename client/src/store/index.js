import Vue from 'vue';
import Vuex from 'vuex';
import modulePopup from './modules/popup';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    popup: modulePopup,
  },
});
