<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
      <q-expansion-item
        icon="info"
        label="What is Quasar?"
        expand-separator
        v-model="expanded"
      >
        <div>
          Quasar is a high-performance Vue.js framework that allows you to build responsive
          websites, PWAs, mobile apps, and Electron apps with a single codebase.
        </div>
      </q-expansion-item>

      <q-expansion-item
        icon="build"
        label="How to install Quasar?"
        expand-separator
        v-model="expanded2"
      >
        <div>
          You can install Quasar via npm or yarn:
          <pre><code>npm install -g @quasar/cli
quasar create my-app
cd my-app
quasar dev</code></pre>
        </div>
      </q-expansion-item>

      <q-expansion-item
        icon="code"
        label="Sample Code"
        expand-separator
        v-model="expanded3"
      >
        <div>
          Here's a simple example of using <code>&lt;q-expansion-item&gt;</code>:
          <pre><code>
&lt;q-expansion-item label="Example"&gt;
  &lt;div&gt;Content inside expansion item&lt;/div&gt;
&lt;/q-expansion-item&gt;
          </code></pre>
        </div>
      </q-expansion-item>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      expanded2: false,
      expanded3: false,
    }
  }
}
</script>
