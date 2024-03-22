<script setup lang="ts">

import { ref } from 'vue';

const latitude = ref(0);
const longitude = ref(0);

function getLocation() {
  console.log("getLocation begin");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      console.log("Latitude:" + position.coords.latitude);
      console.log("Longitude:" + position.coords.longitude);
    }); 
  }
}

</script>



<template>
<button @click="getLocation">Get Location</button>
{{ latitude }}, {{ longitude }}
</template>



<style scoped>

</style>