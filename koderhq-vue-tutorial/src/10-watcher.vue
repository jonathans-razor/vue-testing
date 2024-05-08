<template>
  <p>Counter: {{ count }}</p>

  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(newValue) {
      if (newValue === 5) alert('Value reached 5')
    }
  }
}
</script>