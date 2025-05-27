<template>
  <q-card class="q-ma-md">
    <q-expansion-item @update:model-value="onToggle">
      <template v-slot:header>
        <div class="custom-header row items-center">
          <q-icon :name="iconName" size="24px" class="q-mr-md" />
          <span class="text-bold">{{ headerText }}</span>
        </div>
      </template>
      <q-card-section>
        <p v-if="isOpen">Expanded content goes here. Maybe some details?</p>
        <p v-else>Click to reveal more information!</p>
      </q-card-section>
    </q-expansion-item>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const headerText = ref('Click to Expand');
const iconName = ref('folder_open');

const onToggle = (expanded) => {
  isOpen.value = expanded;
  headerText.value = expanded ? 'Collapse to Hide' : 'Click to Expand';
  iconName.value = expanded ? 'folder' : 'folder_open';
};
</script>

<style scoped>
.custom-header {
  padding: 10px;
}
.text-bold {
  font-weight: bold;
}
</style>
