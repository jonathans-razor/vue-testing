<template>
  <p v-bind:class="status">Lorem ipsum dolor</p>
</template>

<script>
export default {
  data() {
    return {
      status: 'valid'
    }
  }
}
</script>

<style>
  .valid   { color: forestgreen }
  .invalid { color: crimson     }
</style>