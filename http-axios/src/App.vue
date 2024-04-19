<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>
    {{ posts.id }}
    {{ posts.title }}
  </h2>
  <p>{{ posts.body }}</p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        this.posts = response.data
      })
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
