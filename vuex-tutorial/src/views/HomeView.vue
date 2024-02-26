<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div 
      class="counter"
      :style="{ color: $store.state.colorCode }"     
    >
      {{ $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decrement')">-</button>
      <button @click="$store.dispatch('increment')">+</button>
    </div>
    <div>
      <input 
        placeholder="Enter color code" 
        type="text" 
        v-model="colorCode"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue);
      }
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