<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
  <h1 class="test">Make me green</h1>
</template>

<style>
.title {
  color: red;
}
.test {
  color: rgb(0, 255, 8);
}
</style>