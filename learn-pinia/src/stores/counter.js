import { defineStore } from 'pinia'

export const useCounterStore = defineStore ({
  id: 'counter',
  state: () => ({
    count: 70
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  getters: {
    doubleCount() {
      return this.count * 2
    },
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? 'even' : 'odd'
    }
  }
})
