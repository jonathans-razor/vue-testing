<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter/>
    <counter-squared/>
    <buttons/>
    <color-code/>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    'counter': require('../components/Counter.vue').default,
    'counter-squared': require('../components/CounterSquared.vue').default,
    'buttons': require('../components/Buttons.vue').default,
    'color-code': require('../components/ColorCode.vue').default
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