<script setup>
import { ref } from 'vue'

const list = ref([1, 2, 3, 4, 77])
</script>

<template>
  <button @click="list.reverse()">Reverse List</button>

  <ul v-if="list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
</template>