<!--
An example of creating a reusable grid component and using it with external data.
-->

<script setup>
import DemoGrid from './Grid.vue'
import { ref } from 'vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Arnold Schwarzenegger', power: 10000 },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 8000 },
  { name: 'Jet Li', power: 7000 },
  { name: 'Bruce Willis', power: 6000 }
]
</script>

<template>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <DemoGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
  </DemoGrid>
</template>
