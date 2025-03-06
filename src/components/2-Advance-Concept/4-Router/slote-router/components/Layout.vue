<!-- components/Layout.vue -->
<template>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
  
      <main>
        <router-view />
      </main>
  
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  header, footer {
    background-color: #f0f0f0;
    padding: 1rem;
  }
  </style>
  