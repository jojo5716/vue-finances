import Vue from 'vue';
import Vuex from 'vuex';

import homePageActions from '../pages/Home/store/actions';

Vue.use(Vuex);

// const homePageActions =
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    ...homePageActions,
  },
  modules: {},
});
