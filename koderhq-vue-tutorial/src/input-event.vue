<template>
  <p>Your name: {{ name }}</p>
  <input type="text" @input="getInput">
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getInput() {
      // get value of input on event object
      // and assign it to 'name' data property
      this.name = event.target.value
    }
  }
}
</script>