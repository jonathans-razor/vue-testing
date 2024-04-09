<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Alert" color="primary" @click="alert = true" />
    <q-btn label="Confirm" color="primary" @click="confirm = true" />
    <q-btn label="Prompt" color="primary" @click="prompt = true" />

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >You are currently not connected to any network.</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

  <div class="q-pa-md">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn color="primary" label="Ajax Bar Trigger" @click="trigger" />
    <br />
    <br />
    <q-btn color="primary" label="Toggle Dark Mode" @click="toggle" />
  </div>

  <br />
  <br />
  <br />
  <div>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </div>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {
    const $q = useQuasar();

    // get status
    console.log('1. is dark mode active:' + $q.dark.isActive); // true, false

    // get configured status
    console.log($q.dark.mode); // "auto", true, false

    // set status
    $q.dark.set(true); // or false or "auto"

    // toggle
    //$q.dark.toggle();

    console.log('2. is dark mode active:' + $q.dark.isActive); // true, false

    const bar = ref(null);

    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    function trigger() {
      const barRef = bar.value;
      barRef.start();

      setTimeout(() => {
        const barRef = bar.value;
        if (barRef) {
          barRef.stop();
        }
      }, Math.random() * 3000 + 1000);
    }

    function toggle() {
      $q.dark.set(!($q.dark.isActive));
    }

    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return {
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),
      address: ref(''),
      bar,
      toggle,
      trigger,
      todos,
      meta,
    };
  },
});
</script>
