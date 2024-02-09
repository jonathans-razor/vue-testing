<!--
https://eugenkiss.github.io/7guis/tasks/#temp
-->

<script setup>
import { ref } from 'vue'

const celsius = ref(0)
const fahrenheit = ref(32)

function setCelsius(eventObject, targetValue = +eventObject.target.value) {
  celsius.value = targetValue
  fahrenheit.value = targetValue * (9 / 5) + 32
}

function setFahrenheit(eventObject, targetValue = +eventObject.target.value) {
  fahrenheit.value = targetValue
  celsius.value = (targetValue - 32) * (5 / 9)
}
</script>

<template>
  <input type="number" :value="celsius" @change="setCelsius"> Celsius =
  <input type="number" :value="fahrenheit" @change="setFahrenheit"> Fahrenheit
</template>