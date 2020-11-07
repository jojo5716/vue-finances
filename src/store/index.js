import Vue from 'vue';
import Vuex from 'vuex';

import homePageStore from '../pages/Home/store';
import aboutPageStore from '../pages/About/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homePageStore,
    aboutPageStore,
  },
});
