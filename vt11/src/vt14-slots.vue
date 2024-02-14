<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const msg = ref('from parent')
const msg2 = ref('from parent again')
</script>

<template>
  <ChildComp>Message: {{ msg }}</ChildComp>
  <br />
  <ChildComp>Message 2: {{ msg2 }}</ChildComp>
</template>