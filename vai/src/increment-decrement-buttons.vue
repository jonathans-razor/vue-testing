<template>
  <p>{{ num }}</p>

  <button v-on:click="increment">Increase number</button>
  <button v-on:click="decrement">Decrease number</button>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    increment() {
      this.num++
    },
    decrement() {
      this.num--
    }
  }
}
</script>