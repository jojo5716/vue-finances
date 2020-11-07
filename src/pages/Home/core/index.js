import store from '../../../store';

import computed from './computed';
import props from './props';
import methods from './methods';

export default {
  props,
  computed,
  methods,
  store,
  beforeMount() {
    this.$store.dispatch('fetchHomeData', this.endpoints?.urls?.getHomeData);
  },
};
