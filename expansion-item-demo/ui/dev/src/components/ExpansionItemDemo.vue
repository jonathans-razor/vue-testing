<template>
  <q-page padding>
    <h2>Quasar Expansion Item Demo</h2>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Basic Expansion Item</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-expansion-item
          label="Click to expand"
        >
          <q-card>
            <q-card-section>
              This is the content that appears when the item is expanded.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Starts Expanded</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-expansion-item
          label="This starts expanded"
          default-opened
        >
          <q-card>
            <q-card-section>
              This content is visible by default.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Custom Header Content</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              Custom Header Title
            </q-item-section>
            <q-item-section side>
              <q-badge color="teal">
                10k
              </q-badge>
            </q-item-section>
          </template>
          <q-card>
            <q-card-section>
              You can put anything you want in the header using the 'header' slot.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
    </q-card>

     <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Disabled Expansion Item</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-expansion-item
          label="This item is disabled"
          disable
        >
          <q-card>
            <q-card-section>
              You won't see this content because the item is disabled.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { QExpansionItem, QCard, QCardSection, QSeparator, QAvatar, QItemSection, QBadge, QPage } from 'quasar';

export default defineComponent({
  name: 'ExpansionItemDemo',
  components: {
    QExpansionItem,
    QCard,
    QCardSection,
    QSeparator,
    QAvatar,
    QItemSection,
    QBadge,
    QPage
  },
});
</script>
