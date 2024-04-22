<template>
  <button v-bind:disabled="isDisabled">Boolean Attribute Binding</button>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: true
    }
  }
}
</script>