<template>
  <p>{{ greeting() }}</p>
</template>

<script>
export default {
  methods: {
    greeting() {
      return 'Hello there'
    }
  }
}
</script>