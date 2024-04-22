<template>
  <p>{{ name }} ({{ ego }})</p>
  <button v-on:click="changeName('Space Chris'), changeEgo('Starlord')">Change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Chris Pratt',
      ego: 'Actor'
    }
  },
  methods: {
    changeName(name) {
      this.name = name
    },
    changeEgo(ego) {
      this.ego = ego
    }
  }
}
</script>