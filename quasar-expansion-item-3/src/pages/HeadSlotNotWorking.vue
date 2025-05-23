<template>
  <q-page padding>
    <h4 class="text-h4 q-mb-md">Expansion Item Header Slot Demo</h4>

    <q-card flat bordered class="q-mb-md">
      <q-card-section>
        This expansion item uses the default header.
      </q-card-section>
      <q-separator />
      <q-expansion-item label="Default Header Example">
        <q-card>
          <q-card-section>
            This is the content of the first expansion item.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-card flat bordered>
      <q-card-section>
        This expansion item uses a custom header with the
        <code>v-slot:header</code>.
      </q-card-section>
      <q-separator />
      <q-expansion-item>
        <!-- Using the header slot -->
        <template v-slot:header="props">
          <q-item
            clickable
            v-ripple
            class="full-width"
            :class="{ 'bg-blue-1': props.isExpanded }"
            @click="props.toggle"
          >
            <q-item-section avatar>
              <q-icon :name="props.isExpanded ? 'expand_less' : 'expand_more'" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Custom Header Example</q-item-label>
              <q-item-label caption>
                Here's some extra info in the header.
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-badge :color="props.isExpanded ? 'blue' : 'grey'">
                {{ props.isExpanded ? 'Open' : 'Closedqq' }}
              </q-badge>
            </q-item-section>
          </q-item>
        </template>

        <q-card>
          <q-card-section>
            This is the content of the second expansion item.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExpansionItemHeaderSlotDemo',
});
</script>
