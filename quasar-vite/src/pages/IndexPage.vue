<script setup>
import Modal from "./ModalView.vue";
import { ref } from "vue";

const showModal = ref(false);
import { defineComponent } from "vue";

defineComponent({
  name: "IndexPage",
});
</script>

<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>

  <q-page class="">
    <div>
      <br />
      <q-btn id="show-modal" @click="showModal = true">Show Modal</q-btn>
    </div>
    <br />
    <div>
      <q-img
        alt="Venice Boat"
        src="../assets/venice boats.avif"
        width="250px"
      />
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
