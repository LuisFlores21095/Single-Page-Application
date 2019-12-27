import Vue from "vue";
import Vuex from "vuex";
const STORAGE_KEY = "Token";

Vue.use(Vuex);
let Storagetoken = window.localStorage.getItem(STORAGE_KEY);

export default new Vuex.Store({
  state: {
    filterData: {},
    token: Storagetoken ? JSON.parse(Storagetoken) : null
  },
  mutations: {
    ADD_FILTER_DATA: (state, data) => {
      state.filterData = Object.assign({}, data);
    },

    LOGIN_SUCCESS(state, respnse) {
      state.token = respnse;
      this.commit("saveToken");
    },
    saveToken(state){
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.token));
    }
  },
  actions: {},
  modules: {},
  getters:{
    tokenCheck(state){
        return state.token;
    }
  }
});
