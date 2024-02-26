import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
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
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {
  },
});