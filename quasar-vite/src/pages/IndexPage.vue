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
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6">Table</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Dessert (100g serving)</th>
            <th class="text-right">Calories</th>
            <th class="text-right">Fat (g)</th>
            <th class="text-right">Carbs (g)</th>
            <th class="text-right">Protein (g)</th>
            <th class="text-right">Sodium (mg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Frozen Yogurt</td>
            <td class="text-right">159</td>
            <td class="text-right">6</td>
            <td class="text-right">24</td>
            <td class="text-right">4</td>
            <td class="text-right">87</td>
          </tr>
          <tr>
            <td class="text-left">Ice cream sandwich</td>
            <td class="text-right">237</td>
            <td class="text-right">9</td>
            <td class="text-right">37</td>
            <td class="text-right">4.3</td>
            <td class="text-right">129</td>
          </tr>
          <tr>
            <td class="text-left">Eclair</td>
            <td class="text-right">262</td>
            <td class="text-right">16</td>
            <td class="text-right">23</td>
            <td class="text-right">6</td>
            <td class="text-right">337</td>
          </tr>
          <tr>
            <td class="text-left">Cupcake</td>
            <td class="text-right">305</td>
            <td class="text-right">3.7</td>
            <td class="text-right">67</td>
            <td class="text-right">4.3</td>
            <td class="text-right">413</td>
          </tr>
          <tr>
            <td class="text-left">Gingerbread</td>
            <td class="text-right">356</td>
            <td class="text-right">16</td>
            <td class="text-right">49</td>
            <td class="text-right">3.9</td>
            <td class="text-right">327</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>


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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
</style>
