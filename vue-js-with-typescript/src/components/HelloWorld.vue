<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ erikMsg }}</h1>
    <h1>{{ fullName }}</h1>
    <h1>{{ counter }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  firstName = 'Erik';
  lastName = 'Smith';
  erikMsg = 'Erik, so awesome';
  counter = 0;
  zip: string | null = null;
  mounted(): void {
    console.log('HelloWorld mounted');
  }
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  increment() {
    //this.zip++;
    this.counter++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
