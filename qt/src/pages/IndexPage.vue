<template>
  <div class="q-pa-md">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn color="primary" label="Ajax Bar Trigger" @click="trigger" />
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

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {
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
      bar,
      trigger,
      todos,
      meta
    };
  },
});
</script>
