<template>
<p> this video has {{ likes }} likes</p>

<button v-on:click="updateLikes">
  Like
</button>
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
  },
  methods: {
    updateLikes() {
      //alert('Thanks! Have some cake 🍰.')
      this.likes++
      this.likes++
      //this.likes++
    }
  }
}

</script>