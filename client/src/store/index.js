import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  login: "",
  password: "",
  userId: 0,
  budgetStages: {
    closing: "Закрытие",
    doing: "Выполнение",
    planning: "Планирование"
  }
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
  getUserId: state => state.userId,
  getBudgetStage: state => stage => state.budgetStages[stage]
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: {},
  modules: {}
});
