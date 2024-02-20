<script>
import ComponentContainer from 'src/components/ComponentContainer.vue';
import NoteCard from 'src/components/NoteCard.vue';
import { useLocalNotes } from 'src/helper.js';
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  componencts: {
    ComponentContainer,
    NoteCard
  },
  name: 'IndexPage',
  setup() {
    const notes = useLocalNotes();
    const router = useRouter();
    return { router, notes }
  }
})
</script>

<template>
  <q-page class="flex flex-center">
  </q-page>
</template>

