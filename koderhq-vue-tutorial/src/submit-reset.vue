<template>
  <p>{{ counter }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>

  <form><p>
    <button>Submit Form</button>
  </p></form>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script>