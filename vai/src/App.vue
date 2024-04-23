<template>
  <p>Lazy First Name: {{ firstName }}</p>
  <input type="text" v-model.lazy.trim="firstName">

  <p>Realtime Last Name: {{ lastName }}</p>
  <input type="text" v-model.trim="lastName">
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  }
}
</script>