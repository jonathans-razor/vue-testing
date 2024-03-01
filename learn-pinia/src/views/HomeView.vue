<template>
<div class="home">
  <div class="count">
    {{ count }}
  </div>
  <div class="buttons">
    <button @click="increment">+</button>
    <button @click="decrement">-</button> 
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
const increment = () => count.value++
const decrement = () => count.value--
const count = ref(0)
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
} 
</style>