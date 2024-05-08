<template>
  <p>{{ name }} ({{ ego }})</p>
  <button @click="changeName('War Chris'), changeEgo('Steve Trevor')">Change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Chris Pine',
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