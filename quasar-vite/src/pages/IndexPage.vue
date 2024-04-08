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
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section>
        <div class="text-h6">Card With Parallax</div>
      </q-card-section>
    </q-card>
  </div>


  <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section>
        <div class="text-h6">
          Card With Video
        </div>
      </q-card-section>

    </q-card>
  </div>

  <div class="q-pa-md">
    <q-btn id="show-modal" @click="showModal = true">Show Modal</q-btn>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Modal Header</h3>
      </template>
    </modal>
  </Teleport>
</template>
