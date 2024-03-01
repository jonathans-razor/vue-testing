<template>
<div class="home">
  <div class="count">
    {{ storeCounter.count }}
  </div>
  <div class="buttons">
    <button @click="storeCounter.increment">+</button>
    <button @click="storeCounter.decrement">-</button> 
  </div>
  <hr>
  <div>
    This counter is: {{ oddOrEven }}
  </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
const oddOrEven = computed(() => count.value % 2 === 0 ? 'even' : 'odd')
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