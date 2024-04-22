<template>
  <p>{{ counter }}</p>

  <button @click.right="increment">Increment (Right-click only)</button>
  <button @click.middle="decrement">Decrement (Middle-click only)</button>
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