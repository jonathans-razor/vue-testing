<template>
  <q-page class="q-pa-md">
    <q-expansion-item
      label="Click to Expand"
      icon="expand_more"
      expand-separator
    >
      <div class="q-pa-md">
        <p>This is the expanded content of the QExpansionItem.</p>
        <p>You can put any content here, such as text, images, or other components.</p>
      </div>
    </q-expansion-item>

    <!-- Multiple expansion items example -->
    <q-expansion-item
      label="Another Section"
      icon="expand_more"
      expand-separator
    >
      <div class="q-pa-md">
        <p>More content inside another expansion item.</p>
      </div>
    </q-expansion-item>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
/* Optional styling */
</style>
