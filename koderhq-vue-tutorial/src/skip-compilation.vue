<template>
  <p>Moustache syntax wraps the data property in double curly braces.</p>
  <p v-pre>Example: {{ name }}</p>

  <p>The resulting output will be the value of the data property.</p>
  <p>Example: {{ name }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe'
    }
  }
}
</script>