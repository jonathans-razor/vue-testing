<template>
  <p v-html="msg"></p>
</template>

<script>
export default {
  data() {
    return {
      msg: '<strong>Hello Vue</strong>'
    }
  }
}
</script>