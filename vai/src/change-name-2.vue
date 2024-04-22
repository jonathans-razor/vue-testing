<template>
  <p>{{ name }}</p>
  <button v-on:click="changeName">Change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Chris Hemsworth'
    }
  },
  methods: {
    changeName() {
      this.name = 'Thunder Chris'
    }
  }
}
</script>