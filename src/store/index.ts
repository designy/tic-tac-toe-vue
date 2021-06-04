import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    xWon: 0,
    oWon: 0,
    equal: 0,
  },
  mutations: {
    setXWon(state) {
      state.xWon++;
    },
    setOWon(state) {
      state.oWon++;
    },
    setEqual(state) {
      state.equal++;
    },
    resetScores(state) {
      state.xWon = 0;
      state.oWon = 0;
      state.equal = 0;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({ paths: ["xWon", "oWon", "equal"] })],
});
