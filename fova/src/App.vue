<template>
  <div class="root">
    <h2>Create an Account</h2>
    <input type="text" placeholder="Email" v-model="email" />
    <!-- -->
    <input type="password" placeholder="Password" v-model="password.password" />
    <!-- -->
    <input
      type="password"
      placeholder="Confirm Password"
      v-model="password.confirm"
    />
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  validations() {
    return {};
  },
  methods: {
    submitForm() {
      alert('Form successfully submitted');
    },
  },
  data() {
    return {
      v$: useValidate(),
      email: '',
      password: {
        password: '',
        confirm: '',
      },
    };
  },
};
</script>

<style lang="css">
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}

button {
  background-color: #3498db;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  color: white;
}
</style>
