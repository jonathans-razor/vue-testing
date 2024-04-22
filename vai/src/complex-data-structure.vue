<template>
  <!-- reference objects with dot notation -->
  <h2>Hello, {{ userObj.fName }} {{ userObj.lName }}</h2>

  <!-- reference arrays with the indexer -->
  <h2>Hello, {{ userArr[0] }} {{ userArr[1] }}</h2>
</template>

<script>
export default {
  data() {
    return {
      userObj: { fName: 'John', lName: 'Doe' },
      userArr: ['Johnny', 'Doey']
    }
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
