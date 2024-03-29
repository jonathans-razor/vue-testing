import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: "goldenrod"
  },
  mutations: {
    // Note: You can't trigger async code in mutations.
    increment(state, randomNumber) {
      state.counter += randomNumber;
      console.log("randomNumber: ", randomNumber);
    },
    decrement(state, randomNumber) {
      state.counter -= randomNumber;
      console.log("randomNumber: ", randomNumber);
    },
    setColorCode(state, newColor) {
      state.colorCode = newColor;
    } 
  },
  actions: {
    increment({ commit }) {
      console.log("increment(action)"),
        axios(
          "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new"
        ).then((response) => {
          commit("increment", response.data);
        });
    },
    decrement({ commit }) {
      console.log("decrement(action)"),
        axios(
          "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new"
        ).then((response) => {
          commit("decrement", response.data);
        });
    },
    setColorCode({ commit }, newColor) {
      commit("setColorCode", newColor);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {
  },
});