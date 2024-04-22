<template>
  <p>{{ name }}</p>
  <button v-on:click="name = 'The Cooler Daniel'">Change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Daniel'
    }
  }
}
</script>