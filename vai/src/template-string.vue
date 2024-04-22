<template>
  <p>{{ greeting() }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: 'Andy2'
    }
  },
  methods: {
    greeting() {
      return `Hello there ${this.username}`
    }
  }
}
</script>