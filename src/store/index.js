import Vue from 'vue';
import Vuex from 'vuex';

import homePageStore from '../pages/Home/store';
import settingPageStore from '../pages/Setting/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homePageStore,
    settingPageStore,
  },
});
