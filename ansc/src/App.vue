<script setup >
import DataTable from './components/DataTable.vue';

const items = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
];
</script>


<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <DataTable :items="items" />
  </div>
</template>
