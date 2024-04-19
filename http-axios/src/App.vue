<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="post in posts" :key="post.id">
    <h2>
      {{ post.id }}
      {{ post.title }}
    </h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: 'Hello World',
      body: 'This is a post'
    })
    .then(response => 
      console.log(response))
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
