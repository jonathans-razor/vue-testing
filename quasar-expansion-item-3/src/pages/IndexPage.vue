                   <template>
  <q-page class="q-pa-md">
    <!-- First expansion item with dynamic content -->
    <q-expansion-item
      label="Click to Expand"
      icon="expand_more"
      expand-separator
    >
      <div class="q-pa-md">
        <p>{{ dynamicContent }}</p>
        <p>This is additional static content inside the expansion.</p>
      </div>
    </q-expansion-item>

    <!-- Second expansion item with variable content -->
    <q-expansion-item
      label="Another Section"
      icon="expand_more"
      expand-separator
    >
      <div class="q-pa-md">
        <p>{{ anotherContent }}</p>
      </div>
    </q-expansion-item>

    <!-- Button to change content dynamically -->
    <q-btn label="Change Content" color="primary" class="q-mt-md" @click="updateContent" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Define reactive variables for dynamic content
const dynamicContent = ref('This is some initial dynamic content.')
const anotherContent = ref('Initial content for the second section.')

// Function to update the content variables
function updateContent() {
  dynamicContent.value = 'The content has been updated!'
  anotherContent.value = 'New content for the second section!'
}
</script>
