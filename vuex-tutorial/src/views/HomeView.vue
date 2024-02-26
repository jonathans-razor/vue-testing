<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ counter }}
    </div>
    <div class="buttons">
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
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

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 40px;
  text-align: center;
}
.buttons button {
  font-size: 20px;
  width: 50px;
  margin: 0 10px;
}
</style>