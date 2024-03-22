<script setup lang="ts">

import { onMounted, ref } from 'vue'
import leaflet from 'leaflet'

const latitude = ref(0);
const longitude = ref(0);
const map = ref();
const mapContainer = ref();

onMounted(() => {
  map.value = leaflet.map(mapContainer.value).setView([51.505, -0.09], 13);
  leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map.value);
}); 

function getLocation() {
  console.log("getLocation begin");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      console.log("Latitude:" + position.coords.latitude);
      console.log("Longitude:" + position.coords.longitude);
      map.value.setView([position.coords.latitude, position.coords.longitude], 13); 
    }); 
  }
}

</script>



<template>
  <button @click="getLocation">Get Location</button>
  {{ latitude }}, {{ longitude }}

  <div ref="mapContainer" style="margin:0px; width: 100%;height: 96vh"></div>
</template>



<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>