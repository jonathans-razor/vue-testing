<template>
  <div class="root">
    <h3>Create an Account</h3>
    <p>
      <input type="text" placeholder="Email" v-model="email"/>
    </p>
    <p>
      <input type="password" placeholder="Password" vmodel="password.password"/>
    </p>
    <p>
      <input type="password" placeholder="Confirm Password" v-model="password.confirm"/>
    </p>
    <button>Submit</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'; // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      contact: {
        email: '',
      },
    });
    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      contact: {
        email: { required, email }, // Matches state.contact.email
      },
    };

    const v$ = useVuelidate(rules, state);

    return {
      email: '',
      password: {
        password: '',
        confirm: '',
      },
      state,
      v$,
    };
  },
});
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
