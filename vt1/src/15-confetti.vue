<script>
import JSConfetti from 'js-confetti'

export default {
  setup() {
    const confetti = new JSConfetti()

    function showConfetti() {
      confetti.addConfetti()
    }

    // Call the function once when the component is created
    showConfetti()

    // Expose the function to the template
    return {
      showConfetti
    }
  }
}
</script>

<template>
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
</template>

<style>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>