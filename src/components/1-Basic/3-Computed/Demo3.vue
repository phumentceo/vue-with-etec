<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search items..." />
      <ul>
        <li v-for="item in filteredItems" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const items = ref(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'])

  const searchQuery = ref('')
  
  const filteredItems = computed(() => {
    if (!searchQuery.value) {
      return items.value
    }

    return items.value.filter(item =>
      item.toLowerCase().includes(searchQuery.value.toLowerCase())
    )

  })
  </script>
  
  <style scoped>
  input {
    padding: 5px;
    margin-bottom: 10px;
    width: 200px;
    display: block;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
  }
  </style>
  