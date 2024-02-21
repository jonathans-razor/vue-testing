<template>
  <p> this video has {{ likes }}</p>
</template>

<script>
export default {
  data() {
    return {
      likes: 0
    }
  },
  created() {
    setInterval(() => {
      this.likes++
    }, 2000)
  }
}
</script>