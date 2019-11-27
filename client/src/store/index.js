import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterData: {}
  },
  mutations: {
    ADD_FILTER_DATA: (state, data) => {
      state.filterData = Object.assign({}, data);
    }
  },
  actions: {},
  modules: {}
});
