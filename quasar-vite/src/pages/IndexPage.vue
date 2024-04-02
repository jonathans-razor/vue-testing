<template>
  <q-page class="flex flex-center">
  <div>
    <q-btn label="Search" />
  </div>
  <br/>
  <div>
    <q-img alt="Venice Boat" src="../assets/venice boats.avif" width="500px"/>
  </div>

  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
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
