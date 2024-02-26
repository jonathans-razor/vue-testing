import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    // Note: You can't trigger async code in mutations.
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }    
  },
  actions: {
    increment() {
      console.log('increment(action)')
    }
  },
  modules: {
  }
})
