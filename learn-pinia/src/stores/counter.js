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
  }
})
