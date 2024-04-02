<template>
  <q-page class="">
  <div>
    <br/>
    <q-btn id="show-modal" @click="showModal = true">Show Modal</q-btn>
  </div>
  <br/>
  <div>
    <q-img alt="Venice Boat" src="../assets/venice boats.avif" width="500px"/>
  </div>


  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Modal Header</h3>
      </template>
    </modal>
  </Teleport>


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
