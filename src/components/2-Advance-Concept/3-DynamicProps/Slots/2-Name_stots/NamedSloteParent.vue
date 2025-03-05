<template>
  <NamedSloteChild>

    <template #header>
        <nav class=" bg-dark p-3 text-light text-center">
            <h5>Learn named slote in vue js</h5>
        </nav>
    </template>

    <template #footer>
        <footer class="bg-dark p-3 text-light text-center">
            <p>This is the footer</p>
        </footer>
    </template>

  </NamedSloteChild>
</template>

<script setup>
import NamedSloteChild from './NamedSloteChild.vue';
</script>
