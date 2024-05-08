<template>
  <p>{{ greeting('Obi Blonde Kenobi') }}</p>
</template>

<script>
export default {
  methods: {
    greeting(name) {
      return 'Help us ' + name
    }
  }
}
</script>