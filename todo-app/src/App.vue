<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const tudos = ref([])
const name = ref('')

const input_content = ref('')
const input_category= ref(null)

const tudos_asc = computed(() => tudos.value.sort((a, b) => {
  return a.createdAt = b.createdAt
}))

const addTodo = () => {
  tudos.value.push({
    content: input_content.value,
    category: input_category.value,
    createdAt: new Date()
  })
  input_content.value = ''
  input_category.value = null
}

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
})
</script>

<template>

  <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" placeholder="Name here" v-model="name"/>
      </h2>
    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
      </form>
        <input type="text" placeholder="e.g. Make a video" 
          v-model="input_content"/>
        {{ input_content }}
    </section>
  </main>

</template>