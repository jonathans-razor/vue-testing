<template>
  <q-page class="flex flex-center">
  <div>
    <q-btn label="Search" />
  </div>
  <br/>
  <q-img alt="Venice Boat" src="../assets/venice boats.avif" width="500px"/>
  </q-page>
</template>

<script setup>
import Modal from './ModalView.vue'
import { ref } from 'vue'

const showModal = ref(false)
import { defineComponent } from 'vue'

defineComponent({
  name: 'IndexPage'
})
</script>
