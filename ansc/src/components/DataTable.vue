<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <table>
    <tr v-for="item in items" :key="item.id">
      <td> {{ item.id }}</td>
      <td> {{ item.name }}</td>
    </tr>
  </table>
</template>
