<template>
  <div class="buttons">
    <button @click="$store.dispatch('decrement')">-</button>
    <button @click="$store.dispatch('increment')">+</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>