import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import state from './state';
import actions from './actions';

Vue.use(Vuex);

// export default {
//   state,
//   mutations,
//   actions,
// };

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
