import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  login: "",
  password: "",
  userId: 0
};

const mutations = {
  setLogin: (state, value) => {
    state.login = value;
  },
  setPassword: (state, value) => {
    state.password = value;
  },
  setUserId: (state, value) => {
    state.userId = value;
  }
};

const getters = {
  getLogin: state => state.login,
  getPassword: state => state.password,
  getUserId: state => state.userId
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: {},
  modules: {}
});
