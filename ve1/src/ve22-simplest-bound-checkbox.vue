<!--
We can create two-way bindings between state and form inputs using the v-model directive.
-->

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>

<template>
  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">Checked: {{ checked }}</label>
</template>