<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
  name: 'App',
  setup () {
    const state = reactive({
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    })
    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      contact: {
        email: { required, email } // Matches state.contact.email
      }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
});

</script>
