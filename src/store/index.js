import Vue from 'vue';
import Vuex from 'vuex';

import homePageActions from '../pages/Home/store';
import aboutPageActions from '../pages/About/store';

const actions = {
  ...homePageActions.actions,
  ...aboutPageActions.actions,
};

const state = {
  ...homePageActions.state,
  ...aboutPageActions.state,
};

const mutations = {
  ...homePageActions.mutations,
  ...aboutPageActions.mutations,
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
