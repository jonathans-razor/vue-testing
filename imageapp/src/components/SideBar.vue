<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/86.jpg" title="Jonathan" nav>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color"></v-list-item>
          <v-list-item prepend-icon="mdi-dialpad" title="Gray Gallery" value="gray"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 220px"></v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>