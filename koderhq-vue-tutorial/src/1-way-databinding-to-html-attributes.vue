<template>
  <a href="{{ link }}">Vue {{ version }} API Reference</a>
</template>

<script>
export default {
  data() {
    return {
      version: 3,
      link: 'https://vuejs.org/api/'
    }
  }
}
</script>