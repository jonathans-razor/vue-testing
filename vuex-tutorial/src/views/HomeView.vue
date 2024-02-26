<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      xxx
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decrement')">-</button>
      <button @click="$store.dispatch('increment')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
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